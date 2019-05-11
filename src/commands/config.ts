import { flags, Command } from '@oclif/command';
import { readFileSync, writeFileSync } from 'fs';
import { resolve as resolvePath } from 'path';
export class Config extends Command {
  static description = 'change angular.json properties and tsconfig.json properties for switch between dev - for speedup mono serve mode and prod - build optimization and standalone build all lib and application';

  static flags = {
    help: flags.help({ char: 'h' }),
    mode: flags.enum({ char: 'm', options: ['dev', 'prod'], default: 'prod' })
  };
  static args = [{ name: 'folder' }];

  async run() {
    process.setMaxListeners(0);
    require('events').EventEmitter.defaultMaxListeners = 100;
    const { args, flags } = this.parse(Config);
    const folder = args.folder ? resolvePath(args.folder) : resolvePath('.');
    const angularConfigPath = resolvePath(folder, 'angular.json');
    const tsconfigConfigPath = resolvePath(folder, 'tsconfig.json');
    const mode = flags.mode;
    try {
      await this.updateConfigs(
        angularConfigPath, tsconfigConfigPath, mode
      );
    } catch (error) {
      console.error(error);
    }
  }
  updateConfigs(angularConfigPath: string, tsconfigConfigPath: string, mode: string) {
    this.debug('Start', {
      angularConfigPath: angularConfigPath,
      tsconfigConfigPath: tsconfigConfigPath,
      mode: mode
    });
    return new Promise((resolve, reject) => {
      const errors: any[] = [];
      let angularConfig: any;
      let tsconfigConfig: any;
      let content;
      try {
        content = readFileSync(angularConfigPath).toString();
        angularConfig = JSON.parse(content);
      } catch (error) {
        this.debug('Error', `Wrong body of file ${angularConfigPath}`);
        errors.push(error);
      }
      try {
        content = readFileSync(tsconfigConfigPath).toString();
        tsconfigConfig = JSON.parse(content);
      } catch (error) {
        this.debug('Error', `Wrong body of file ${tsconfigConfigPath}`);
        errors.push(error);
      }
      if (mode === 'dev') {
        if (tsconfigConfig.compilerOptions && tsconfigConfig.compilerOptions.paths) {
          const paths = Object.keys(tsconfigConfig.compilerOptions.paths);
          paths.forEach((key =>
            tsconfigConfig.compilerOptions.paths[key].forEach((_path: string, index: number) => {
              const pathArray = tsconfigConfig.compilerOptions.paths[key][index].split('/');
              let replaced = false;
              if (pathArray[0] === 'dist') {
                pathArray[0] = 'libs';
                replaced = true;
              }
              if (replaced) {
                if (pathArray[pathArray.length - 1] === '*') {
                  pathArray.splice(-1, 1);
                  pathArray.push('src');
                  pathArray.push('*');
                } else {
                  pathArray.push('src');
                }
              }
              tsconfigConfig.compilerOptions.paths[key][index] = pathArray.join('/');
            })
          ));
        }
        if (angularConfig.projects) {
          const projects = Object.keys(angularConfig.projects);
          projects.forEach(project => {
            if (angularConfig.projects[project].architect) {
              const architects = Object.keys(angularConfig.projects[project].architect);
              architects.forEach(architect => {
                if (angularConfig.projects[project].architect[architect].configurations) {
                  const configurations = Object.keys(angularConfig.projects[project].architect[architect].configurations);
                  configurations.forEach(configuration => {
                    const configurationData = angularConfig.projects[project].architect[architect].configurations[configuration];
                    if (configurationData.optimization !== undefined) {
                      configurationData.optimization = false;
                    }
                    if (configurationData.buildOptimizer !== undefined) {
                      configurationData.buildOptimizer = false;
                    }
                    angularConfig.projects[project].architect[architect].configurations[configuration] = configurationData;
                  });
                }
              });
            }
          });
        }
      }
      if (mode === 'prod') {
        if (tsconfigConfig.compilerOptions && tsconfigConfig.compilerOptions.paths) {
          const paths = Object.keys(tsconfigConfig.compilerOptions.paths);
          paths.forEach((key =>
            tsconfigConfig.compilerOptions.paths[key].forEach((_path: string, index: number) => {
              const pathArray = tsconfigConfig.compilerOptions.paths[key][index].split('/');
              let replaced = false;
              if (pathArray[0] === 'libs') {
                pathArray[0] = 'dist';
                replaced = true;
              }
              if (replaced) {
                if (pathArray[pathArray.length - 1] === 'src') {
                  pathArray.splice(-1, 1);
                }
                if (pathArray[pathArray.length - 2] === 'src' && pathArray[pathArray.length - 1] === '*') {
                  pathArray.splice(-1, 1);
                  pathArray.splice(-1, 1);
                  pathArray.push('*');
                }
              }
              tsconfigConfig.compilerOptions.paths[key][index] = pathArray.join('/');
            })
          ));
        }
        if (angularConfig.projects) {
          const projects = Object.keys(angularConfig.projects);
          projects.forEach(project => {
            if (angularConfig.projects[project].architect) {
              const architects = Object.keys(angularConfig.projects[project].architect);
              architects.forEach(architect => {
                if (angularConfig.projects[project].architect[architect].configurations) {
                  const configurations = Object.keys(angularConfig.projects[project].architect[architect].configurations);
                  configurations.forEach(configuration => {
                    const configurationData = angularConfig.projects[project].architect[architect].configurations[configuration];
                    if (configurationData.optimization !== undefined) {
                      configurationData.optimization = true;
                    }
                    if (configurationData.buildOptimizer !== undefined) {
                      configurationData.buildOptimizer = true;
                    }
                    angularConfig.projects[project].architect[architect].configurations[configuration] = configurationData;
                  });
                }
              });
            }
          });
        }
      }
      writeFileSync(
        angularConfigPath,
        JSON.stringify(angularConfig, null, 2)
      );
      writeFileSync(
        tsconfigConfigPath,
        JSON.stringify(tsconfigConfig, null, 2)
      );
      if (errors.length) {
        this.debug('Error', errors);
        reject(errors);
      } else {
        this.debug('End', true);
        resolve();
      }
    });
  }
}
