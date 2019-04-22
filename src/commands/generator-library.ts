import { Command, flags } from '@oclif/command';
import { CLIError } from '@oclif/errors';
import * as inquirer from 'inquirer';
import { join, resolve } from 'path';
import { loadJson, loadPackageJson, runCommand, schematicsCommandBuilder } from '../utils/schematics-command-builder';
import { Prepare } from './prepare';
export class Library extends Command {
  static aliases = ['library', 'lib'];
  static description = 'Library generator, based on the Rucken template';
  static flags = {
    type: flags.string({ char: 't', description: 'Type(s) of library.', multiple: true, options: ['frontend', 'nestjs', 'all'] }),
    author: flags.string({ char: 'a', description: 'Author name (it is recommended to use Github user for better integration).' }),
    email: flags.string({ char: 'e', description: 'Author email name.' }),
    org: flags.string({ char: 'o', description: 'The name of organization.' }),
    frontendTemplate: flags.string({ description: 'Frontend library generator', default: '@rucken/schematics:rucken-lib' }),
    nestjsTemplate: flags.string({ description: 'Backend library generator on NestJS', default: '@rucken/schematics:rucken-lib-nestjs' }),
    workspace: flags.string({ char: 'w', description: 'The workspace directory name.' }),
    help: flags.help({ char: 'h' })
  };
  static args = [{ name: 'name' }];
  async run() {
    const { args, flags } = this.parse(Library);
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
        org
      } = await inquirer.prompt(
        [
          ...(
            !args.name ? [{
              name: 'name',
              message: 'What name would you like to use for the library?',
              type: 'input',
              validate: (value: string) => Boolean(value)
            }] : []
          ),
          ...(
            !flags.type ? [{
              name: 'type',
              message: 'What type(s) would you like to create for the library?',
              type: 'checkbox',
              choices: ['frontend', 'nestjs', 'all'],
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
            !flags.org ? [{
              name: 'org',
              message: 'What name would you like to use for the organization?',
              type: 'input'
            }] : []
          )
        ]
      );
      type = type || flags.type;
      name = name || args.name;
      author = author || flags.author || (packageJson && packageJson.author && packageJson.author.name);
      email = email || flags.email || (packageJson && packageJson.author && packageJson.author.email);
      org = org || flags.org;
      const frontendTemplate = flags.frontendTemplate;
      const nestjsTemplate = flags.nestjsTemplate;
      // frontend
      if (type.indexOf('frontend') !== -1 || type.indexOf('all') !== -1) {
        await this.prepareFrontend(
          angularJson,
          name,
          nxJson,
          frontendTemplate,
          author,
          email,
          org,
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
          org,
          workspace
        );
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

  private async prepareNestjs(angularJson: never, name: any, nxJson: never, nestjsTemplate: string | undefined, author: any, email: any, org: any, workspace: string | undefined) {
    if (angularJson['projects'] && angularJson['projects'][name] ||
      nxJson['projects'] && angularJson['projects'][name]) {
      throw new CLIError(`Library with name "${name}" is exists`);
    }
    const command = schematicsCommandBuilder(process.cwd(), nestjsTemplate || '', [name], {
      author,
      email,
      org,
      workspace
    });
    try {
      await runCommand(command, (...args: any[]) => this.debug(...args));
    } catch (error) {
      throw new CLIError(error);
    }
  }

  private async prepareFrontend(angularJson: never, name: any, nxJson: never, frontendTemplate: string | undefined, author: any, email: any, org: any, workspace: string | undefined) {
    if (angularJson['projects'] && angularJson['projects'][name] ||
      nxJson['projects'] && angularJson['projects'][name]) {
      throw new CLIError(`Library with name "${name}" is exists`);
    }
    const command = schematicsCommandBuilder(process.cwd(), frontendTemplate || '', [name], {
      author,
      email,
      org,
      workspace
    });
    try {
      await runCommand(command, (...args: any[]) => this.debug(...args));
    } catch (error) {
      throw new CLIError(error);
    }
  }
}
