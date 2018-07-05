import { flags, Command } from '@oclif/command';
import { readFileSync, writeFileSync } from 'fs';
import { resolve as resolvePath } from 'path';

export class VersionUpdater extends Command {
  static description = 'libraries dependencies and package.json versions updater from root package.json';

  static flags = {
    help: flags.help({ char: 'h' }),
    root: flags.string({ char: 'r', description: 'root project with package.json for get inforamtion about dependencies and it versions', default: '.' })
  };
  static args = [{ name: 'folder' }];

  async run() {
    const { args, flags } = this.parse(VersionUpdater);
    const folder = args.folder ? resolvePath(args.folder) : resolvePath('.');
    const root = flags.root ? resolvePath(flags.root) : resolvePath('.');
    const folderConfigPath = resolvePath(folder, 'package.json');
    const rootConfigPath = resolvePath(root, 'package.json');
    try {
      await this.updateFolderPackageFromRootPackage(
        rootConfigPath, folderConfigPath
      );
    } catch (error) {
      console.error(error);
    }
  }
  updateFolderPackageFromRootPackage(rootConfigPath: string, folderConfigPath: string) {
    this.debug('Start', {
      rootConfigPath: rootConfigPath,
      folderConfigPath: folderConfigPath
    });
    return new Promise((resolve, reject) => {
      const errors: any[] = [];
      if (folderConfigPath === rootConfigPath) {
        reject(`Source and destination is equals: ${folderConfigPath}==${rootConfigPath}`);
        errors.push(`Source and destination is equals: ${folderConfigPath}==${rootConfigPath}`);
      }
      let folderConfig: any;
      let rootConfig: any;
      let content;
      try {
        content = readFileSync(rootConfigPath).toString();
        rootConfig = JSON.parse(content);
      } catch (error) {
        this.debug('Error', `Wrong body of file ${rootConfigPath}`);
        errors.push(error);
      }
      try {
        content = readFileSync(folderConfigPath).toString();
        folderConfig = JSON.parse(content);
      } catch (error) {
        this.debug('Error', `Wrong body of file ${folderConfigPath}`);
        errors.push(error);
      }
      folderConfig['version'] = rootConfig['version'];
      if (folderConfig['peerDependencies']) {
        const peerDependenciesKeys = Object.keys(folderConfig['peerDependencies']);
        peerDependenciesKeys.forEach(key => {
          if (rootConfig['dependencies'][key]) {
            folderConfig['peerDependencies'][key] = rootConfig['dependencies'][key];
          }
        });
      }
      if (folderConfig['dependencies']) {
        const dependenciesKeys = Object.keys(folderConfig['dependencies']);
        dependenciesKeys.forEach(key => {
          if (rootConfig['dependencies'][key]) {
            folderConfig['dependencies'][key] = rootConfig['dependencies'][key];
          }
        });
      }
      writeFileSync(
        folderConfigPath,
        JSON.stringify(folderConfig, null, 2)
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
