import { BaseCommand } from './base.command';
export declare class LinkCommand extends BaseCommand {
    action: any;
    constructor(action: any);
    processLibs(folders: string[], rootFolder: string): void;
    processLib(folder: string, rootFolder: string): void;
    processApps(folders: string[], rootFolder: string): void;
    processApp(folder: string, rootFolder: string): void;
}
