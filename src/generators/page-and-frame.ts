import * as _ from 'lodash';
import * as path from 'path';

import { Base } from '../lib/base';
import { Project } from '../lib/project';


export class PageAndFrameGenerator extends Base {

    name = 'page+frame';

    constructor(public rootFolder?: string) {
        super(null, rootFolder);
    }
    async proccess(customOptions?: {
        project: Project,
        pageName: string,
        frameName: string,
        appName: string,
        appFolder: string,
        template: string
    }) {
        let rootFolder = path.resolve(this.rootFolder);
        let pageName = '';
        let frameName = '';
        let template: string = 'web-page+frame';
        let appName =
            (customOptions && customOptions.project.appsConfigs[0] && customOptions &&
                customOptions.project.appsConfigs[0].name) ?
                customOptions && customOptions.project.appsConfigs[0].name : 'app';
        let appFolder =
            (customOptions && customOptions.project.appsConfigs[0] && customOptions &&
                customOptions.project.appsConfigs[0].localPath) ?
                customOptions && customOptions.project.appsConfigs[0].localPath : 'app';
        if (customOptions && customOptions.template) {
            template = customOptions.template;
        }
        if (customOptions && customOptions.pageName) {
            pageName = customOptions.pageName;
        }
        if (customOptions && customOptions.frameName) {
            frameName = customOptions.frameName;
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
                    'name': _.kebabCase(appName),
                    'classPrefix': _.upperFirst(_.camelCase(appName)),
                    'title': _.upperFirst(_.words(appName).join(' ')),
                    'folder': appFolder
                },
                'page': {
                    'name': _.kebabCase(pageName),
                    'classPrefix': _.upperFirst(_.camelCase(pageName)),
                    'title': _.upperFirst(_.words(pageName).join(' '))
                },
                'frame': {
                    'name': _.kebabCase(frameName),
                    'classPrefix': _.upperFirst(_.camelCase(frameName)),
                    'title': _.upperFirst(_.words(frameName).join(' '))
                }
            }
        );
        return await this.srcgen(
            rootFolder,
            'generatorPageAndFrame',
            template,
            options,
            rootFolder
        );
    }
}