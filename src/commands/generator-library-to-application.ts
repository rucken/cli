import { Command, flags } from '@oclif/command';
import { CLIError } from '@oclif/errors';
import * as inquirer from 'inquirer';
import { join, resolve } from 'path';
import { loadJson, loadPackageJson, runCommand, schematicsCommandBuilder } from '../utils/schematics-command-builder';
import { Prepare } from './prepare';

export class LibraryToApplication extends Command {
  static aliases = ['library-to-application', 'lib-to-app', 'lib2app'];
  static description = 'Linking the library to the application, based on the Rucken template';
  static flags = {
    type: flags.string({ char: 't', description: 'Type(s) of applications.', multiple: true, options: ['frontend', 'nestjs', 'all'] }),

    lib: flags.string({ description: 'The name of the library.' }),
    frontendLib: flags.string({ description: 'The name of the frontend library.' }),
    nestjsLib: flags.string({ description: 'The name of the nestjs library.' }),

    app: flags.string({ description: 'The name of the application.' }),
    frontendApp: flags.string({ description: 'The name of the frontend application.' }),
    nestjsApp: flags.string({ description: 'The name of the nestjs application.' }),

    frontendTemplate: flags.string({ description: 'Frontend library generator', default: '@rucken/schematics:rucken-lib-to-app' }),
    nestjsTemplate: flags.string({ description: 'Linking the library to the backend application on NestJS', default: '@rucken/schematics:rucken-lib-nestjs-to-app' }),
    workspace: flags.string({ char: 'w', description: 'The workspace directory name.' }),
    help: flags.help({ char: 'h' })
  };
  static args = [{ name: 'name' }];
  async run() {
    const { args, flags } = this.parse(LibraryToApplication);
    const workspace = flags.workspace;
    const packageJson: any = loadPackageJson(join(workspace || process.cwd(), 'package.json'));
    const angularJson: any = loadJson(join(workspace || process.cwd(), 'angular.json'));
    const nxJson: any = loadJson(join(workspace || process.cwd(), 'nx.json'));
    if (packageJson === undefined || angularJson === undefined || nxJson === undefined) {
      throw new CLIError(`Not found exists nx workspace in "${join(workspace || process.cwd())}"`);
    }
    try {
      let {
        type
      } = await inquirer.prompt(
        [
          ...(
            !flags.type ? [{
              name: 'type',
              message: 'What type(s) of library would you like to link for the application(s)?',
              type: 'checkbox',
              choices: ['frontend', 'nestjs', 'all'],
              validate: (value: string) => value.length > 0
            }] : []
          )
        ]
      );
      type = type || flags.type;
      let result: any;
      let frontendLibOrg = '';
      let nestjsLibOrg = '';

      const lib = flags.lib;
      let frontendLib = flags.frontendLib;
      let nestjsLib = flags.nestjsLib;

      const app = flags.app;
      let frontendApp = flags.frontendApp;
      let nestjsApp = flags.nestjsApp;

      const frontendTemplate = flags.frontendTemplate;
      const nestjsTemplate = flags.nestjsTemplate;

      // frontend
      if (type.indexOf('frontend') !== -1 || type.indexOf('all') !== -1) {
        ({ frontendLib, frontendApp, result, frontendLibOrg } = await this.prepareFrontend(
          (type.indexOf('all') !== -1 && !frontendLib && lib) ? lib : frontendLib,
          (type.indexOf('all') !== -1 && !frontendApp && app) ? app : frontendApp,
          angularJson,
          nxJson,
          result,
          frontendLibOrg,
          frontendTemplate,
          workspace
        ));
        ({ frontendLib, frontendApp, result, frontendLibOrg } = await this.prepareFrontendApp(
          frontendLib,
          frontendApp,
          angularJson,
          nxJson,
          result,
          frontendLibOrg,
          frontendTemplate,
          workspace
        ));
      }
      // nestjs
      if (type.indexOf('nestjs') !== -1 || type.indexOf('all') !== -1) {
        ({ nestjsLib, nestjsApp, result, nestjsLibOrg } = await this.prepareNestjs(
          (type.indexOf('all') !== -1 && !nestjsLib && lib) ? lib + '-nestjs' : nestjsLib,
          (type.indexOf('all') !== -1 && !nestjsApp && app) ? app + '-nestjs' : nestjsApp,
          angularJson,
          nxJson,
          result,
          nestjsLibOrg,
          nestjsTemplate,
          workspace
        ));
        ({ nestjsLib, nestjsApp, result, nestjsLibOrg } = await this.prepareNestjsApp(
          nestjsLib,
          nestjsApp,
          angularJson,
          nxJson,
          result,
          nestjsLibOrg,
          nestjsTemplate,
          workspace
        ));
      }
    } catch (error) {
      throw new CLIError(error);
    }
    try {
      await Prepare.run([
        resolve(join(workspace || process.cwd()))
      ]);
    } catch (error) {
      throw new CLIError(error);
    }
  }

