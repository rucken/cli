import { Command, flags } from '@oclif/command';
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
    mode: flags.enum({ char: 'm', options: ['dev', 'prod'] })
  };
  static args = [{ name: 'folder' }];

  async run() {
    const { args, flags } = this.parse(Prepare);
    const folder = args.folder ? resolvePath(args.folder) : resolvePath('.');
    const mode = flags.mode;
    const angularConfigPath = resolvePath(folder, 'angular.json');

    let angularConfig: any;
    try {
      const content = readFileSync(angularConfigPath).toString();
      angularConfig = JSON.parse(content);
      // tslint:disable-next-line:no-unused
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
    if (mode) {
      try {
        await this.runConfig(
          folder,
          mode
        );
      } catch (error) {
        console.error(error);
      }
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
      const eachLibs: { root: string }[] = libs.filter(lib => lib.root);
      for (const lib of eachLibs) {
        try {
          await VersionUpdater.run([resolvePath(folder, lib.root), '--root', resolvePath(folder)]);
        } catch (error) {
          errors.push(error);
        }
      }
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
      const eachApps: { sourceRoot: string }[] = apps.filter(app => app.sourceRoot);
      for (const app of eachApps) {
        try {
          await MakeTsList.run([resolvePath(folder, app.sourceRoot, 'app')]);
        } catch (error) {
          errors.push(error);
        }
      }
      const eachLibs: { sourceRoot: string }[] = libs.filter(lib => lib.sourceRoot);
      for (const lib of eachLibs) {
        try {
          await MakeTsList.run([resolvePath(folder, lib.sourceRoot)]);
        } catch (error) {
          errors.push(error);
        }
      }
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
      const eachApps: { sourceRoot: string }[] = apps.filter(app => app.sourceRoot);
      for (const app of eachApps) {
        try {
          await Translate.run([resolvePath(folder, app.sourceRoot, 'app')]);
        } catch (error) {
          errors.push(error);
        }
      }
      const eachLibs: { sourceRoot: string }[] = libs.filter(lib => lib.sourceRoot);
      for (const lib of eachLibs) {
        try {
          await Translate.run([resolvePath(folder, lib.sourceRoot)]);
        } catch (error) {
          errors.push(error);
        }
      }
      if (errors.length) {
        reject(errors);
      } else {
        resolve();
      }
    });
  }
}
