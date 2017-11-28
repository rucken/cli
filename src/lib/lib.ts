import { Base } from './base';

export class Lib extends Base {

    name='lib';
    
    constructor(public folder: string, public rootFolder?: string) {
        super(folder, rootFolder)
    }    
}