import { Command, flags } from '@oclif/command';
import { CLIError } from '@oclif/errors';
import * as inquirer from 'inquirer';
import { join, resolve } from 'path';
import { loadJson, loadPackageJson, runCommand, schematicsCommandBuilder } from '../utils/schematics-command-builder';
import { Prepare } from './prepare';

export class EntityToApplication extends Command {
  static aliases = ['entity-to-application', 'entity-to-app', 'entity2app'];
  static description = 'Linking the entity to the application, based on the Rucken template';
  static flags = {
    type: flags.string({ char: 't', description: 'Type(s) of applications.', multiple: true, options: ['web', 'ionic', 'all'] }),

    lib: flags.string({ description: 'The name of the library with entity.' }),
    coreLib: flags.string({ description: 'The name of the core library with entity.' }),
    webLib: flags.string({ description: 'The name of the web library with entity.' }),
    ionicLib: flags.string({ description: 'The name of the ionic library with entity.' }),

    app: flags.string({ description: 'The name of the application.' }),
    webApp: flags.string({ description: 'The name of the web application.' }),
    ionicApp: flags.string({ description: 'The name of the ionic application.' }),

    webTemplate: flags.string({ description: 'Binding of components for editing an entity to a frontend application on Angular7+ with Bootstrap3', default: '@rucken/schematics:rucken-entity-web-to-app' }),
    ionicTemplate: flags.string({ description: 'Binding components for editing an entity to a mobile frontend application on Angular7+ with Ionic4', default: '@rucken/schematics:rucken-entity-ionic-to-app' }),

    workspace: flags.string({ char: 'w', description: 'The workspace directory name.' }),
    help: flags.help({ char: 'h' })
  };
  static args = [{ name: 'name' }];
  async run() {
    const { args, flags } = this.parse(EntityToApplication);
    const workspace = flags.workspace;
    const packageJson: any = loadPackageJson(join(workspace || process.cwd(), 'package.json'));
    const angularJson: any = loadJson(join(workspace || process.cwd(), 'angular.json'));
    const nxJson: any = loadJson(join(workspace || process.cwd(), 'nx.json'));
    if (packageJson === undefined || angularJson === undefined || nxJson === undefined) {
      throw new CLIError(`Not found exists nx workspace in "${join(workspace || process.cwd())}"`);
    }
    try {
      let {
        name,
        type
      } = await inquirer.prompt(
        [
          ...(
            !args.name ? [{
              name: 'name',
              message: 'Enter name entity for link:',
              type: 'input',
              validate: (value: string) => Boolean(value)
            }] : []
          ),
          ...(
            !flags.type ? [{
              name: 'type',
              message: 'What type(s) of entity would you like to link for the application(s)?',
              type: 'checkbox',
              choices: ['web', 'ionic', 'all'],
              validate: (value: string) => value.length > 0
            }] : []
          )
        ]
      );
      type = type || flags.type;
      name = name || args.name;
      let result: any;
      let coreLibOrg = '';
      let webLibOrg = '';
      let ionicLibOrg = '';

      const lib = flags.lib;
      let coreLib = flags.coreLib;
      let webLib = flags.webLib;
      let ionicLib = flags.ionicLib;

      const app = flags.app;
      let webApp = flags.webApp;
      let ionicApp = flags.ionicApp;

      const webTemplate = flags.webTemplate;
      const ionicTemplate = flags.ionicTemplate;
      // core
      if (type.indexOf('web') !== -1 || type.indexOf('ionic') !== -1 || type.indexOf('all') !== -1) {
        ({ coreLib, result, coreLibOrg } = await this.prepareCore(
          name,
          (type.indexOf('all') !== -1 && !coreLib && lib) ? lib : coreLib,
          angularJson,
          nxJson,
          result,
          coreLibOrg
        ));
      }
      // web
      if (type.indexOf('web') !== -1 || type.indexOf('all') !== -1) {
        ({ webLib, webApp, result, webLibOrg } = await this.prepareWeb(
          name,
          (type.indexOf('all') !== -1 && !webLib && lib) ? lib + '-web' : webLib,
          (type.indexOf('all') !== -1 && !webApp && app) ? app : webApp,
          angularJson,
          nxJson,
          result,
          webLibOrg,
          webTemplate,
          coreLib,
          coreLibOrg,
          workspace
        ));
        ({ webLib, webApp, result, webLibOrg } = await this.prepareWebApp(
          name,
          webLib,
          webApp,
          angularJson,
          nxJson,
          result,
          webLibOrg,
          webTemplate,
          coreLib,
          coreLibOrg,
          workspace
        ));
      }
      // ionic
      if (type.indexOf('ionic') !== -1 || type.indexOf('all') !== -1) {
        ({ ionicLib, ionicApp, result, ionicLibOrg } = await this.prepareIonic(
          name,
          (type.indexOf('all') !== -1 && !ionicLib && lib) ? lib + '-ionic' : ionicLib,
          (type.indexOf('all') !== -1 && !ionicApp && app) ? app + '-ionic' : ionicApp,
          angularJson,
          nxJson,
          result,
          ionicLibOrg,
          ionicTemplate,
          coreLib,
          coreLibOrg,
          workspace
        ));
        ({ ionicLib, ionicApp, result, ionicLibOrg } = await this.prepareIonicApp(
          name,
          ionicLib,
          ionicApp,
          angularJson,
          nxJson,
          result,
          ionicLibOrg,
          ionicTemplate,
          coreLib,
          coreLibOrg,
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

  private async prepareIonic(name: string, ionicLib: string | undefined, ionicApp: string | undefined, angularJson: any, nxJson: any, result: any, ionicLibOrg: string, ionicTemplate: string | undefined, coreLib: string | undefined, coreLibOrg: string, workspace: string | undefined) {
    if (
      !ionicLib ||
      !(angularJson['projects'] && angularJson['projects'][ionicLib] ||
        nxJson['projects'] && angularJson['projects'][ionicLib])
    ) {
      const choices = nxJson.projects && Object.keys(nxJson.projects).filter(key => nxJson.projects[key].tags && nxJson.projects[key].tags.indexOf('client') !== -1 &&
        nxJson.projects[key].tags.indexOf('library') !== -1);
      if (choices.length === 0) {
        throw new CLIError('Library for link to application with ionic entity not founded!');
      }
      try {
        result = await inquirer.prompt([{
          name: 'ionicLib',
          message: `Select library used for store linked ionic entity "${name}":`,
          type: 'list',
          choices,
          validate: (value: string) => value.length > 0
        }]);
        ionicLib = result.ionicLib;
      } catch (error) {
        throw new CLIError(error);
      }
    }
    ionicLibOrg = ionicLib &&
      angularJson['projects'] &&
      angularJson['projects'][ionicLib] &&
      angularJson['projects'][ionicLib]['root'] &&
      angularJson['projects'][ionicLib]['root'].split('/').length > 2 &&
      angularJson['projects'][ionicLib]['root'].split('/').filter((key: string, index: number) => index === 1)[0];
    return { ionicLib, ionicApp, result, ionicLibOrg };
  }
  private async prepareIonicApp(name: string, ionicLib: string | undefined, ionicApp: string | undefined, angularJson: any, nxJson: any, result: any, ionicLibOrg: string, ionicTemplate: string | undefined, coreLib: string | undefined, coreLibOrg: string, workspace: string | undefined) {
    if (
      !ionicApp ||
      !(angularJson['projects'] && angularJson['projects'][ionicApp] ||
        nxJson['projects'] && angularJson['projects'][ionicApp])
    ) {
      const choices = nxJson.projects && Object.keys(nxJson.projects).filter(key => nxJson.projects[key].tags && nxJson.projects[key].tags.indexOf('client') !== -1 &&
        nxJson.projects[key].tags.indexOf('application') !== -1);
      if (choices.length === 0) {
        throw new CLIError('Application for link to library with ionic entity not founded!');
      }
      try {
        result = await inquirer.prompt([{
          name: 'ionicApp',
          message: `Select ionic application for link library "${ionicLib}" with entity "${name}"`,
          type: 'list',
          choices,
          validate: (value: string) => value.length > 0
        }]);
        ionicApp = result.ionicApp;
      } catch (error) {
        throw new CLIError(error);
      }
    }
    const command = schematicsCommandBuilder(process.cwd(), ionicTemplate || '', [name], {
      lib: ionicLib,
      org: ionicLibOrg,
      entitiesLib: coreLib,
      entitiesLibOrg: coreLibOrg,
      app: ionicApp,
      workspace
    });
    try {
      await runCommand(command, (...args: any[]) => this.debug(...args));
    } catch (error) {
      throw new CLIError(error);
    }
    return { ionicLib, ionicApp, result, ionicLibOrg };
  }

  private async prepareWeb(name: string, webLib: string | undefined, webApp: string | undefined, angularJson: any, nxJson: any, result: any, webLibOrg: string, webTemplate: string | undefined, coreLib: string | undefined, coreLibOrg: string, workspace: string | undefined) {
    if (
      !webLib ||
      !(angularJson['projects'] && angularJson['projects'][webLib] ||
        nxJson['projects'] && angularJson['projects'][webLib])
    ) {
      const choices = nxJson.projects && Object.keys(nxJson.projects).filter(key => nxJson.projects[key].tags && nxJson.projects[key].tags.indexOf('client') !== -1 &&
        nxJson.projects[key].tags.indexOf('library') !== -1);
      if (choices.length === 0) {
        throw new CLIError('Library for link to application with web entity not founded!');
      }
      try {
        result = await inquirer.prompt([{
          name: 'webLib',
          message: `Select web application for link web entity "${name}"`,
          type: 'list',
          choices,
          validate: (value: string) => value.length > 0
        }]);
        webLib = result.webLib;
      } catch (error) {
        throw new CLIError(error);
      }
    }
    webLibOrg = webLib &&
      angularJson['projects'] &&
      angularJson['projects'][webLib] &&
      angularJson['projects'][webLib]['root'] &&
      angularJson['projects'][webLib]['root'].split('/').length > 2 &&
      angularJson['projects'][webLib]['root'].split('/').filter((key: string, index: number) => index === 1)[0];
    return { webLib, webApp, result, webLibOrg };
  }

  private async prepareWebApp(name: string, webLib: string | undefined, webApp: string | undefined, angularJson: any, nxJson: any, result: any, webLibOrg: string, webTemplate: string | undefined, coreLib: string | undefined, coreLibOrg: string, workspace: string | undefined) {
    if (
      !webApp ||
      !(angularJson['projects'] && angularJson['projects'][webApp] ||
        nxJson['projects'] && angularJson['projects'][webApp])
    ) {
      const choices = nxJson.projects && Object.keys(nxJson.projects).filter(key => nxJson.projects[key].tags && nxJson.projects[key].tags.indexOf('client') !== -1 &&
        nxJson.projects[key].tags.indexOf('application') !== -1);
      if (choices.length === 0) {
        throw new CLIError('Application for link to library with web entity not founded!');
      }
      try {
        result = await inquirer.prompt([{
          name: 'webApp',
          message: `Select web application for link library "${webLib}" with entity "${name}"`,
          type: 'list',
          choices,
          validate: (value: string) => value.length > 0
        }]);
        webApp = result.webApp;
      } catch (error) {
        throw new CLIError(error);
      }
    }
    const command = schematicsCommandBuilder(process.cwd(), webTemplate || '', [name], {
      lib: webLib,
      org: webLibOrg,
      entitiesLib: coreLib,
      entitiesLibOrg: coreLibOrg,
      app: webApp,
      workspace
    });
    try {
      await runCommand(command, (...args: any[]) => this.debug(...args));
    } catch (error) {
      throw new CLIError(error);
    }
    return { webLib, webApp, result, webLibOrg };
  }

  private async prepareCore(name: string, coreLib: string | undefined, angularJson: any, nxJson: any, result: any, coreLibOrg: string) {
    if (
      !coreLib ||
      !(angularJson['projects'] && angularJson['projects'][coreLib] ||
        nxJson['projects'] && angularJson['projects'][coreLib])
    ) {
      const choices = nxJson.projects && Object.keys(nxJson.projects).filter(key => nxJson.projects[key].tags && nxJson.projects[key].tags.indexOf('client') !== -1 &&
        nxJson.projects[key].tags.indexOf('library') !== -1);
      if (choices.length === 0) {
        throw new CLIError('Library for frontend entities not founded!');
      }
      try {
        result = await inquirer.prompt([{
          name: 'coreLib',
          message: `Select library used for store of entity ${name} for frontend application`,
          type: 'list',
          choices,
          validate: (value: string) => value.length > 0
        }]);
        coreLib = result.coreLib;
      } catch (error) {
        throw new CLIError(error);
      }
    }
    coreLibOrg = coreLib &&
      angularJson['projects'] &&
      angularJson['projects'][coreLib] &&
      angularJson['projects'][coreLib]['root'] &&
      angularJson['projects'][coreLib]['root'].split('/').length > 2 &&
      angularJson['projects'][coreLib]['root'].split('/').filter((key: string, index: number) => index === 1)[0];
    return { coreLib, result, coreLibOrg };
  }
}
