import * as fsExtra from 'fs-extra';
import * as _ from 'lodash';
import * as path from 'path';

import { Base } from './base';

export class Project extends Base {

    name = 'project';
    agularCliJson: any;
    libsConfigs: any[];
    libsPaths: string[];
    appsConfigs: any[];
    appsPaths: string[];

    constructor(public rootFolder?: string) {
        super(rootFolder, rootFolder);
        this.init();
    }
    init() {
        this.agularCliJson = this.getAgularCliJson();
        this.libsConfigs =
            (this.agularCliJson.apps ? this.agularCliJson.apps : []).
                filter((app: any) => app.appRoot === '').
                map((lib: any) => {
                    lib.rootPath = path.resolve(this.rootFolder + '/' + _.trimStart(lib.root, './') + '/../');
                    return lib;
                });
        this.libsPaths = this.libsConfigs.map((lib: any) => lib.rootPath);
        this.appsConfigs =
            (this.agularCliJson.apps ? this.agularCliJson.apps : []).
                filter((app: any) => app.appRoot === undefined).
                map((app: any) => {
                    app.rootPath = path.resolve(this.rootFolder + '/' + _.trimStart(app.root, './') + '/../');
                    return app;
                });
        this.appsPaths = this.appsConfigs.map((app: any) => app.rootPath);
    }
    getLibPathByName(name: string) {
        const libs = this.libsConfigs.filter((item: any) => item.name && item.name === name);
        if (libs.length > 0) {
            return libs[0].rootPath;
        }
        return name;
    }
    getAppPathByName(name: string) {
        const apps = this.appsConfigs.filter((item: any) => item.name && item.name === name);
        if (apps.length > 0) {
            return apps[0].rootPath;
        }
        return name;
    }
    getLibConfigByName(name: string) {
        const libs = this.libsConfigs.filter((item: any) => item.name && item.name === name);
        if (libs.length > 0) {
            return libs[0];
        }
        return { name: '' };
    }
    getAppConfigByName(name: string) {
        const apps = this.appsConfigs.filter((item: any) => item.name && item.name === name);
        if (apps.length > 0) {
            return apps[0];
        }
        return { name: '' };
    }
    getAgularCliJson(angularCliJsonPath?: string) {
        const libs = [];
        let angularCliJson: any = {};
        angularCliJsonPath = path.resolve(angularCliJsonPath ? angularCliJsonPath : `${this.rootFolder}/.angular-cli.json`);
        if (fsExtra.existsSync(angularCliJsonPath)) {
            angularCliJson = fsExtra.readJSONSync(angularCliJsonPath);
        }
        return angularCliJson;
    }
}