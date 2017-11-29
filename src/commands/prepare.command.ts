import { App } from '../lib/app';
import { Apps } from '../lib/apps';
import { Lib } from '../lib/lib';
import { Libs } from '../lib/libs';
import { BaseCommand } from './base.command';

export class PrepareCommand extends BaseCommand {
    constructor(public action: any) {
        super(action);
    }
    processLibs(folders: string[], rootFolder: string) {
        this.log('prepare').info('Prepare all libs on ' + this.rootFolder);
        const libs = new Libs(folders, rootFolder);
        libs.debug = this.debug;
        libs.prepare().then((result: boolean) => {
            this.log('prepare').info('Done!');
        }).catch((e:any) => {
            this.log('prepare').error(e);
            this.log('prepare').info('Done with errors!');
        });
    }
    processLib(folder: string, rootFolder: string) {
        this.log('prepare').info('Prepare lib ' + folder + ' on ' + rootFolder);
        const lib = new Lib(folder, rootFolder);
        lib.debug = this.debug;
        lib.prepare().then((result: boolean) => {
            this.log('prepare').info('Done!');
        }).catch((e:any) => {
            this.log('prepare').error(e);
            this.log('prepare').info('Done with errors!');
        });
    }
    processApps(folders: string[], rootFolder: string) {
        this.log('prepare').info('Prepare all apps on ' + rootFolder);
        const apps = new Apps(folders, rootFolder);
        apps.debug = this.debug;
        apps.prepare().then((result: boolean) => {
            this.log('prepare').info('Done!');
        }).catch((e:any) => {
            this.log('prepare').error(e);
            this.log('prepare').info('Done with errors!');
        });
    }
    processApp(folder: string, rootFolder: string) {
        this.log('prepare').info('Prepare app ' + this.action.parent.app + ' on ' + rootFolder);
        const app = new App(folder, rootFolder);
        app.debug = this.debug;
        app.prepare().then((result: boolean) => {
            this.log('prepare').info('Done!');
        }).catch((e:any) => {
            this.log('prepare').error(e);
            this.log('prepare').info('Done with errors!');
        });
    }
}