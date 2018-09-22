import { flags, Command } from '@oclif/command';
import { sep } from 'path';
import { schematicsCommandBuilder } from '../utils/schematics-command-builder';
const npmRun = require('npm-run');

export class NestJSNew extends Command {
  static aliases = ['new:nestjs', 'nestjs-new', 'backend:new'];
  static description = 'generate empty NestJS backend application';
  static flags = {
    help: flags.help({ char: 'h' }),
    template: flags.string({ char: 't', description: 'template', default: '@rucken/schematics:nestjs-new' }),
    name: flags.string({ char: 'n', description: 'application name on ke-bab case' }),
    username: flags.string({ char: 'u', description: 'username' }),
    email: flags.string({ char: 'e', description: 'email' })
  };
  static args = [{ name: 'folder' }];
  async run() {
    const { args, flags } = this.parse(NestJSNew);
    const folder = args.folder;
    const template = flags.template || '';
    const name = flags.name;
    const username = flags.username;
    const email = flags.email;

    try {
      await this.runNew(
        template,
        folder,
        name,
        username,
        email
      );
    } catch (error) {
      console.error(error);
    }
  }
  private runNew(
    template: string,
    folder: string,
    name?: string,
    username?: string,
    email?: string
  ) {
    this.debug('Start', {
      template: template,
      folder: folder,
      name: name,
      username: username,
      email: email
    });
    return new Promise((resolve, reject) => {
      const inputFolder = folder ? folder.replace(new RegExp('\\' + sep, 'g'), '/').split(sep).join('/') : undefined;
      if (inputFolder && inputFolder.indexOf('/') === -1 && !name) {
        name = inputFolder;
      }
      const command = schematicsCommandBuilder(
        inputFolder as string,
        template,
        {
          root: inputFolder,
          name: name,
          username: username,
          email: email
        }
      );
      this.debug('command', command);
      npmRun.exec(
        command,
        {},
        (err: any, stdout: any, stderr: any) => {
          this.debug('err', err);
          this.debug('stdout', stdout);
          this.debug('stderr', stderr);
          if (err) {
            this.debug('End', err);
            reject(err);
          } else {
            this.debug('End', true);
            resolve();
          }
        }
      );
    });
  }
}
