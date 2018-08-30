import { flags, Command } from '@oclif/command';
import { sep } from 'path';
const npmRun = require('npm-run');

export class NestJSNew extends Command {
  static aliases = ['new:nestjs', 'nestjs-new'];
  static description = 'generate empty NestJS backend application';
  static flags = {
    help: flags.help({ char: 'h' }),
    name: flags.string({ char: 'n', description: 'application name on ke-bab case', required: true }),
    username: flags.string({ char: 'u', description: 'username' }),
    email: flags.string({ char: 'e', description: 'email' })
  };
  static args = [{ name: 'folder' }];
  async run() {
    const { args, flags } = this.parse(NestJSNew);
    const folder = args.folder;
    const name = flags.name;
    const username = flags.username;
    const email = flags.email;

    try {
      await this.runNew(
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
    folder: string,
    name: string,
    username?: string,
    email?: string
  ) {
    this.debug('Start', {
      folder: folder,
      name: name,
      username: username,
      email: email
    });
    return new Promise((resolve, reject) => {
      const inputFolder = folder ? folder.replace(new RegExp('\\' + sep, 'g'), '/').split(sep).join('/') : undefined;
      const command =
        'schematics @rucken/schematics:nestjs-new ' +
        (inputFolder ? ('--root=' + inputFolder + ' ') : ' ') +
        (name ? ('--name=' + name + ' ') : ' ') +
        (username ? ('--username=' + username + ' ') : ' ') +
        (email ? ('--email=' + email + ' ') : ' ') +
        '--dry-run=false --force';
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
