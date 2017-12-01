import * as path from 'path';

import { Base } from '../lib/base';
import { Project } from '../lib/project';

export class BaseCommand extends Base {

    project: Project;

    constructor(public options: any) {
        super('', path.resolve(options && options.root ? options.root : process.cwd()));
        this.project = new Project(this.rootFolder);
        this.debug = options && options.verbose;
    }
    async process() {
        if (!this.options.lib && !this.options.app) {
            this.log('process').info('Detect: target=apps (' + this.project.appsConfigs.map((item: any) => item.name).join(', ') + ')');
            this.log('process').info('Detect: target=libs (' + this.project.libsConfigs.map((item: any) => item.name).join(', ') + ')');
            await this.processApps({ folders: this.project.appsPaths, rootFolder: this.rootFolder });
            await this.processLibs({ folders: this.project.libsPaths, rootFolder: this.rootFolder });
        }
        if (this.options.lib) {
            if (this.options.lib === true) {
                this.log('process').info('Detect: target=libs (' + this.project.libsConfigs.map((item: any) => item.name).join(', ') + ')');
                if (this.project.libsConfigs.length === 0) {
                    this.log('process').error('Libs not found');
                } else {
                    return await this.processLibs({
                        folders: this.project.libsPaths,
                        rootFolder: this.rootFolder,
                        packages: this.project.libsConfigs
                    });
                }
            } else {
                this.log('process').info('Detect: target=lib');
                return await this.processLib({
                    folder: this.project.getLibPathByName(this.options.lib),
                    rootFolder: this.rootFolder,
                    package: this.project.getLibConfigByName(this.options.lib)
                });
            }
        }
        if (this.options.app) {
            if (this.options.app === true) {
                this.log('process').info('Detect: target=apps (' + this.project.appsConfigs.map((item: any) => item.name).join(', ') + ')');
                if (this.project.appsConfigs.length === 0) {
                    this.log('process').error('Apps not found');
                } else {
                    return await this.processApps({
                        folders: this.project.appsPaths,
                        rootFolder: this.rootFolder,
                        packages: this.project.appsConfigs
                    });
                }
            } else {
                this.log('process').info('Detect: target=app');
                return await this.processApp({
                    folder: this.project.getAppPathByName(this.options.app),
                    rootFolder: this.rootFolder,
                    package: this.project.getAppConfigByName(this.options.app)
                });
            }
        }
        return await true;
    }
    async processLibs(options?: any) {
        return await true;
    }
    async processLib(options?: any) {
        return await true;
    }
    async processApps(options?: any) {
        return await true;
    }
    async processApp(options?: any) {
        return await true;
    }
}