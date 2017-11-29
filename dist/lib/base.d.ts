export declare class Base {
    folder: string;
    rootFolder: string;
    private _debug;
    name: string;
    constructor(folder: string, rootFolder?: string);
    getTempFile(): any;
    debug: boolean;
    timeout(ms: number): Promise<{}>;
    log(subName?: string): any;
    commandRunner(commandString: string): Promise<boolean>;
    clear(): Promise<boolean>;
    build(): Promise<boolean>;
    link(): Promise<boolean>;
    linkNpm(): Promise<boolean>;
    linkDist(): Promise<boolean>;
    linkSrc(): Promise<boolean>;
    linkNpmClear(): Promise<boolean>;
    changeVersion(): Promise<boolean>;
    extractTranslate(): Promise<boolean>;
    po2ts(customOptions?: any): Promise<boolean>;
    prepare(): Promise<boolean>;
    makeTsList(customOptions?: any): Promise<boolean>;
}
