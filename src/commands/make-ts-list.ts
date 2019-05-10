import { Command, flags } from '@oclif/command';
import { writeFile } from 'fs';
import { resolve as resolvePath, sep } from 'path';
import * as recursive from 'recursive-readdir';
const replaceExt = require('replace-ext');
const sortPaths = require('sort-paths');

export class MakeTsList extends Command {
  static excludes = [
    '*server*', '*node_modules*', '*public_api.ts*', '*test.ts*', '*.spec*', 'environment*'
  ];
  static description = 'make index.ts with list of ts files recursive from source folder';

  static flags = {
    help: flags.help({ char: 'h' }),
    excludes: flags.string({ char: 'e', multiple: true, description: '[default: ' + MakeTsList.excludes.join(',') + '] exclude directories/files masks' }),
    indexFileName: flags.string({ char: 'i', description: 'output file', default: 'index.ts' })
  };
  static args = [{ name: 'folder' }];

  async run() {
    process.setMaxListeners(0);
    require('events').EventEmitter.defaultMaxListeners = 100;
    const { args, flags } = this.parse(MakeTsList);
    const folder = args.folder ? resolvePath(args.folder) : resolvePath('.');
    const excludes = flags.excludes || MakeTsList.excludes;
    const indexFileName = flags.indexFileName ? flags.indexFileName : '';
    try {
      await this.createIndexFile(
        folder,
        excludes,
        indexFileName
      );
    } catch (error) {
      console.error(error);
    }
  }
  createIndexFile(folder: string, excludes: string[], indexFileName: string) {
    const indexFilePath = resolvePath(folder, indexFileName);
    const newExcludes = ['!*.ts', ...excludes, indexFilePath];
    this.debug('Start', {
      folder: folder,
      excludes: newExcludes,
      indexFileName: indexFileName,
      indexFilePath: indexFilePath
    });
    return new Promise((resolve, reject) =>
      recursive(folder, newExcludes, (err, files) => {
        if (err || !Array.isArray(files)) {
          this.debug('Error', err);
          reject(err);
        } else {
          files = sortPaths(files, sep);
          this.debug('Founded files', files);
          const list: string[] = [];
          files.forEach(file => {
            let localFile = replaceExt(
              file.replace(folder, '').replace(new RegExp('\\' + sep, 'g'), '/'), ''
            ).split(sep).join('/');
            if (localFile && localFile[0] === '/') {
              localFile = '.' + localFile;
            }
            list.push(`export * from '${localFile}';`);
          });
          const body = list.join('\n') + '\n';
          writeFile(
            indexFilePath, body, err => {
              if (err) {
                this.debug('Error', err);
                reject(err);
              } else {
                this.debug('End', true);
                resolve();
              }
            }
          );
        }
      })
    );
  }
}
