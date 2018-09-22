import { flags, Command } from '@oclif/command';
import { sep } from 'path';
import { schematicsCommandBuilder } from '../utils/schematics-command-builder';
const npmRun = require('npm-run');

export class NestJSEntity extends Command {
  static aliases = ['entity:nestjs', 'nestjs-entity', 'backend:entity'];
  static description = 'generate dto, entity, service and controller for NestJS backend';
  static flags = {
    help: flags.help({ char: 'h' }),
    template: flags.string({ char: 't', description: 'template', default: '@rucken/schematics:nestjs-entity' }),
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
    const template = flags.template || '';
    const name = flags.name;
    const fields = flags.fields;
    const username = flags.username;
    const email = flags.email;
    const app = flags.app;
    const core = flags.core;

    try {
      await this.runEntity(
        template,
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
    template: string,
    folder: string,
    name: string,
    fields?: string,
    username?: string,
    email?: string,
    app?: string,
    core?: string
  ) {
    this.debug('Start', {
      template: template,
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
      const command = schematicsCommandBuilder(
        inputFolder as string,
        template,
        {
          root: inputFolder,
          name: name,
          fields: fields,
          username: username,
          email: email,
          app: app,
          core: core
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
