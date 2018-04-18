import { FrameGenerator } from '../generators/frame';
import { EntityGenerator } from '../generators/entity';
import { PageGenerator } from '../generators/page';
import { PageAndFrameGenerator } from '../generators/page-and-frame';
import { BaseCommand } from './base.command';
import { AppEmptyGenerator } from '../generators/app-empty';

export class GeneratorCommand extends BaseCommand {
    constructor(public options: any) {
        super(options);
    }
    async processEntity() {
        this.log('generator').info('Run generator for ' + this.rootFolder);
        const gen = new EntityGenerator(this.rootFolder);
        gen.debug = this.debug;
        const result = false;
        return await new Promise<boolean>((resolve: any) =>
            gen.proccess({
                entityName: this.options.entityName,
                project: this.project,
                appName: this.options.appName,
                pkField: this.options.pkField,
                fields: this.options.fields,
                dateFields: this.options.dateFields,
                coreLib: this.options.coreLib,
                platformLib: this.options.platformLib,
                appFolder: this.options.appFolder,
                coreFolder: this.options.coreFolder,
                platformFolder: this.options.platformFolder,
                template: this.options.template
            }).then((result: boolean) => {
                this.log('generator').info('Done!');
                resolve(true);
            }).catch((e: any) => {
                this.log('generator').error(e);
                this.log('generator').info('Done with errors!');
                resolve(false);
            })
        );
    }
    async processPage() {
        this.log('generator').info('Run generator for ' + this.rootFolder);
        const gen = new PageGenerator(this.rootFolder);
        gen.debug = this.debug;
        const result = false;
        return await new Promise<boolean>((resolve: any) =>
            gen.proccess({
                pageName: this.options.pageName,
                project: this.project,
                appName: this.options.appName,
                appFolder: this.options.appFolder,
                template: this.options.template
            }).then((result: boolean) => {
                this.log('generator').info('Done!');
                resolve(true);
            }).catch((e: any) => {
                this.log('generator').error(e);
                this.log('generator').info('Done with errors!');
                resolve(false);
            })
        );
    }
    async processPageAndFrame() {
        this.log('generator').info('Run generator for ' + this.rootFolder);
        const gen = new PageAndFrameGenerator(this.rootFolder);
        gen.debug = this.debug;
        const result = false;
        return await new Promise<boolean>((resolve: any) =>
            gen.proccess({
                pageName: this.options.pageName,
                frameName: this.options.frameName,
                project: this.project,
                appName: this.options.appName,
                appFolder: this.options.appFolder,
                template: this.options.template
            }).then((result: boolean) => {
                this.log('generator').info('Done!');
                resolve(true);
            }).catch((e: any) => {
                this.log('generator').error(e);
                this.log('generator').info('Done with errors!');
                resolve(false);
            })
        );
    }
    async processFrame() {
        this.log('generator').info('Run generator for ' + this.rootFolder);
        const gen = new FrameGenerator(this.rootFolder);
        gen.debug = this.debug;
        const result = false;
        return await new Promise<boolean>((resolve: any) =>
            gen.proccess({
                pageName: this.options.pageName,
                frameName: this.options.frameName,
                project: this.project,
                appName: this.options.appName,
                appFolder: this.options.appFolder,
                template: this.options.template
            }).then((result: boolean) => {
                this.log('generator').info('Done!');
                resolve(true);
            }).catch((e: any) => {
                this.log('generator').error(e);
                this.log('generator').info('Done with errors!');
                resolve(false);
            })
        );
    }
    async processAppEmpty() {
        this.log('generator').info('Run generator for ' + this.rootFolder);
        const gen = new AppEmptyGenerator(this.rootFolder);
        gen.debug = this.debug;
        const result = false;
        return await new Promise<boolean>((resolve: any) =>
            gen.proccess({
                project: this.project,
                appName: this.options.appName,
                template: this.options.template
            }).then((result: boolean) => {
                this.log('generator').info('Done!');
                resolve(true);
            }).catch((e: any) => {
                this.log('generator').error(e);
                this.log('generator').info('Done with errors!');
                resolve(false);
            })
        );
    }
}