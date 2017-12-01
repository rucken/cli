import { App } from '../lib/app';
import { Apps } from '../lib/apps';
import { Lib } from '../lib/lib';
import { Libs } from '../lib/libs';
import { BaseCommand } from './base.command';

export class ClearCommand extends BaseCommand {
    constructor(public options: any) {
        super(options);
    }
    async processLibs(options: any) {
        this.log('clear').info('Clear all libs on ' + this.rootFolder);
        const libs = new Libs(options.folders, options.rootFolder);
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
    async processLib(options?: any) {
        this.log('clear').info('Clear lib ' + options.folder + ' on ' + options.rootFolder);
        const lib = new Lib(options.folder, options.rootFolder);
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
    async processApps(options: any) {
        this.log('clear').info('Clear all apps on ' + options.rootFolder);
        const apps = new Apps(options.folders, options.rootFolder);
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
    async processApp(options?: any) {
        this.log('clear').info('Clear app ' + this.options.app + ' on ' + options.rootFolder);
        const app = new App(options.folder, options.rootFolder);
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