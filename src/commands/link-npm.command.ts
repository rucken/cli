import { App } from '../lib/app';
import { Apps } from '../lib/apps';
import { Lib } from '../lib/lib';
import { Libs } from '../lib/libs';
import { BaseCommand } from './base.command';

export class LinkNpmCommand extends BaseCommand {
    constructor(public action: any) {
        super(action);
    }
    processLibs(folders: string[], rootFolder: string) {
        this.log.info('Npm lnk all libs on ' + this.rootFolder);
        const libs = new Libs(folders, rootFolder);
        libs.debug = this.debug;
        libs.linkNpm().then((result: boolean) => {
            this.log.info('Done!');
        }).catch((e:any) => {
            this.log.error(e);
            this.log.info('Done with errors!');
        });
    }
    processLib(folder: string, rootFolder: string) {
        this.log.info('Npm lnk lib ' + folder + ' on ' + rootFolder);
        const lib = new Lib(folder, rootFolder);
        lib.debug = this.debug;
        lib.linkNpm().then((result: boolean) => {
            this.log.info('Done!');
        }).catch((e:any) => {
            this.log.error(e);
            this.log.info('Done with errors!');
        });
    }
    processApps(folders: string[], rootFolder: string) {
        this.log.info('Npm lnk all apps on ' + rootFolder);
        const apps = new Apps(folders, rootFolder);
        apps.debug = this.debug;
        apps.linkNpm().then((result: boolean) => {
            this.log.info('Done!');
        }).catch((e:any) => {
            this.log.error(e);
            this.log.info('Done with errors!');
        });
    }
    processApp(folder: string, rootFolder: string) {
        this.log.info('Npm lnk app ' + this.action.parent.app + ' on ' + rootFolder);
        const app = new App(folder, rootFolder);
        app.debug = this.debug;
        app.linkNpm().then((result: boolean) => {
            this.log.info('Done!');
        }).catch((e:any) => {
            this.log.error(e);
            this.log.info('Done with errors!');
        });
    }
}