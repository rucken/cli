import * as _ from 'lodash';
import * as path from 'path';

import { Base } from '../lib/base';
import { Project } from '../lib/project';


export class PageGenerator extends Base {

    name = 'page';

    constructor(public rootFolder?: string) {
        super(null, rootFolder);
    }
    async proccess(customOptions?: {
        project: Project,
        pageName: string,
        appName: string,
        appFolder: string
    }) {
        let rootFolder = path.resolve(this.rootFolder);
        let pageName = '';
        let appName =
            (customOptions && customOptions.project.appsConfigs[0] && customOptions &&
                customOptions.project.appsConfigs[0].name) ?
                customOptions && customOptions.project.appsConfigs[0].name : 'app';
        let appFolder =
            (customOptions && customOptions.project.appsConfigs[0] && customOptions &&
                customOptions.project.appsConfigs[0].localPath) ?
                customOptions && customOptions.project.appsConfigs[0].localPath : 'app';
        if (customOptions && customOptions.pageName) {
            pageName = customOptions.pageName;
        }
        if (customOptions && customOptions.appName) {
            appName = customOptions.appName;
        }
        if (customOptions && customOptions.appFolder) {
            appFolder = customOptions.appFolder;
        }
        const options = _.merge(
            {
                'app': {
                    'name': appName,
                    'folder': appFolder
                },
                'page': {
                    'name': _.kebabCase(pageName),
                    'classPrefix': _.upperFirst(_.camelCase(pageName)),
                    'title': _.upperFirst(_.words(pageName).join(' '))
                }
            }
        );
        return await this.srcgen(
            rootFolder,
            'generatorPage',
            'empty.page',
            options,
            rootFolder
        );
    }
}