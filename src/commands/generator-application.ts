import { Command, flags } from '@oclif/command';
import { CLIError } from '@oclif/errors';
import * as inquirer from 'inquirer';
import { join, resolve } from 'path';
import { loadJson, loadPackageJson, runCommand, schematicsCommandBuilder } from '../utils/schematics-command-builder';
import { Prepare } from './prepare';

export class Application extends Command {
  static aliases = ['application', 'app'];
  static description = 'Application generator, based on the Rucken template';
  static flags = {
    type: flags.string({ char: 't', description: 'Type(s) of applications.', multiple: true, options: ['web', 'ionic', 'nestjs', 'all'] }),
    author: flags.string({ char: 'a', description: 'Author name (it is recommended to use Github user for better integration).' }),
    email: flags.string({ char: 'e', description: 'Author email name.' }),
    api: flags.string({ description: 'The backend api address (/api, http://host.com/api, https://api.host.com).', default: '/api' }),
    webTemplate: flags.string({ description: 'Frontend application generator on Angular7+ with Bootstrap3', default: '@rucken/schematics:rucken-app' }),
    ionicTemplate: flags.string({ description: 'Mobile frontend generator application on Angular7+ with Ionic4', default: '@rucken/schematics:rucken-app-ionic' }),
    nestjsTemplate: flags.string({ description: 'REST generator backend applications on NestJS with TypeORM', default: '@rucken/schematics:rucken-app-nestjs' }),
    workspace: flags.string({ char: 'w', description: 'The workspace directory name.' }),
    help: flags.help({ char: 'h' })
  };
  static args = [{ name: 'name' }];
  async run() {
    const { args, flags } = this.parse(Application);
    const workspace = flags.workspace;
    const packageJson = loadPackageJson(join(workspace || process.cwd(), 'package.json'));
    const angularJson = loadJson(join(workspace || process.cwd(), 'angular.json'));
    const nxJson = loadJson(join(workspace || process.cwd(), 'nx.json'));
    if (packageJson === undefined || angularJson === undefined || nxJson === undefined) {
      throw new CLIError(`Not found exists nx workspace in "${join(workspace || process.cwd())}"`);
    }
    try {
      let {
        name,
        type,
        author,
        email,
        api
      } = await inquirer.prompt(
        [
          ...(
            !args.name ? [{
              name: 'name',
              message: 'What name would you like to use for the application(s)?',
              type: 'input',
              validate: (value: string) => Boolean(value)
            }] : []
          ),
          ...(
            !flags.type ? [{
              name: 'type',
              message: 'What type(s) would you like to create for the application(s)?',
              type: 'checkbox',
              choices: ['web', 'ionic', 'nestjs', 'all'],
              validate: (value: string) => value.length > 0
            }] : []
          ),
          ...(
            (!flags.author && !(packageJson && packageJson.author && packageJson.author.name)) ? [{
              name: 'author',
              message: 'What author name would you like to use for the all projects? (it is recommended to use Github user for better integration)',
              type: 'input',
              validate: (value: string) => Boolean(value)
            }] : []
          ),
          ...(
            (!flags.email && !(packageJson && packageJson.author && packageJson.author.email)) ? [{
              name: 'email',
              message: 'What author email would you like to use for the all projects?',
              type: 'input',
              validate: (value: string) => value.indexOf('@') !== -1
            }] : []
          ),
          ...(
            !flags.api ? [{
              name: 'api',
              message: 'What backend api address (/api, http://host.com/api, https://api.host.com) would you like to use for the application?',
              type: 'input',
              validate: (value: string) => Boolean(value)
            }] : []
          )
        ]
      );
      type = type || flags.type;
      name = name || args.name;
      author = author || flags.author || (packageJson && packageJson.author && packageJson.author.name);
      email = email || flags.email || (packageJson && packageJson.author && packageJson.author.email);
      api = api || flags.api;
      const webTemplate = flags.webTemplate;
      const nestjsTemplate = flags.nestjsTemplate;
      const ionicTemplate = flags.ionicTemplate;
      // web
      if (type.indexOf('web') !== -1 || type.indexOf('all') !== -1) {
        await this.prepareWeb(angularJson, name, nxJson, webTemplate, author, email, api, workspace);
      }
      // ionic
      if (type.indexOf('ionic') !== -1 || type.indexOf('all') !== -1) {
        await this.prepareIonic(
          angularJson,
          type.indexOf('all') !== -1 ? name + '-ionic' : name,
          nxJson,
          ionicTemplate,
          author,
          email,
          api,
          workspace
        );
      }
      // nestjs
      if (type.indexOf('nestjs') !== -1 || type.indexOf('all') !== -1) {
        await this.prepareNestjs(
          angularJson,
          type.indexOf('all') !== -1 ? name + '-nestjs' : name,
          nxJson,
          nestjsTemplate,
          author,
          email,
          api,
          workspace
        );
      }
    } catch (error) {
      throw new CLIError(error);
    }
  }

  private async prepareNestjs(angularJson: never, name: any, nxJson: never, nestjsTemplate: string | undefined, author: any, email: any, api: any, workspace: string | undefined) {
    if (angularJson['projects'] && angularJson['projects'][name] ||
      nxJson['projects'] && angularJson['projects'][name]) {
      throw new CLIError(`Application with name "${name}" is exists`);
    }
    const command = schematicsCommandBuilder(process.cwd(), nestjsTemplate || '', [name], {
      author,
      email,
      api,
      workspace
    });
    try {
      await runCommand(command, (...args: any[]) => this.debug(...args));
    } catch (error) {
      throw new CLIError(error);
    }
  }

  private async prepareIonic(angularJson: never, name: any, nxJson: never, ionicTemplate: string | undefined, author: any, email: any, api: any, workspace: string | undefined) {
    if (angularJson['projects'] && angularJson['projects'][name] ||
      nxJson['projects'] && angularJson['projects'][name]) {
      throw new CLIError(`Application with name "${name}" is exists`);
    }
    const command = schematicsCommandBuilder(process.cwd(), ionicTemplate || '', [name], {
      author,
      email,
      api,
      workspace
    });
    try {
      await runCommand(command, (...args: any[]) => this.debug(...args));
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

  private async prepareWeb(angularJson: never, name: any, nxJson: never, webTemplate: string | undefined, author: any, email: any, api: any, workspace: string | undefined) {
    if (angularJson['projects'] && angularJson['projects'][name] ||
      nxJson['projects'] && angularJson['projects'][name]) {
      throw new CLIError(`Application with name "${name}" is exists`);
    }
    const command = schematicsCommandBuilder(process.cwd(), webTemplate || '', [name], {
      author,
      email,
      api,
      workspace
    });
    try {
      await runCommand(command, (...args: any[]) => this.debug(...args));
    } catch (error) {
      throw new CLIError(error);
    }
  }
}
