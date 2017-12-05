import * as fsExtra from 'fs-extra';
import * as _ from 'lodash';
import * as path from 'path';

import { Base } from './base';

const inflection = require('inflection');
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
                    lib.shortName = lib.root.split('/')[1];
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
    async generatorGrid(customOptions?: {
        entityName: string,
        appName?: string,
        pkFields?: string,
        fields?: string[],
        dateFields?: string[],
        srcFolder?: string,
        package?: any,
        coreLib?: string,
        platformLib?: string,
        coreFolder?: string,
        platformFolder?: string
    }) {
        let folder = path.resolve(this.folder + '/src');
        let packageData: any = { name: '' };
        let entityName = '';
        let appName = this.appsConfigs[0] && this.appsConfigs[0].name ? this.appsConfigs[0].name : 'app';
        let coreLib = this.libsConfigs[0] && this.libsConfigs[0].shortName ? this.libsConfigs[0].shortName : 'core';
        let platformLib = this.libsConfigs[1] && this.libsConfigs[1].shortName ? this.libsConfigs[1].shortName : 'web';
        let coreFolder = this.libsConfigs[0] && this.libsConfigs[0].name ? this.libsConfigs[0].name : 'core';
        let platformFolder = this.libsConfigs[1] && this.libsConfigs[1].name ? this.libsConfigs[1].name : 'web';
        let pkFields: string = 'id';
        let fields: string[] = [
            'name',
            'title',
            'createdAt',
            'updatedAt'
        ];
        let dateFields: string[] = [
            'createdAt',
            'updatedAt'
        ];
        if (customOptions && customOptions.appName) {
            appName = customOptions.appName;
        }
        if (customOptions && customOptions.srcFolder) {
            folder = customOptions.srcFolder;
        }
        if (customOptions && customOptions.package) {
            packageData = customOptions.package;
        }
        if (customOptions && customOptions.coreLib) {
            coreLib = customOptions.coreLib;
        }
        if (customOptions && customOptions.platformLib) {
            platformLib = customOptions.platformLib;
        }
        if (customOptions && customOptions.pkFields) {
            pkFields = customOptions.pkFields;
        }
        if (customOptions && customOptions.fields) {
            fields = customOptions.fields;
        }
        if (customOptions && customOptions.dateFields) {
            dateFields = customOptions.dateFields;
        }
        const options = _.merge(
            {
                'app': {
                    'name': appName
                },
                'libs': {
                    'core': coreLib,
                    'platform': platformLib,
                    'coreFolder': coreFolder,
                    'platformFolder': platformFolder
                },
                'grid': {
                    'list': {
                        'name': {
                            'kebab': _.kebabCase(inflection(entityName)),
                            'camel': _.upperFirst(_.camelCase(inflection(entityName))),
                            'lower': {
                                'camel': _.camelCase(inflection(entityName))
                            },
                            'caption': _.upperFirst(_.words(inflection(entityName)).join(' ')),
                            'snake': _.snakeCase(inflection(entityName))
                        }
                    },
                    'name': {
                        'kebab': _.kebabCase(entityName),
                        'camel': _.upperFirst(_.camelCase(entityName)),
                        'lower': {
                            'camel': _.camelCase(entityName)
                        },
                        'caption': _.upperFirst(_.words(entityName).join(' ')),
                        'snake': _.snakeCase(entityName)
                    },
                    'item': {
                        'name': {
                            'caption': _.words(entityName).join(' ').toLowerCase()
                        }
                    },
                    'table': {
                        'fields': {
                            'names': fields,
                            'dates': dateFields
                        },
                        'pk': {
                            'name': pkFields
                        }
                    }
                }
            }
        );
        return await this.srcgen(
            folder,
            packageData,
            'generatorGrid',
            'grid.select.input.modal',
            options
        );
    }
}