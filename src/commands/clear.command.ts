import { App } from '../lib/app';
import { Apps } from '../lib/apps';
import { Lib } from '../lib/lib';
import { Libs } from '../lib/libs';
import { BaseCommand } from './base.command';

export class ClearCommand extends BaseCommand {
    constructor(public options: any) {
        super(options);
    }
    async processLibs(folders: string[], rootFolder: string) {
        this.log('clear').info('Clear all libs on ' + this.rootFolder);
        const libs = new Libs(folders, rootFolder);
        libs.debug = this.debug;
        return await new Promise<boolean>((resolve: any) =>
            libs.clear(this.options).then((result: boolean) => {
                this.log('clear').info('Done!');
                resolve(true);
            }).catch((e: any) => {
                this.log('clear').error(e);
                this.log('clear').info('Done with errors!');
                resolve(false);
            })
        );
    }
    async processLib(folder: string, rootFolder: string) {
        this.log('clear').info('Clear lib ' + folder + ' on ' + rootFolder);
        const lib = new Lib(folder, rootFolder);
        lib.debug = this.debug;
        return await new Promise<boolean>((resolve: any) =>
            lib.clear(this.options).then((result: boolean) => {
                this.log('clear').info('Done!');
                resolve(true);
            }).catch((e: any) => {
                this.log('clear').error(e);
                this.log('clear').info('Done with errors!');
                resolve(false);
            })
        );
    }
    async processApps(folders: string[], rootFolder: string) {
        this.log('clear').info('Clear all apps on ' + rootFolder);
        const apps = new Apps(folders, rootFolder);
        apps.debug = this.debug;
        return await new Promise<boolean>((resolve: any) =>
            apps.clear(this.options).then((result: boolean) => {
                this.log('clear').info('Done!');
                resolve(true);
            }).catch((e: any) => {
                this.log('clear').error(e);
                this.log('clear').info('Done with errors!');
                resolve(false);
            })
        );
    }
    async processApp(folder: string, rootFolder: string) {
        this.log('clear').info('Clear app ' + this.options.app + ' on ' + rootFolder);
        const app = new App(folder, rootFolder);
        app.debug = this.debug;
        return await new Promise<boolean>((resolve: any) =>
            app.clear(this.options).then((result: boolean) => {
                this.log('clear').info('Done!');
                resolve(true);
            }).catch((e: any) => {
                this.log('clear').error(e);
                this.log('clear').info('Done with errors!');
                resolve(false);
            })
        );
    }
}