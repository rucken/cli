import { App } from '../lib/app';
import { Apps } from '../lib/apps';
import { Lib } from '../lib/lib';
import { Libs } from '../lib/libs';
import { BaseCommand } from './base.command';

export class BuildCommand extends BaseCommand {
    constructor(public action: any) {
        super(action);
    }
    processLibs(folders: string[], rootFolder: string) {
        this.log('build').info('Build all libs on ' + this.rootFolder);
        const libs = new Libs(folders, rootFolder);
        libs.debug = this.debug;
        libs.build().then((result: boolean) => {
            this.log('build').info('Done!');
        }).catch((e:any) => {
            this.log('build').error(e);
            this.log('build').info('Done with errors!');
        });
    }
    processLib(folder: string, rootFolder: string) {
        this.log('build').info('Build lib ' + folder + ' on ' + rootFolder);
        const lib = new Lib(folder, rootFolder);
        lib.debug = this.debug;
        lib.build().then((result: boolean) => {
            this.log('build').info('Done!');
        }).catch((e:any) => {
            this.log('build').error(e);
            this.log('build').info('Done with errors!');
        });
    }
    processApps(folders: string[], rootFolder: string) {
        this.log('build').info('Build all apps on ' + rootFolder);
        const apps = new Apps(folders, rootFolder);
        apps.debug = this.debug;
        apps.build().then((result: boolean) => {
            this.log('build').info('Done!');
        }).catch((e:any) => {
            this.log('build').error(e);
            this.log('build').info('Done with errors!');
        });
    }
    processApp(folder: string, rootFolder: string) {
        this.log('build').info('Build app ' + this.action.parent.app + ' on ' + rootFolder);
        const app = new App(folder, rootFolder);
        app.debug = this.debug;
        app.build().then((result: boolean) => {
            this.log('build').info('Done!');
        }).catch((e:any) => {
            this.log('build').error(e);
            this.log('build').info('Done with errors!');
        });
    }
}