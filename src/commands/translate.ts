import { flags, Command } from '@oclif/command';
import { access, constants, readFileSync, writeFileSync } from 'fs';
import { basename, resolve as resolvePath, sep } from 'path';
import * as recursive from 'recursive-readdir';
const npmRun = require('npm-run');
const replaceExt = require('replace-ext');
const sortPaths = require('sort-paths');
const po2json = require('po2json');
const stringifyObject = require('stringify-object');

export class Translate extends Command {
  static excludes = [
    '*node_modules*', '*.spec'
  ];
  static description = 'extract translate from source and make ts class from it';

  static flags = {
    help: flags.help({ char: 'h' }),
    excludes: flags.string({ char: 'e', multiple: true, description: '[default: ["' + Translate.excludes.join(',') + '"]] exclude directories/files masks' }),
    prefix: flags.string({ char: 'p', description: 'name of class prefix', default: '' }),
    templateName: flags.string({ char: 't', description: 'name of template', default: 'template' }),
    format: flags.enum({ char: 'f', description: 'file prefix and build mode', options: ['po', 'json'], default: 'po' }),
    clean: flags.boolean({ char: 'c', description: 'remove obsolete strings when merging' })
  };

  static args = [{ name: 'folder' }];

  async run() {
    const { args, flags } = this.parse(Translate);
    let jsonFiles: string[] = [];
    const folder = args.folder ? resolvePath(args.folder) : resolvePath('.');
    const format = flags.format;
    const excludes = flags.excludes || Translate.excludes;
    const prefix = flags.prefix ? flags.prefix : '';
    const templateName = flags.templateName ? flags.templateName : 'template';
    const clean = flags.clean ? flags.clean : false;
    if (format === 'json') {
      jsonFiles = await this.listOfJsonFiles(
        folder,
        excludes
      );
      try {
        await this.ngxTranslateExtract(
          folder,
          format,
          jsonFiles,
          false
        );
      } catch (error) {
        console.error(error);
      }
      try {
        await this.json2ts(
          folder,
          excludes,
          prefix
        );
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        await this.ngxTranslateExtract(
          folder,
          format,
          templateName,
          clean
        );
      } catch (error) {
        console.error(error);
      }
      try {
        await this.po2ts(
          folder,
          excludes,
          prefix
        );
      } catch (error) {
        console.error(error);
      }
    }
  }
  private listOfJsonFiles(folder: string, excludes: string[]) {
    const newExcludes = ['!*.json', ...excludes];
    return new Promise<string[]>((resolve, _reject) => {
      try {
        recursive(folder, newExcludes, (_err, files) => {
          resolve(files);
        });
        // tslint:disable-next-line:no-unused
      } catch (error) {
        resolve([]);
      }
    });
  }
  json2ts(folder: string, excludes: string[], prefix: string) {
    const newExcludes = ['!*.json', ...excludes];
    this.debug('Start', {
      folder: folder,
      excludes: newExcludes,
      prefix: prefix
    });
    return new Promise((resolve, reject) => {
      recursive(folder, newExcludes, (err, files) => {
        if (err || !Array.isArray(files)) {
          this.debug('Error', err);
          reject(err);
        } else {
          files = sortPaths(files, sep);
          this.debug('Founded files', files);
          files.forEach(file => {
            const content = readFileSync(file).toString();
            const fileName = basename(file, '.json');
            const classFile = replaceExt(file, '.i18n.ts');
            const jsonData = JSON.parse(content);
            const keys = Object.keys(jsonData);
            keys.forEach(key => {
              if (!key) {
                delete jsonData[key];
              }
            });
            // tslint:disable-next-line:no-unused
            const className = prefix + fileName[0].toUpperCase() + fileName.substr(1) + 'I18n';
            let classBody = '';
            try {
              classBody = this.jsonToStringWithTypescriptClass(className, jsonData);
              // tslint:disable-next-line:no-unused
            } catch (error) {
              classBody = '';
            }
            this.debug(classFile, classBody);
            writeFileSync(
              classFile, classBody
            );
          });
          this.debug('End', true);
          resolve();
        }
      });
    });
  }
  po2ts(folder: string, excludes: string[], prefix: string) {
    const newExcludes = ['!*.po', ...excludes];
    this.debug('Start', {
      folder: folder,
      excludes: newExcludes,
      prefix: prefix
    });
    return new Promise((resolve, reject) => {
      recursive(folder, newExcludes, (err, files) => {
        if (err || !Array.isArray(files)) {
          this.debug('Error', err);
          reject(err);
        } else {
          files = sortPaths(files, sep);
          this.debug('Founded files', files);
          files.forEach(file => {
            const content = readFileSync(file).toString().split('\n').filter(line => line.includes('msgid') || line.includes('msgstr')).join('\n');
            const fileName = basename(file, '.po');
            const classFile = replaceExt(file, '.i18n.ts');
            const jsonData = po2json.parse(content);
            const keys = Object.keys(jsonData);
            keys.forEach(key => {
              if (!key) {
                delete jsonData[key];
              }
            });
            this.debug('jsonData', jsonData);
            const className = prefix + fileName[0].toUpperCase() + fileName.substr(1) + 'I18n';
            const classBody = this.jsonToStringWithTypescriptClass(className, jsonData);
            this.debug(classFile, classBody);
            writeFileSync(
              classFile, classBody
            );
          });
          this.debug('End', true);
          resolve();
        }
      });
    });
  }
  private jsonToStringWithTypescriptClass(className: string, data: any) {
    const newObject: any = {};
    if (data && typeof data === 'object') {
      const keys = Object.keys(data);
      keys.forEach(key => {
        if (key && data[key] && Array.isArray(data[key]) && data[key].length === 2) {
          newObject[key] = data[key][1];
        } else {
          if (key) {
            newObject[key] = data[key];
          }
        }
      });
    }
    return 'export const ' + className + ' = ' +
      stringifyObject(newObject, {
        indent: '  '
      })
      + ';\n';
  }
  ngxTranslateExtract(folder: string, format: string, templateName: string | string[], clean: boolean) {
    const newExcludes = ['/**/*.html', '/**/*.ts'];
    this.debug('Start', {
      folder: folder,
      format: format,
      templateName: templateName,
      excludes: newExcludes
    });
    return new Promise((resolve, reject) => {
      const inputFolder = folder.replace(new RegExp('\\' + sep, 'g'), '/').split(sep).join('/');
      const outputFormat = format === 'po' ? 'pot' : format;
      let outputFolder: string;
      if (Array.isArray(templateName)) {
        const outputFolders: string[] = [];
        templateName.forEach(oneTemplateName =>
          outputFolders.push(
            resolvePath(folder, 'i18n', oneTemplateName).replace(new RegExp('\\' + sep, 'g'), '/').split(sep).join('/')
          )
        );
        outputFolder = outputFolders.join(' ');
      } else {
        outputFolder = resolvePath(folder, 'i18n', templateName + '.' + outputFormat).replace(new RegExp('\\' + sep, 'g'), '/').split(sep).join('/');
      }
      access(inputFolder, constants.F_OK, err => {
        if (err) {
          reject(new Error('The path you supplied was not found'));
        } else {
          const command = 'node ' + resolvePath(__dirname, '..', '..', 'node_modules/@biesbjerg/ngx-translate-extract/bin/cli.js') + ' ' +
            '--patterns ' + newExcludes.join(' ') + ' ' +
            '--input ' + inputFolder + ' ' +
            '--output ' + outputFolder + ' ' +
            '--verbose=false ' +
            '--format=' + outputFormat + ' --marker translate' + (clean ? ' --clean' : '');
          this.debug('command', command);
          npmRun.exec(
            command,
            {},
            (err: any, stdout: any, stderr: any) => {
              this.debug('err', err);
              this.debug('stdout', stdout);
              this.debug('stderr', stderr);
              if (err) {
                this.debug('End', err);
                reject(err);
              } else {
                this.debug('End', true);
                resolve();
              }
            }
          );
        }
      });
    });
  }
}
