import { Command, flags } from '@oclif/command';
import { CLIError } from '@oclif/errors';
import * as inquirer from 'inquirer';
import { runCommand, schematicsCommandBuilder } from '../utils/schematics-command-builder';
export class Workspace extends Command {
  static aliases = ['workspace', 'ws'];
  static description = 'Workspace generator, based on the Rucken template';
  static flags = {
    author: flags.string({ char: 'a', description: 'Author name (it is recommended to use Github user for better integration).' }),
    email: flags.string({ char: 'e', description: 'Author email name.' }),
    template: flags.string({ char: 't', description: 'Template name.', default: '@rucken/schematics:workspace' }),
    workspace: flags.string({ char: 'w', description: 'The workspace directory name.' }),
    help: flags.help({ char: 'h' })
  };
  static args = [{ name: 'name' }];
  async run() {
    const { args, flags } = this.parse(Workspace);
    try {
      const workspace = flags.workspace;
      let {
        name,
        author,
        email
      } = await inquirer.prompt(
        [
          ...(
            !args.name ? [{
              name: 'name',
              message: 'What name would you like to use for the workspace?',
              type: 'input',
              validate: (value: string) => Boolean(value)
            }] : []
          ),
          ...(
            !flags.author ? [{
              name: 'author',
              message: 'What author name would you like to use for the all projects? (it is recommended to use Github user for better integration)',
              type: 'input',
              validate: (value: string) => Boolean(value)
            }] : []
          ),
          ...(
            !flags.email ? [{
              name: 'email',
              message: 'What author email would you like to use for the all projects?',
              type: 'input',
              validate: (value: string) => value.indexOf('@') !== -1
            }] : []
          )
        ]
      );
      name = name || args.name;
      author = author || flags.author;
      email = email || flags.email;
      const template = flags.template;
      const command = schematicsCommandBuilder(
        process.cwd(),
        template || '',
        [name],
        {
          author,
          email,
          workspace
        }
      );
      try {
        await runCommand(command, (...args: any[]) => this.debug(...args));
      } catch (error) {
        throw new CLIError(error);
      }
    } catch (error) {
      throw new CLIError(error);
    }
  }
}
