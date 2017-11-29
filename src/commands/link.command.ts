import { App } from '../lib/app';
import { Apps } from '../lib/apps';
import { Lib } from '../lib/lib';
import { Libs } from '../lib/libs';
import { BaseCommand } from './base.command';

export class LinkCommand extends BaseCommand {
    constructor(public options: any) {
        super(options);
    }
    async processLibs(folders: string[], rootFolder: string) {
        this.log('link').info('Link all libs on ' + this.rootFolder);
        const libs = new Libs(folders, rootFolder);
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
    async processLib(folder: string, rootFolder: string) {
        this.log('link').info('Link lib ' + folder + ' on ' + rootFolder);
        const lib = new Lib(folder, rootFolder);
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
    async processApps(folders: string[], rootFolder: string) {
        this.log('link').info('Link all apps on ' + rootFolder);
        const apps = new Apps(folders, rootFolder);
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
    async processApp(folder: string, rootFolder: string) {
        this.log('link').info('Link app ' + this.options.app + ' on ' + rootFolder);
        const app = new App(folder, rootFolder);
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