  private async prepareNestjs(nestjsLib: string | undefined, nestjsApp: string | undefined, angularJson: any, nxJson: any, result: any, nestjsLibOrg: string, nestjsTemplate: string | undefined, workspace: string | undefined) {
    if (
      !nestjsLib ||
      !(angularJson['projects'] && angularJson['projects'][nestjsLib] ||
        nxJson['projects'] && angularJson['projects'][nestjsLib])
    ) {
      const choices = nxJson.projects && Object.keys(nxJson.projects).filter(key => nxJson.projects[key].tags && nxJson.projects[key].tags.indexOf('server') !== -1 &&
        nxJson.projects[key].tags.indexOf('library') !== -1);
      if (choices.length === 0) {
        throw new CLIError('Library for nestjs link not founded!!');
      }
      try {
        result = await inquirer.prompt([{
          name: 'nestjsLib',
          message: 'Select lib used for store of the entity, the DTO, the service and the controller, for editing the entity data for the backend of the application on NestJS with TypeORM',
          type: 'list',
          choices,
          validate: (value: string) => value.length > 0
        }]);
        nestjsLib = result.nestjsLib;
      } catch (error) {
        throw new CLIError(error);
      }
    }
    nestjsLibOrg = nestjsLib &&
      angularJson['projects'] &&
      angularJson['projects'][nestjsLib] &&
      angularJson['projects'][nestjsLib]['root'] &&
      angularJson['projects'][nestjsLib]['root'].split('/').length > 2 &&
      angularJson['projects'][nestjsLib]['root'].split('/').filter((key: string, index: number) => index === 1)[0];
    return { nestjsLib, nestjsApp, result, nestjsLibOrg };
  }
  private async prepareNestjsApp(nestjsLib: string | undefined, nestjsApp: string | undefined, angularJson: any, nxJson: any, result: any, nestjsLibOrg: string, nestjsTemplate: string | undefined, workspace: string | undefined) {
    if (
      !nestjsApp ||
      !(angularJson['projects'] && angularJson['projects'][nestjsApp] ||
        nxJson['projects'] && angularJson['projects'][nestjsApp])
    ) {
      const choices = nxJson.projects && Object.keys(nxJson.projects).filter(key => nxJson.projects[key].tags && nxJson.projects[key].tags.indexOf('server') !== -1 &&
        nxJson.projects[key].tags.indexOf('application') !== -1);
      if (choices.length === 0) {
        throw new CLIError('Application for nestjs link not founded!!');
      }
      try {
        result = await inquirer.prompt([{
          name: 'nestjsApp',
          message: `Select nestjs application for link "${nestjsLib}"`,
          type: 'list',
          choices,
          validate: (value: string) => value.length > 0
        }]);
        nestjsApp = result.nestjsApp;
      } catch (error) {
        throw new CLIError(error);
      }
    }
    if (!nestjsLib) {
      throw new CLIError('Library for link not founded!');
    }
    const command = schematicsCommandBuilder(process.cwd(), nestjsTemplate || '', [nestjsLib], {
      lib: nestjsLib,
      org: nestjsLibOrg,
      app: nestjsApp,
      workspace
    });
    try {
      await runCommand(command, (...args: any[]) => this.debug(...args));
    } catch (error) {
      throw new CLIError(error);
    }
    return { nestjsLib, nestjsApp, result, nestjsLibOrg };
  }

  private async prepareFrontend(frontendLib: string | undefined, frontendApp: string | undefined, angularJson: any, nxJson: any, result: any, frontendLibOrg: string, frontendTemplate: string | undefined, workspace: string | undefined) {
    if (
      !frontendLib ||
      !(angularJson['projects'] && angularJson['projects'][frontendLib] ||
        nxJson['projects'] && angularJson['projects'][frontendLib])
    ) {
      const choices = nxJson.projects && Object.keys(nxJson.projects).filter(key => nxJson.projects[key].tags && nxJson.projects[key].tags.indexOf('client') !== -1 &&
        nxJson.projects[key].tags.indexOf('library') !== -1);
      if (choices.length === 0) {
        throw new CLIError('Library for frontend not founded!!');
      }
      try {
        result = await inquirer.prompt([{
          name: 'frontendLib',
          message: 'Select frontend library for link',
          type: 'list',
          choices,
          validate: (value: string) => value.length > 0
        }]);
        frontendLib = result.frontendLib;
      } catch (error) {
        throw new CLIError(error);
      }
    }
    frontendLibOrg = frontendLib &&
      angularJson['projects'] &&
      angularJson['projects'][frontendLib] &&
      angularJson['projects'][frontendLib]['root'] &&
      angularJson['projects'][frontendLib]['root'].split('/').length > 2 &&
      angularJson['projects'][frontendLib]['root'].split('/').filter((key: string, index: number) => index === 1)[0];
    return { frontendLib, frontendApp, result, frontendLibOrg };
  }

  private async prepareFrontendApp(frontendLib: string | undefined, frontendApp: string | undefined, angularJson: any, nxJson: any, result: any, frontendLibOrg: string, frontendTemplate: string | undefined, workspace: string | undefined) {
    if (
      !frontendApp ||
      !(angularJson['projects'] && angularJson['projects'][frontendApp] ||
        nxJson['projects'] && angularJson['projects'][frontendApp])
    ) {
      const choices = nxJson.projects && Object.keys(nxJson.projects).filter(key => nxJson.projects[key].tags && nxJson.projects[key].tags.indexOf('client') !== -1 &&
        nxJson.projects[key].tags.indexOf('application') !== -1);
      if (choices.length === 0) {
        throw new CLIError('Application for web link not founded!');
      }
      try {
        result = await inquirer.prompt([{
          name: 'frontendApp',
          message: `Select frontend application for link library "${frontendLib}"`,
          type: 'list',
          choices,
          validate: (value: string) => value.length > 0
        }]);
        frontendApp = result.frontendApp;
      } catch (error) {
        throw new CLIError(error);
      }
    }
    if (!frontendLib) {
      throw new CLIError('Library for link not founded!');
    }
    const command = schematicsCommandBuilder(process.cwd(), frontendTemplate || '', [frontendLib], {
      org: frontendLibOrg,
      app: frontendApp,
      workspace
    });
    try {
      await runCommand(command, (...args: any[]) => this.debug(...args));
    } catch (error) {
      throw new CLIError(error);
    }
    return { frontendLib, frontendApp, result, frontendLibOrg };
  }
}
