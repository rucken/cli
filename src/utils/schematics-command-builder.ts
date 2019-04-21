import { readFileSync } from 'fs';
import { resolve } from 'path';
const npmRun = require('npm-run');

export function runCommand(commands: string, debug: (...args: any[]) => void) {
  return new Promise((resolve, reject) => {
    debug('command', commands);
    npmRun.exec(commands, {}, (err: any, stdout: any, stderr: any) => {
      debug('err', err);
      debug('stdout', stdout);
      debug('stderr', stderr);
      if (err) {
        debug('End', err);
        resolve();
      } else {
        debug('End', true);
        resolve();
      }
    });
  });
}

export function schematicsCommandBuilder(
  projectPath: string,
  template: string,
  args: string[],
  namedArgs: { [key: string]: string | undefined }
) {
  const argsArray: string[] = args;
  let localSchematicsCli;
  try {
    localSchematicsCli = resolve(__dirname, '../../node_modules/@angular-devkit/schematics-cli/bin/schematics.js');
    readFileSync(localSchematicsCli).toString();
  } catch (__error) {
    try {
      localSchematicsCli = resolve(__dirname, '../node_modules/@angular-devkit/schematics-cli/bin/schematics.js');
      readFileSync(localSchematicsCli).toString();
    } catch (__error) {
      try {
        localSchematicsCli = resolve(__dirname, 'node_modules/@angular-devkit/schematics-cli/bin/schematics.js');
        readFileSync(localSchematicsCli).toString();
      } catch (__error) {
        console.error(__error);
      }
    }
  }
  const projectSchematicsCli = resolve(projectPath, 'node_modules/@angular-devkit/schematics-cli/bin/schematics.js');
  const templateArray = template.split(':');
  const templateFolder = templateArray.length ? templateArray[0] : 'empty';
  const templateName = templateArray.length ? templateArray[1] : 'empty';
  const projectTemplate =
    resolve(projectPath, templateFolder);
  const localNodeModulesTemplate =
    resolve(__dirname, '../../node_modules', templateFolder);
  const projectNodeModulesTemplate =
    resolve(projectPath, 'node_modules', templateFolder);
  Object.keys(namedArgs).forEach(key => {
    if (namedArgs[key] !== undefined) {
      argsArray.push(
        `--${key}=${namedArgs[key]}`
      );
    }
  }
  );
  let projectCollections: any = {};
  let localNodeModulesCollections: any = {};
  let projectNodeModulesCollections: any = {};
  try {
    projectCollections = JSON.parse(readFileSync(
      resolve(projectTemplate, 'src', 'collection.json')
      , 'utf8').toString());
    // tslint:disable-next-line:no-unused
  } catch (error) {
  }
  try {
    localNodeModulesCollections = JSON.parse(readFileSync(
      resolve(localNodeModulesTemplate, 'src', 'collection.json')
      , 'utf8').toString());
    // tslint:disable-next-line:no-unused
  } catch (error) {
  }
  try {
    projectNodeModulesCollections = JSON.parse(readFileSync(
      resolve(projectNodeModulesTemplate, 'src', 'collection.json')
      , 'utf8').toString());
    // tslint:disable-next-line:no-unused
  } catch (error) {
  }
  if (projectCollections['schematics'] && projectCollections['schematics'][templateName]) {
    console.log('Founded and used schematics template from project');
    return 'node ' +
      projectSchematicsCli +
      ' ' + templateFolder + ':' + templateName + ' ' +
      argsArray.join(' ') +
      ' --dry-run=false --force';
  }
  if (projectNodeModulesCollections['schematics'] && projectNodeModulesCollections['schematics'][templateName]) {
    console.log('Founded and used schematics template from project node_modules');
    return 'node ' +
      projectSchematicsCli +
      ' ' + templateFolder + ':' + templateName + ' ' +
      argsArray.join(' ') +
      ' --dry-run=false --force';
  }
  if (localNodeModulesCollections['schematics'] && localNodeModulesCollections['schematics'][templateName]) {
    return 'node ' +
      localSchematicsCli +
      ' ' + templateFolder + ':' + templateName + ' ' +
      argsArray.join(' ') +
      ' --dry-run=false --force';
  }
  throw new Error(`Template with name ${template} not founded`);
}
