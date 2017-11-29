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
            await this.processApps(this.project.appsPaths, this.rootFolder);
            await this.processLibs(this.project.libsPaths, this.rootFolder);
        }
        if (this.options.lib) {
            if (this.options.lib === true) {
                this.log('process').info('Detect: target=libs (' + this.project.libsConfigs.map((item: any) => item.name).join(', ') + ')');
                if (this.project.libsConfigs.length === 0) {
                    this.log('process').error('Libs not found');
                } else {
                    return await this.processLibs(this.project.libsPaths, this.rootFolder);
                }
            } else {
                this.log('process').info('Detect: target=lib');
                return await this.processLib(this.project.getLibPathByName(this.options.lib), this.rootFolder);
            }
        }
        if (this.options.app) {
            if (this.options.app === true) {
                this.log('process').info('Detect: target=apps (' + this.project.appsConfigs.map((item: any) => item.name).join(', ') + ')');
                if (this.project.appsConfigs.length === 0) {
                    this.log('process').error('Apps not found');
                } else {
                    return await this.processApps(this.project.appsPaths, this.rootFolder);
                }
            } else {
                this.log('process').info('Detect: target=app');
                return await this.processApp(this.project.getAppPathByName(this.options.app), this.rootFolder);
            }
        }
        return await true;
    }
    async processLibs(folders: string[], rootFolder: string) {
        return await true;
    }
    async processLib(folder: string, rootFolder: string) {
        return await true;
    }
    async processApps(folders: string[], rootFolder: string) {
        return await true;
    }
    async processApp(folder: string, rootFolder: string) {
        return await true;
    }
}