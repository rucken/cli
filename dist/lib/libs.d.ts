import { Base } from './base';
export declare class Libs extends Base {
    folders: string[];
    rootFolder: string;
    name: string;
    constructor(folders: string[], rootFolder: string);
    clear(): Promise<boolean>;
    build(): Promise<boolean>;
    link(): Promise<boolean>;
    linkNpm(): Promise<boolean>;
    changeVersion(): Promise<boolean>;
    extractTranslate(): Promise<boolean>;
    po2ts(customOptions?: any): Promise<boolean>;
    prepare(): Promise<boolean>;
    makeTsList(customOptions?: any): Promise<boolean>;
}
