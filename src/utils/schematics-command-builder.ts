import { readFileSync } from 'fs';
import { resolve } from 'path';

export function schematicsCommandBuilder(
  projectPath: string,
  template: string | undefined,
  args: { [key: string]: string | undefined }
) {
  const argsArray: string[] = [];
  const localSchematicsCli =
    resolve(__dirname, '../../node_modules/@angular-devkit/schematics-cli/bin/schematics.js');
  const projectSchematicsCli =
    resolve(projectPath as string, 'node_modules/@angular-devkit/schematics-cli/bin/schematics.js');
  const templateArray = (template as string).split(':');
  const templateFolder = templateArray.length ? templateArray[0] : 'empty';
  const templateName = templateArray.length ? templateArray[1] : 'empty';
  const projectTemplate =
    resolve(projectPath as string, templateFolder);
  const localNodeModulesTemplate =
    resolve(__dirname, '../../node_modules', templateFolder);
  const projectNodeModulesTemplate =
    resolve(projectPath as string, 'node_modules', templateFolder);
  Object.keys(args).forEach(key => {
    if (args[key] !== undefined) {
      argsArray.push(
        `--${key}=${args[key]}`
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
      '--dry-run=false --force';
  }
  if (projectNodeModulesCollections['schematics'] && projectNodeModulesCollections['schematics'][templateName]) {
    console.log('Founded and used schematics template from project node_modules');
    return 'node ' +
      projectSchematicsCli +
      ' ' + templateFolder + ':' + templateName + ' ' +
      argsArray.join(' ') +
      '--dry-run=false --force';
  }
  if (localNodeModulesCollections['schematics'] && localNodeModulesCollections['schematics'][templateName]) {
    return 'node ' +
      localSchematicsCli +
      ' ' + templateFolder + ':' + templateName + ' ' +
      argsArray.join(' ') +
      '--dry-run=false --force';
  }
  throw new Error(`Template with name ${template} not founded`);
}
