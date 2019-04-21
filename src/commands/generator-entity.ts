import { Command, flags } from '@oclif/command';
import { CLIError } from '@oclif/errors';
import * as inquirer from 'inquirer';
import { join } from 'path';
import { loadJson, loadPackageJson, runCommand, schematicsCommandBuilder } from '../utils/schematics-command-builder';

export class Entity extends Command {
  static aliases = ['entity'];
  static description = 'The generator of the entity, based on the Rucken template';
  static flags = {
    type: flags.string({ char: 't', description: 'Type(s) of entities.', multiple: true, options: ['web', 'ionic', 'nestjs'] }),
    coreLib: flags.string({ description: 'The name of the core library.' }),
    webLib: flags.string({ description: 'The name of the web library.' }),
    ionicLib: flags.string({ description: 'The name of the ionic library.' }),
    nestjsLib: flags.string({ description: 'The name of the nestjs library.' }),
    timestamp: flags.string({ description: 'Timestamp used in migrations.' }),
    coreTemplate: flags.string({ description: 'Model generator and frontend application', default: '@rucken/schematics:rucken-entity' }),
    webTemplate: flags.string({ description: 'The generator of the main components for editing data on the model and for the frontend application on Angular7+ with Bootstrap3', default: '@rucken/schematics:rucken-entity-web' }),
    ionicTemplate: flags.string({ description: 'The generator of the main components for editing data on the model and for a mobile frontend application on Angular7+ with Ionic4', default: '@rucken/schematics:rucken-entity-ionic' }),
    nestjsTemplate: flags.string({ description: 'The generator of the entity, the DTO, the service and the controller, for editing the entity data for the backend of the application on NestJS with TypeORM', default: '@rucken/schematics:rucken-entity-nestjs' }),
    workspace: flags.string({ char: 'w', description: 'The workspace directory name.' }),
    help: flags.help({ char: 'h' })
  };
  static args = [{ name: 'name' }];
  async run() {
    const { args, flags } = this.parse(Entity);
    const workspace = flags.workspace;
    const packageJson = loadPackageJson(join(workspace || process.cwd(), 'package.json'));
    const angularJson: any = loadJson(join(workspace || process.cwd(), 'angular.json'));
    const nxJson: any = loadJson(join(workspace || process.cwd(), 'nx.json'));
    if (packageJson === undefined || angularJson === undefined || nxJson === undefined) {
      throw new CLIError(`Not found exists nx workspace in "${join(workspace || process.cwd())}"`);
    }
    try {
      let {
        name,
        type,
        timestamp
      } = await inquirer.prompt(
        [
          ...(
            !args.name ? [{
              name: 'name',
              message: 'What name would you like to use for the entity?',
              type: 'input',
              validate: (value: string) => Boolean(value)
            }] : []
          ),
          ...(
            !flags.type ? [{
              name: 'type',
              message: 'What type(s) would you like to create for the entity?',
              type: 'checkbox',
              choices: ['web', 'ionic', 'nestjs'],
              validate: (value: string) => value.length > 0
            }] : []
          )
        ]
      );
      timestamp = timestamp || flags.timestamp;
      type = type || flags.type;
      name = name || args.name;
      let result: any;
      let coreLibOrg = '';
      let webLibOrg = '';
      let ionicLibOrg = '';
      let nestjsLibOrg = '';
      let coreLib = flags.coreLib;
      let webLib = flags.webLib;
      let ionicLib = flags.ionicLib;
      let nestjsLib = flags.nestjsLib;
      const coreTemplate = flags.coreTemplate;
      const webTemplate = flags.webTemplate;
      const ionicTemplate = flags.ionicTemplate;
      const nestjsTemplate = flags.nestjsTemplate;
      // core
      if (type.indexOf('web') !== -1 || type.indexOf('ionic') !== -1) {
        if (
          !coreLib ||
          angularJson['projects'] && angularJson['projects'][coreLib] ||
          nxJson['projects'] && angularJson['projects'][coreLib]
        ) {
          const choices = nxJson.projects && Object.keys(nxJson.projects).filter(key =>
            nxJson.projects[key].tags && nxJson.projects[key].tags.indexOf('client') !== -1 &&
            nxJson.projects[key].tags.indexOf('library') !== -1
          );
          if (choices.length === 0) {
            throw new CLIError('Library for core frontent entities not founded!');
          }
          if (choices.length === 1) {
            coreLib = choices[0];
          } else {
            try {
              result = await inquirer.prompt(
                [{
                  name: 'coreLib',
                  message: 'Select lib used for store model for frontend application',
                  type: 'list',
                  choices,
                  validate: (value: string) => value.length > 0
                }]
              );
              coreLib = result.coreLib;
            } catch (error) {
              throw new CLIError(error);
            }
          }
        }
        coreLibOrg = coreLib &&
          angularJson['projects'] &&
          angularJson['projects'][coreLib] &&
          angularJson['projects'][coreLib]['root'] &&
          angularJson['projects'][coreLib]['root'].split('/').length > 2 &&
          angularJson['projects'][coreLib]['root'].split('/').filter((key: string, index: number) => index === 1)[0];
        const command = schematicsCommandBuilder(
          process.cwd(),
          coreTemplate || '',
          [name],
          {
            lib: coreLib,
            org: coreLibOrg,
            workspace
          }
        );
        try {
          await runCommand(command, (...args: any[]) => this.debug(...args));
        } catch (error) {
          throw new CLIError(error);
        }
      }
      // web
      if (type.indexOf('web') !== -1) {
        if (
          !webLib ||
          angularJson['projects'] && angularJson['projects'][webLib] ||
          nxJson['projects'] && angularJson['projects'][webLib]
        ) {
          const choices = nxJson.projects && Object.keys(nxJson.projects).filter(key =>
            nxJson.projects[key].tags && nxJson.projects[key].tags.indexOf('client') !== -1 &&
            nxJson.projects[key].tags.indexOf('library') !== -1
          );
          if (choices.length === 0) {
            throw new CLIError('Library for web entities not founded!');
          }
          if (choices.length === 1) {
            webLib = choices[0];
          } else {
            try {
              result = await inquirer.prompt(
                [{
                  name: 'webLib',
                  message: 'Select lib used for store main components for editing data on the model and for the frontend application on Angular7+ with Bootstrap3',
                  type: 'list',
                  choices,
                  validate: (value: string) => value.length > 0
                }]
              );
              webLib = result.webLib;
            } catch (error) {
              throw new CLIError(error);
            }
          }
        }
        webLibOrg = webLib &&
          angularJson['projects'] &&
          angularJson['projects'][webLib] &&
          angularJson['projects'][webLib]['root'] &&
          angularJson['projects'][webLib]['root'].split('/').length > 2 &&
          angularJson['projects'][webLib]['root'].split('/').filter((key: string, index: number) => index === 1)[0];
        const command = schematicsCommandBuilder(
          process.cwd(),
          webTemplate || '',
          [name],
          {
            lib: webLib,
            org: webLibOrg,
            entitiesLib: coreLib,
            entitiesLibOrg: coreLibOrg,
            workspace
          }
        );
        try {
          await runCommand(command, (...args: any[]) => this.debug(...args));
        } catch (error) {
          throw new CLIError(error);
        }
      }
      // ionic
      if (type.indexOf('ionic') !== -1) {
        if (
          !ionicLib ||
          angularJson['projects'] && angularJson['projects'][ionicLib] ||
          nxJson['projects'] && angularJson['projects'][ionicLib]
        ) {
          const choices = nxJson.projects && Object.keys(nxJson.projects).filter(key =>
            nxJson.projects[key].tags && nxJson.projects[key].tags.indexOf('client') !== -1 &&
            nxJson.projects[key].tags.indexOf('library') !== -1
          );
          if (choices.length === 0) {
            throw new CLIError('Library for ionic entities not founded!');
          }
          if (choices.length === 1) {
            ionicLib = choices[0];
          } else {
            try {
              result = await inquirer.prompt(
                [{
                  name: 'ionicLib',
                  message: 'Select lib used for store of the main components for editing data on the model and for a mobile frontend application on Angular7+ with Ionic4',
                  type: 'list',
                  choices,
                  validate: (value: string) => value.length > 0
                }]
              );
              ionicLib = result.ionicLib;
            } catch (error) {
              throw new CLIError(error);
            }
          }
        }
        ionicLibOrg = ionicLib &&
          angularJson['projects'] &&
          angularJson['projects'][ionicLib] &&
          angularJson['projects'][ionicLib]['root'] &&
          angularJson['projects'][ionicLib]['root'].split('/').length > 2 &&
          angularJson['projects'][ionicLib]['root'].split('/').filter((key: string, index: number) => index === 1)[0];
        const command = schematicsCommandBuilder(
          process.cwd(),
          ionicTemplate || '',
          [name],
          {
            lib: ionicLib,
            org: ionicLibOrg,
            entitiesLib: coreLib,
            entitiesLibOrg: coreLibOrg,
            workspace
          }
        );
        try {
          await runCommand(command, (...args: any[]) => this.debug(...args));
        } catch (error) {
          throw new CLIError(error);
        }
      }
      // nestjs
      if (type.indexOf('nestjs') !== -1) {
        if (
          !nestjsLib ||
          angularJson['projects'] && angularJson['projects'][nestjsLib] ||
          nxJson['projects'] && angularJson['projects'][nestjsLib]
        ) {
          const choices = nxJson.projects && Object.keys(nxJson.projects).filter(key =>
            nxJson.projects[key].tags && nxJson.projects[key].tags.indexOf('server') !== -1 &&
            nxJson.projects[key].tags.indexOf('library') !== -1
          );
          if (choices.length === 0) {
            throw new CLIError('Library for nestjs entities not founded!');
          }
          if (choices.length === 1) {
            nestjsLib = choices[0];
          } else {
            try {
              result = await inquirer.prompt(
                [{
                  name: 'nestjsLib',
                  message: 'Select lib used for store of the entity, the DTO, the service and the controller, for editing the entity data for the backend of the application on NestJS with TypeORM',
                  type: 'list',
                  choices,
                  validate: (value: string) => value.length > 0
                }]
              );
              nestjsLib = result.nestjsLib;
            } catch (error) {
              throw new CLIError(error);
            }
          }
        }
        nestjsLibOrg = nestjsLib &&
          angularJson['projects'] &&
          angularJson['projects'][nestjsLib] &&
          angularJson['projects'][nestjsLib]['root'] &&
          angularJson['projects'][nestjsLib]['root'].split('/').length > 2 &&
          angularJson['projects'][nestjsLib]['root'].split('/').filter((key: string, index: number) => index === 1)[0];
        const command = schematicsCommandBuilder(
          process.cwd(),
          nestjsTemplate || '',
          [name],
          {
            lib: nestjsLib,
            org: nestjsLibOrg,
            timestamp,
            workspace
          }
        );
        try {
          await runCommand(command, (...args: any[]) => this.debug(...args));
        } catch (error) {
          throw new CLIError(error);
        }
      }
    } catch (error) {
      throw new CLIError(error);
    }
  }
}
