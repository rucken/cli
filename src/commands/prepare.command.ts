import { App } from '../lib/app';
import { Apps } from '../lib/apps';
import { Lib } from '../lib/lib';
import { Libs } from '../lib/libs';
import { BaseCommand } from './base.command';

export class PrepareCommand extends BaseCommand {
    constructor(public options: any) {
        super(options);
    }
    async processLibs(folders: string[], rootFolder: string) {
        this.log('prepare').info('Prepare all libs on ' + this.rootFolder);
        const libs = new Libs(folders, rootFolder);
        libs.debug = this.debug;
        return await new Promise<boolean>((resolve: any) =>
            libs.prepare(this.options).then((result: boolean) => {
                this.log('prepare').info('Done!');
                resolve(true);
            }).catch((e: any) => {
                this.log('prepare').error(e);
                this.log('prepare').info('Done with errors!');
                resolve(false);
            })
        );
    }
    async processLib(folder: string, rootFolder: string) {
        this.log('prepare').info('Prepare lib ' + folder + ' on ' + rootFolder);
        const lib = new Lib(folder, rootFolder);
        lib.debug = this.debug;
        return await new Promise<boolean>((resolve: any) =>
            lib.prepare(this.options).then((result: boolean) => {
                this.log('prepare').info('Done!');
                resolve(true);
            }).catch((e: any) => {
                this.log('prepare').error(e);
                this.log('prepare').info('Done with errors!');
                resolve(false);
            })
        );
    }
    async processApps(folders: string[], rootFolder: string) {
        this.log('prepare').info('Prepare all apps on ' + rootFolder);
        const apps = new Apps(folders, rootFolder);
        apps.debug = this.debug;
        return await new Promise<boolean>((resolve: any) =>
            apps.prepare(this.options).then((result: boolean) => {
                this.log('prepare').info('Done!');
                resolve(true);
            }).catch((e: any) => {
                this.log('prepare').error(e);
                this.log('prepare').info('Done with errors!');
                resolve(false);
            })
        );
    }
    async processApp(folder: string, rootFolder: string) {
        this.log('prepare').info('Prepare app ' + this.options.app + ' on ' + rootFolder);
        const app = new App(folder, rootFolder);
        app.debug = this.debug;
        return await new Promise<boolean>((resolve: any) =>
            app.prepare(this.options).then((result: boolean) => {
                this.log('prepare').info('Done!');
                resolve(true);
            }).catch((e: any) => {
                this.log('prepare').error(e);
                this.log('prepare').info('Done with errors!');
                resolve(false);
            })
        );
    }
}