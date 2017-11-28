import { App } from '../lib/app';
import { Apps } from '../lib/apps';
import { Lib } from '../lib/lib';
import { Libs } from '../lib/libs';
import { BaseCommand } from './base.command';

export class LinkCommand extends BaseCommand {
    constructor(public action: any) {
        super(action);
    }
    processLibs(folders: string[], rootFolder: string) {
        this.log.info('Link all libs on ' + this.rootFolder);
        const libs = new Libs(folders, rootFolder);
        libs.debug = this.debug;
        libs.link().then((result: boolean) => {
            this.log.info('Done!');
        }).catch((e:any) => {
            this.log.error(e);
            this.log.info('Done with errors!');
        });
    }
    processLib(folder: string, rootFolder: string) {
        this.log.info('Link lib ' + folder + ' on ' + rootFolder);
        const lib = new Lib(folder, rootFolder);
        lib.debug = this.debug;
        lib.link().then((result: boolean) => {
            this.log.info('Done!');
        }).catch((e:any) => {
            this.log.error(e);
            this.log.info('Done with errors!');
        });
    }
    processApps(folders: string[], rootFolder: string) {
        this.log.info('Link all apps on ' + rootFolder);
        const apps = new Apps(folders, rootFolder);
        apps.debug = this.debug;
        apps.link().then((result: boolean) => {
            this.log.info('Done!');
        }).catch((e:any) => {
            this.log.error(e);
            this.log.info('Done with errors!');
        });
    }
    processApp(folder: string, rootFolder: string) {
        this.log.info('Link app ' + this.action.parent.app + ' on ' + rootFolder);
        const app = new App(folder, rootFolder);
        app.debug = this.debug;
        app.link().then((result: boolean) => {
            this.log.info('Done!');
        }).catch((e:any) => {
            this.log.error(e);
            this.log.info('Done with errors!');
        });
    }
}