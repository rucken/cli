import * as inflection from 'inflection';
import * as _ from 'lodash';
import * as path from 'path';

import { Base } from '../lib/base';
import { Project } from '../lib/project';


export class GridGenerator extends Base {

    name = 'grid';

    constructor(public rootFolder?: string) {
        super(null, rootFolder);
    }
    async proccess(customOptions?: {
        entityName: string,
        project: Project,
        appName: string,
        pkField: string,
        fields: string,
        dateFields: string,
        coreLib: string,
        platformLib: string,
        coreFolder: string,
        platformFolder: string
    }) {
        let rootFolder = path.resolve(this.rootFolder);
        let entityName = '';
        let appName =
            (customOptions && customOptions.project.appsConfigs[0] && customOptions &&
                customOptions.project.appsConfigs[0].name) ?
                customOptions && customOptions.project.appsConfigs[0].name : 'app';
        let coreLib =
            (customOptions && customOptions.project.libsConfigs[0] && customOptions &&
                customOptions.project.libsConfigs[0].shortName) ?
                customOptions && customOptions.project.libsConfigs[0].shortName : 'core';
        let platformLib =
            (customOptions && customOptions.project.libsConfigs[1] && customOptions &&
                customOptions.project.libsConfigs[1].shortName) ?
                customOptions && customOptions.project.libsConfigs[1].shortName : 'web';
        let coreFolder =
            (customOptions && customOptions.project.libsConfigs[0] && customOptions &&
                customOptions.project.libsConfigs[0].name) ?
                customOptions && customOptions.project.libsConfigs[0].name : 'core';
        let platformFolder =
            (customOptions && customOptions.project.libsConfigs[1] && customOptions &&
                customOptions.project.libsConfigs[1].name) ?
                customOptions && customOptions.project.libsConfigs[1].name : 'web';
        let pkField: string = 'id';
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
        if (customOptions && customOptions.entityName) {
            entityName = customOptions.entityName;
        }
        if (customOptions && customOptions.appName) {
            appName = customOptions.appName;
        }
        if (customOptions && customOptions.coreLib) {
            coreLib = customOptions.coreLib;
        }
        if (customOptions && customOptions.platformLib) {
            platformLib = customOptions.platformLib;
        }
        if (customOptions && customOptions.pkField) {
            pkField = customOptions.pkField;
        }
        if (customOptions && customOptions.fields) {
            fields = customOptions.fields.split(',').map(word => word.trim());
        }
        if (customOptions && customOptions.dateFields) {
            dateFields = customOptions.dateFields.split(',').map(word => word.trim());
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
                            'kebab': _.kebabCase(inflection.pluralize(entityName)),
                            'camel': _.upperFirst(_.camelCase(inflection.pluralize(entityName))),
                            'lower': {
                                'camel': _.camelCase(inflection.pluralize(entityName))
                            },
                            'caption': _.upperFirst(_.words(inflection.pluralize(entityName)).join(' ')),
                            'snake': _.snakeCase(inflection.pluralize(entityName))
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
                            'name': pkField
                        }
                    }
                }
            }
        );
        return await this.srcgen(
            rootFolder,
            'generatorGrid',
            'grid.select.input.modal',
            options,
            rootFolder
        );
    }
}