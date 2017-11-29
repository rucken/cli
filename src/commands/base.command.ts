import * as path from 'path';

import { Base } from '../lib/base';
import { Project } from '../lib/project';

export class BaseCommand extends Base {

    project: Project;

    constructor(public action: any) {
        super('', path.resolve(action.parent.root ? action.parent.root : process.cwd()));
        this.project = new Project(this.rootFolder);
        this.debug = action.parent.verbose;
        this.process();
    }
    process() {
        if (!this.action.parent.lib && !this.action.parent.app) {
            this.log('process').info('Detect: target=apps (' + this.project.appsConfigs.map((item: any) => item.name).join(', ') + ')');
            this.log('process').info('Detect: target=libs (' + this.project.libsConfigs.map((item: any) => item.name).join(', ') + ')');
            this.processApps(this.project.appsPaths, this.rootFolder);
            this.processLibs(this.project.libsPaths, this.rootFolder);
        }
        if (this.action.parent.lib) {
            if (this.action.parent.lib === true) {
                this.log('process').info('Detect: target=libs (' + this.project.libsConfigs.map((item: any) => item.name).join(', ') + ')');
                if (this.project.libsConfigs.length === 0) {
                    this.log('process').error('Libs not found');
                } else {
                    this.processLibs(this.project.libsPaths, this.rootFolder);
                }
            } else {
                this.log('process').info('Detect: target=lib');
                this.processLib(this.project.getLibPathByName(this.action.parent.lib), this.rootFolder);
            }
        }
        if (this.action.parent.app) {
            if (this.action.parent.app === true) {
                this.log('process').info('Detect: target=apps (' + this.project.appsConfigs.map((item: any) => item.name).join(', ') + ')');
                if (this.project.appsConfigs.length === 0) {
                    this.log('process').error('Apps not found');
                } else {
                    this.processApps(this.project.appsPaths, this.rootFolder);
                }
            } else {
                this.log('process').info('Detect: target=app');
                this.processApp(this.project.getAppPathByName(this.action.parent.app), this.rootFolder);
            }
        }
    }
    processLibs(folders: string[], rootFolder: string) {
    }
    processLib(folder: string, rootFolder: string) {
    }
    processApps(folders: string[], rootFolder: string) {
    }
    processApp(folder: string, rootFolder: string) {
    }
}