import { Command, flags } from '@oclif/command';
import * as inquirer from 'inquirer';
import { runCommand, schematicsCommandBuilder } from '../utils/schematics-command-builder';

export class GeneratorWorkspace extends Command {
  static aliases = ['workspace'];
  static description = 'Workspace generator, based on the Rucken template';
  static flags = {
    author: flags.string({ char: 'a', description: 'Author name (it is recommended to use Github user for better integration).' }),
    email: flags.string({ char: 'e', description: 'Author email name.' }),
    template: flags.string({ char: 't', description: 'Template name.', default: '@rucken/schematics:workspace' }),
    help: flags.help({ char: 'h' })
  };
  static args = [{ name: 'name' }];
  async run() {
    const { args, flags } = this.parse(GeneratorWorkspace);
    try {
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
              name: GeneratorWorkspace.flags.author.name,
              message: 'What author name would you like to use for the all projects? (it is recommended to use Github user for better integration)',
              type: 'input',
              validate: (value: string) => Boolean(value)
            }] : []
          ),
          ...(
            !flags.email ? [{
              name: GeneratorWorkspace.flags.email.name,
              message: 'What author email would you like to use for the all projects?',
              type: 'input',
              validate: (value: string) => Boolean(value)
            }] : []
          )
        ]
      );
      name = name || args.name;
      author = author || flags.author;
      email = email || flags.email;
      // const workspace = args.workspace;
      // const workspacePath = workspace ? workspace.replace(new RegExp('\\' + sep, 'g'), '/').split(sep).join('/') : process.cwd();
      const template = flags.template;
      const command = schematicsCommandBuilder(
        process.cwd(),
        template || '',
        [name],
        {
          author,
          email
        }
      );
      try {
        await runCommand(command, (...args: any[]) => this.debug(...args));
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  }
}
