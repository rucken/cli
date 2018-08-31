import { flags, Command } from '@oclif/command';
import { resolve as resolvePath, sep } from 'path';
const npmRun = require('npm-run');

export class NestJSEntity extends Command {
  static aliases = ['entity:nestjs', 'nestjs-entity'];
  static description = 'generate dto, entity, service and controller for NestJS backend';
  static flags = {
    help: flags.help({ char: 'h' }),
    name: flags.string({ char: 'n', description: 'entity singular name on ke-bab case', required: true }),
    fields: flags.string({ char: 'f', description: 'entity fields', default: '[name]' }),
    username: flags.string({ char: 'u', description: 'username' }),
    email: flags.string({ char: 'e', description: 'email' }),
    app: flags.string({ char: 'a', description: 'application name in .nestcli.json' }),
    core: flags.string({ char: 'c', description: 'core library name in .nestcli.json' }),
  };
  static args = [{ name: 'folder' }];
  async run() {
    const { args, flags } = this.parse(NestJSEntity);
    const folder = args.folder;
    const name = flags.name;
    const fields = flags.fields;
    const username = flags.username;
    const email = flags.email;
    const app = flags.app;
    const core = flags.core;

    try {
      await this.runEntity(
        folder,
        name,
        fields,
        username,
        email,
        app,
        core
      );
    } catch (error) {
      console.error(error);
    }
  }
  private runEntity(
    folder: string,
    name: string,
    fields?: string,
    username?: string,
    email?: string,
    app?: string,
    core?: string
  ) {
    this.debug('Start', {
      folder: folder,
      name: name,
      fields: fields,
      username: username,
      email: email,
      app: app,
      core: core
    });
    return new Promise((resolve, reject) => {
      const inputFolder = folder ? folder.replace(new RegExp('\\' + sep, 'g'), '/').split(sep).join('/') : undefined;
      const command = 'node ' +
        resolvePath(__dirname, '../../node_modules/@angular-devkit/schematics-cli/bin/schematics.js') +
        ' @rucken/schematics:nestjs-entity ' +
        (inputFolder ? ('--root=' + inputFolder + ' ') : ' ') +
        (name ? ('--name=' + name + ' ') : ' ') +
        (fields ? ('--fields=' + fields + ' ') : ' ') +
        (username ? ('--username=' + username + ' ') : ' ') +
        (email ? ('--email=' + email + ' ') : ' ') +
        (app ? ('--app=' + app + ' ') : ' ') +
        (core ? ('--core=' + core + ' ') : ' ') +
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
