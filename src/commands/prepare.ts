import { flags, Command } from '@oclif/command';
import { readFileSync } from 'fs';
import { resolve as resolvePath } from 'path';
import { Config } from './config';
import { MakeTsList } from './make-ts-list';
import { Translate } from './translate';
import { VersionUpdater } from './version-updater';

export class Prepare extends Command {
  static description = 'translate + make-ts-list + version-update + config';

  static flags = {
    help: flags.help({ char: 'h' }),
    mode: flags.enum({ char: 'm', options: ['dev', 'prod'], default: 'prod' })
  };
  static args = [{ name: 'folder' }];

  async run() {
    const { args, flags } = this.parse(Prepare);
    const folder = args.folder ? resolvePath(args.folder) : resolvePath('.');
    const angularConfigPath = resolvePath(folder, 'angular.json');
    const mode = flags.mode;

    let angularConfig: any;
    try {
      const content = readFileSync(angularConfigPath).toString();
      angularConfig = JSON.parse(content);
    } catch (error) {
      console.error(error);
    }
    const apps: any[] = [];
    const libs: any[] = [];

    if (angularConfig && angularConfig.projects) {
      Object.keys(angularConfig.projects).forEach(key =>
        (
          angularConfig.projects[key] && angularConfig.projects[key].projectType === 'application'
        ) ? apps.push(
          { ...angularConfig.projects[key], ...{ name: key } }
        ) : null
      );
      Object.keys(angularConfig.projects).forEach(key =>
        (
          angularConfig.projects[key] && angularConfig.projects[key].projectType === 'library'
        ) ? libs.push(
          { ...angularConfig.projects[key], ...{ name: key } }
        ) : null
      );
    } else {
      console.error('Projects not founded!');
    }
    try {
      await this.runTranslate(
        folder, apps, libs
      );
    } catch (error) {
      console.error(error);
    }
    try {
      await this.runMakeTsList(
        folder, apps, libs
      );
    } catch (error) {
      console.error(error);
    }
    try {
      await this.runVersionUpdater(
        folder, libs
      );
    } catch (error) {
      console.error(error);
    }
    try {
      await this.runConfig(
        folder,
        mode
      );
    } catch (error) {
      console.error(error);
    }
  }
  runConfig(
    folder: string,
    mode: string
  ) {
    return new Promise(async (resolve, reject) => {
      try {
        await Config.run([resolvePath(folder), '--mode', mode]);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }
  runVersionUpdater(
    folder: string, libs: any[]
  ) {
    return new Promise(async (resolve, reject) => {
      const errors: any[] = [];
      libs.filter(lib => lib.root).forEach(async (lib: { root: string }) => {
        try {
          await VersionUpdater.run([resolvePath(folder, lib.root), '--root', resolvePath(folder)]);
        } catch (error) {
          errors.push(error);
        }
      });
      if (errors.length) {
        reject(errors);
      } else {
        resolve();
      }
    });
  }
  runMakeTsList(
    folder: string, apps: any[], libs: any[]
  ) {
    return new Promise(async (resolve, reject) => {
      const errors: any[] = [];
      apps.filter(app => app.sourceRoot).forEach(async (app: { sourceRoot: string }) => {
        try {
          await MakeTsList.run([resolvePath(folder, app.sourceRoot)]);
        } catch (error) {
          errors.push(error);
        }
      });
      libs.filter(lib => lib.sourceRoot).forEach(async (lib: { sourceRoot: string }) => {
        try {
          await MakeTsList.run([resolvePath(folder, lib.sourceRoot)]);
        } catch (error) {
          errors.push(error);
        }
      });
      if (errors.length) {
        reject(errors);
      } else {
        resolve();
      }
    });
  }
  runTranslate(
    folder: string, apps: any[], libs: any[]
  ) {
    return new Promise(async (resolve, reject) => {
      const errors: any[] = [];
      apps.filter(app => app.sourceRoot).forEach(async (app: { sourceRoot: string }) => {
        try {
          await Translate.run([resolvePath(folder, app.sourceRoot, 'app')]);
        } catch (error) {
          errors.push(error);
        }
      });
      libs.filter(lib => lib.sourceRoot).forEach(async (lib: { sourceRoot: string }) => {
        try {
          await Translate.run([resolvePath(folder, lib.sourceRoot)]);
        } catch (error) {
          errors.push(error);
        }
      });
      setTimeout(() => {
        if (errors.length) {
          reject(errors);
        } else {
          resolve();
        }
      }, 1000);
    });
  }
}
