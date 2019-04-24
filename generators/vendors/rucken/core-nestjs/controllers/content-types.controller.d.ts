import { InContentTypeDto } from '../dto/in-content-type.dto';
import { OutContentTypeDto } from '../dto/out-content-type.dto';
import { OutContentTypesDto } from '../dto/out-content-types.dto';
import { ICoreConfig } from '../interfaces/core-config.interface';
import { ContentTypesService } from '../services/content-types.service';
export declare class ContentTypesController {
    private readonly coreConfig;
    private readonly service;
    constructor(coreConfig: ICoreConfig, service: ContentTypesService);
    create(dto: InContentTypeDto): Promise<OutContentTypeDto>;
    update(id: any, dto: InContentTypeDto): Promise<OutContentTypeDto>;
    delete(id: any): Promise<OutContentTypeDto>;
    findById(id: any): Promise<OutContentTypeDto>;
    findAll(curPage: any, perPage: any, q: any, sort: any): Promise<OutContentTypesDto>;
}
