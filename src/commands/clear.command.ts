import { App } from '../lib/app';
import { Apps } from '../lib/apps';
import { Lib } from '../lib/lib';
import { Libs } from '../lib/libs';
import { BaseCommand } from './base.command';

export class ClearCommand extends BaseCommand {
    constructor(public action: any) {
        super(action);
    }
    processLibs(folders: string[], rootFolder: string) {
        this.log('clear').info('Clear all libs on ' + this.rootFolder);
        const libs = new Libs(folders, rootFolder);
        libs.debug = this.debug;
        libs.clear().then((result: boolean) => {
            this.log('clear').info('Done!');
        }).catch((e:any) => {
            this.log('clear').error(e);
            this.log('clear').info('Done with errors!');
        });
    }
    processLib(folder: string, rootFolder: string) {
        this.log('clear').info('Clear lib ' + folder + ' on ' + rootFolder);
        const lib = new Lib(folder, rootFolder);
        lib.debug = this.debug;
        lib.clear().then((result: boolean) => {
            this.log('clear').info('Done!');
        }).catch((e:any) => {
            this.log('clear').error(e);
            this.log('clear').info('Done with errors!');
        });
    }
    processApps(folders: string[], rootFolder: string) {
        this.log('clear').info('Clear all apps on ' + rootFolder);
        const apps = new Apps(folders, rootFolder);
        apps.debug = this.debug;
        apps.clear().then((result: boolean) => {
            this.log('clear').info('Done!');
        }).catch((e:any) => {
            this.log('clear').error(e);
            this.log('clear').info('Done with errors!');
        });
    }
    processApp(folder: string, rootFolder: string) {
        this.log('clear').info('Clear app ' + this.action.parent.app + ' on ' + rootFolder);
        const app = new App(folder, rootFolder);
        app.debug = this.debug;
        app.clear().then((result: boolean) => {
            this.log('clear').info('Done!');
        }).catch((e:any) => {
            this.log('clear').error(e);
            this.log('clear').info('Done with errors!');
        });
    }
}