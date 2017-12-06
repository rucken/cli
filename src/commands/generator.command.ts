import { GridGenerator } from '../generators/grid';
import { BaseCommand } from './base.command';

export class GeneratorCommand extends BaseCommand {
    constructor(public options: any) {
        super(options);
    }
    async processGrid() {
        this.log('generator').info('Run generator for ' + this.rootFolder);
        const gen = new GridGenerator(this.rootFolder);
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
                coreFolder: this.options.coreFolder,
                platformFolder: this.options.platformFolder
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