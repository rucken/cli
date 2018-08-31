import { flags, Command } from '@oclif/command';
import { readFileSync, writeFileSync } from 'fs';
import { resolve as resolvePath, sep } from 'path';
import { AngularNew } from './angular-new';
import { NestJSNew } from './nestjs-new';

export class New extends Command {
  static description = 'generate empty backend on NestJS and frontend on Angular 6+ application based on Rucken template';
  static flags = {
    help: flags.help({ char: 'h' }),
    name: flags.string({ char: 'n', description: 'application name on ke-bab case' }),
    username: flags.string({ char: 'u', description: 'username' }),
    email: flags.string({ char: 'e', description: 'email' })
  };
  static args = [{ name: 'folder' }];
  async run() {
    const { args, flags } = this.parse(New);
    const folder = args.folder;
    const frontendFolder = args.folder + '/frontend';
    const username = flags.username;
    const email = flags.email;
    const inputFolder = folder ? folder.replace(new RegExp('\\' + sep, 'g'), '/').split(sep).join('/') : undefined;
    let name = flags.name || '';
    if (inputFolder && inputFolder.indexOf('/') === -1 && !name) {
      name = inputFolder;
    }
    try {
      await this.runNestJsNew(
        folder,
        name,
        username,
        email
      );
    } catch (error) {
      console.error(error);
    }
    try {
      await this.runAngularNew(
        frontendFolder,
        name,
        username,
        email
      );
    } catch (error) {
      console.error(error);
    }
    try {
      await this.updateAngularSources(
        frontendFolder,
        name
      );
    } catch (error) {
      console.error(error);
    }
    try {
      await this.updateNestJsSources(
        'angular',
        folder,
        name
      );
    } catch (error) {
      console.error(error);
    }
  }
  private runNestJsNew(
    folder: string,
    name: string,
    username?: string,
    email?: string
  ) {
    return new Promise(async (resolve, reject) => {
      try {
        const args = [folder, '--name', name];
        if (username) {
          args.push('--username');
          args.push(username);
        }
        if (email) {
          args.push('--email');
          args.push(email);
        }
        await NestJSNew.run(args);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }
  private runAngularNew(
    folder: string,
    name: string,
    username?: string,
    email?: string
  ) {
    return new Promise(async (resolve, reject) => {
      try {
        const args = [folder, '--name', name];
        if (username) {
          args.push('--username');
          args.push(username);
        }
        if (email) {
          args.push('--email');
          args.push(email);
        }
        await AngularNew.run(args);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }
  private updateAngularSources(
    folder: string,
    name: string
  ) {
    return new Promise(async (resolve, reject) => {
      try {
        const envFiles = [
          resolvePath(folder, 'apps', name, 'src', 'environments', 'environment.prod.ts'),
          resolvePath(folder, 'apps', name, 'src', 'environments', 'environment-server.prod.ts')
        ];
        envFiles.forEach(envFile => {
          const data = readFileSync(envFile, 'utf8').toString();
          const newData = data.replace(
            'https://rucken-core-nestjs.now.sh',
            ''
          );
          writeFileSync(envFile, newData, 'utf8');
        });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }
  private updateNestJsSources(
    frontendTemplate: string,
    folder: string,
    name: string
  ) {
    return new Promise(async (resolve, reject) => {
      try {
        const packageJsonFile = resolvePath(folder, 'package.json');
        const packageJson: any = JSON.parse(readFileSync(packageJsonFile, 'utf8').toString());
        packageJson['devDependencies']['cp-cli'] = '^1.1.2';
        packageJson['scripts']['postinstall'] = 'run-s frontend:install';
        packageJson['scripts']['frontend:install'] = 'cd frontend && npm install';
        packageJson['scripts']['frontend:build'] = 'cd frontend && npm run build';
        packageJson['scripts']['frontend:copy-readme-from-backend'] = `./node_modules/.bin/cp-cli ./README.md ./frontend`;
        packageJson['scripts']['frontend:copy-to-backend'] = `./node_modules/.bin/cp-cli ./frontend/dist/${name} ./www`;
        packageJson['scripts']['frontend'] = 'run-s frontend:copy-readme-from-backend frontend:build frontend:copy-to-backend';
        writeFileSync(packageJsonFile, JSON.stringify(packageJson, null, 2), 'utf8');

        const mainFiles = [
          resolvePath(folder, 'src', 'main.ts'),
          resolvePath(folder, 'src', 'main.hmr.ts')
        ];
        mainFiles.forEach(mainFile => {
          const mainContent: any = readFileSync(mainFile, 'utf8').toString();
          const newMainFileContent = mainContent.replace(
            `    ...defaultCoreConfig,\n`,
            `    ...defaultCoreConfig,\n    indexFile: path.resolve(__dirname, '..', './frontend/dist/${name}/index.html'),\n`
          );
          writeFileSync(mainFile, newMainFileContent, 'utf8');
        });

        const backendReadmeFile = resolvePath(folder, 'README.md');
        const frontendReadmeFile = resolvePath(folder, 'frontend', 'README.md');
        const backendReadmeContent: any = readFileSync(backendReadmeFile, 'utf8').toString().replace('# ', '# backend: ');
        const frontendReadmeContent: any = readFileSync(frontendReadmeFile, 'utf8').toString().replace('# ', '# frontend: ');
        writeFileSync(frontendReadmeFile, `${backendReadmeContent}\n---\n${frontendReadmeContent}`, 'utf8');

        const ruckenJsonFile = resolvePath(folder, 'rucken.json');
        const ruckenJson = {
          name,
          backend: 'nestjs',
          frontend: frontendTemplate
        };
        writeFileSync(ruckenJsonFile, JSON.stringify(ruckenJson, null, 2), 'utf8');
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }
}
