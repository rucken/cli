import { ICoreConfig } from "@rucken/core-nestjs";
import { InCustomEntityDto } from "../dto/in-custom-entity.dto";
import { OutCustomEntityDto } from "../dto/out-custom-entity.dto";
import { OutCustomEntitiesDto } from "../dto/out-custom-entities.dto";
import { CustomEntitiesService } from "../services/custom-entities.service";
export declare class CustomEntitiesController {
    private readonly coreConfig;
    private readonly service;
    constructor(coreConfig: ICoreConfig, service: CustomEntitiesService);
    create(req: any, dto: InCustomEntityDto): Promise<OutCustomEntityDto>;
    update(req: any, id: any, dto: InCustomEntityDto): Promise<OutCustomEntityDto>;
    delete(req: any, id: any): Promise<OutCustomEntityDto>;
    load(req: any, id: any): Promise<OutCustomEntityDto>;
    findAll(req: any, curPage: any, perPage: any, q: any, sort: any): Promise<OutCustomEntitiesDto>;
}
