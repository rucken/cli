import * as _ from 'lodash';
import * as path from 'path';

import { Base } from '../lib/base';
import { Project } from '../lib/project';


export class AppEmptyGenerator extends Base {

    name = 'app-empty';

    constructor(public rootFolder?: string) {
        super(null, rootFolder);
    }
    async proccess(customOptions?: {
        project: Project,
        appName: string,
        template: string
    }) {
        let rootFolder = path.resolve(this.rootFolder);
        let template: string = 'web-app-empty';
        let appName =
            (customOptions && customOptions.project.appsConfigs[0] && customOptions &&
                customOptions.project.appsConfigs[0].name) ?
                customOptions && customOptions.project.appsConfigs[0].name : 'app';
        if (customOptions && customOptions.template) {
            template = customOptions.template;
        }
        if (customOptions && customOptions.appName) {
            appName = customOptions.appName;
        }
        const options = _.merge(
            {
                'app': {
                    'name': _.kebabCase(appName),
                    'classPrefix': _.upperFirst(_.camelCase(appName)),
                    'title': _.upperFirst(_.words(appName).join(' '))
                },
                'spec': 'spec',
                'gitignore': ''
            }
        );
        return await this.srcgen(
            rootFolder,
            'generatorAppEmpty',
            template,
            options,
            path.resolve(rootFolder, _.kebabCase(appName))
        );
    }
}