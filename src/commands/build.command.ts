import { App } from '../lib/app';
import { Apps } from '../lib/apps';
import { Lib } from '../lib/lib';
import { Libs } from '../lib/libs';
import { BaseCommand } from './base.command';

export class BuildCommand extends BaseCommand {
    constructor(public options: any) {
        super(options);
    }
    async processLibs(options: any) {
        this.log('build').info('Build all libs on ' + this.rootFolder);
        const libs = new Libs(options.folders, options.rootFolder);
        libs.debug = this.debug;
        const result = false;
        return await new Promise<boolean>((resolve: any) =>
            libs.build(this.options).then((result: boolean) => {
                this.log('build').info('Done!');
                resolve(true);
            }).catch((e: any) => {
                this.log('build').error(e);
                this.log('build').info('Done with errors!');
                resolve(false);
            })
        );
    }
    async processLib(options?: any) {
        this.log('build').info('Build lib ' + options.folder + ' on ' + options.rootFolder);
        const lib = new Lib(options.folder, options.rootFolder);
        lib.debug = this.debug;
        return await new Promise<boolean>((resolve: any) =>
            lib.build(this.options).then((result: boolean) => {
                this.log('build').info('Done!');
                resolve(true);
            }).catch((e: any) => {
                this.log('build').error(e);
                this.log('build').info('Done with errors!');
                resolve(false);
            })
        );
    }
    async processApps(options: any) {
        this.log('build').info('Build all apps on ' + options.rootFolder);
        const apps = new Apps(options.folders, options.rootFolder);
        apps.debug = this.debug;
        return await new Promise<boolean>((resolve: any) =>
            apps.build(this.options).then((result: boolean) => {
                this.log('build').info('Done!');
                resolve(true);
            }).catch((e: any) => {
                this.log('build').error(e);
                this.log('build').info('Done with errors!');
                resolve(false);
            })
        );
    }
    async processApp(options?: any) {
        this.log('build').info('Build app ' + this.options.app + ' on ' + options.rootFolder);
        const app = new App(options.folder, options.rootFolder);
        app.debug = this.debug;
        return await new Promise<boolean>((resolve: any) =>
            app.build(this.options).then((result: boolean) => {
                this.log('build').info('Done!');
                resolve(true);
            }).catch((e: any) => {
                this.log('build').error(e);
                this.log('build').info('Done with errors!');
                resolve(false);
            })
        );
    }
}