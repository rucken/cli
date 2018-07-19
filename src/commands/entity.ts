import { flags, Command } from '@oclif/command';
import { sep } from 'path';
const npmRun = require('npm-run');

export class Entity extends Command {
  static description = 'generate model, service, grid, lookup input, modal for edit row in grid, modal for select items from grid with items';
  static flags = {
    help: flags.help({ char: 'h' }),
    name: flags.string({ char: 'n', description: 'entity singular name on ke-bab case', required: true }),
    fields: flags.string({ char: 'f', description: 'entity fields', default: '[name]' }),
    username: flags.string({ char: 'u', description: 'username' }),
    email: flags.string({ char: 'e', description: 'email' }),
    app: flags.string({ char: 'a', description: 'application name in angular.json' }),
    core: flags.string({ char: 'c', description: 'core library name in angular.json' }),
    web: flags.string({ char: 'w', description: 'web library name in angular.json' })
  };
  static args = [{ name: 'folder' }];
  async run() {
    const { args, flags } = this.parse(Entity);
    const folder = args.folder;
    const name = flags.name;
    const fields = flags.fields;
    const username = flags.username;
    const email = flags.email;
    const app = flags.app;
    const core = flags.core;
    const web = flags.web;

    try {
      await this.runEntity(
        folder,
        name,
        fields,
        username,
        email,
        app,
        core,
        web
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
    core?: string,
    web?: string
  ) {
    this.debug('Start', {
      folder: folder,
      name: name,
      fields: fields,
      username: username,
      email: email,
      app: app,
      core: core,
      web: web
    });
    return new Promise((resolve, reject) => {
      const inputFolder = folder ? folder.replace(new RegExp('\\' + sep, 'g'), '/').split(sep).join('/') : undefined;
      const command =
        'schematics @rucken/schematics:entity ' +
        (inputFolder ? ('--root=' + inputFolder + ' ') : ' ') +
        (name ? ('--name=' + name + ' ') : ' ') +
        (fields ? ('--fields=' + fields + ' ') : ' ') +
        (username ? ('--username=' + username + ' ') : ' ') +
        (email ? ('--email=' + email + ' ') : ' ') +
        (app ? ('--app=' + app + ' ') : ' ') +
        (core ? ('--core=' + core + ' ') : ' ') +
        (web ? ('--web=' + web + ' ') : ' ') +
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
