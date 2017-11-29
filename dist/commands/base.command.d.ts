import { Base } from '../lib/base';
import { Project } from '../lib/project';
export declare class BaseCommand extends Base {
    action: any;
    project: Project;
    constructor(action: any);
    process(): void;
    processLibs(folders: string[], rootFolder: string): void;
    processLib(folder: string, rootFolder: string): void;
    processApps(folders: string[], rootFolder: string): void;
    processApp(folder: string, rootFolder: string): void;
}
