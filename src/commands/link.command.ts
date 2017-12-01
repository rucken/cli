import { App } from '../lib/app';
import { Apps } from '../lib/apps';
import { Lib } from '../lib/lib';
import { Libs } from '../lib/libs';
import { BaseCommand } from './base.command';

export class LinkCommand extends BaseCommand {
    constructor(public options: any) {
        super(options);
    }
    async processLibs(options: any) {
        this.log('link').info('Link all libs on ' + this.rootFolder);
        const libs = new Libs(options.folders, options.rootFolder);
        libs.debug = this.debug;
        return await new Promise<boolean>((resolve: any) =>
            libs.link(this.options).then((result: boolean) => {
                this.log('link').info('Done!');
                resolve(true);
            }).catch((e: any) => {
                this.log('link').error(e);
                this.log('link').info('Done with errors!');
                resolve(false);
            })
        );
    }
    async processLib(options?: any) {
        this.log('link').info('Link lib ' + options.folder + ' on ' + options.rootFolder);
        const lib = new Lib(options.folder, options.rootFolder);
        lib.debug = this.debug;
        return await new Promise<boolean>((resolve: any) =>
            lib.link(this.options).then((result: boolean) => {
                this.log('link').info('Done!');
                resolve(true);
            }).catch((e: any) => {
                this.log('link').error(e);
                this.log('link').info('Done with errors!');
                resolve(false);
            })
        );
    }
    async processApps(options: any) {
        this.log('link').info('Link all apps on ' + options.rootFolder);
        const apps = new Apps(options.folders, options.rootFolder);
        apps.debug = this.debug;
        return await new Promise<boolean>((resolve: any) =>
            apps.link(this.options).then((result: boolean) => {
                this.log('link').info('Done!');
                resolve(true);
            }).catch((e: any) => {
                this.log('link').error(e);
                this.log('link').info('Done with errors!');
                resolve(false);
            })
        );
    }
    async processApp(options?: any) {
        this.log('link').info('Link app ' + this.options.app + ' on ' + options.rootFolder);
        const app = new App(options.folder, options.rootFolder);
        app.debug = this.debug;
        return await new Promise<boolean>((resolve: any) =>
            app.link(this.options).then((result: boolean) => {
                this.log('link').info('Done!');
                resolve(true);
            }).catch((e: any) => {
                this.log('link').error(e);
                this.log('link').info('Done with errors!');
                resolve(false);
            })
        );
    }
}