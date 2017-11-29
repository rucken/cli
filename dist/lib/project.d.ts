import { Base } from './base';
export declare class Project extends Base {
    rootFolder: string;
    name: string;
    agularCliJson: any;
    libsConfigs: any[];
    libsPaths: string[];
    appsConfigs: any[];
    appsPaths: string[];
    constructor(rootFolder?: string);
    init(): void;
    getLibPathByName(name: string): any;
    getAppPathByName(name: string): any;
    getAgularCliJson(angularCliJsonPath?: string): any;
}
