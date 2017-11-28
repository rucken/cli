import { Base } from './base';

export class App extends Base {
    name='app';
    constructor(public folder: string, public rootFolder?: string) {
        super(folder, rootFolder)
    }    
}