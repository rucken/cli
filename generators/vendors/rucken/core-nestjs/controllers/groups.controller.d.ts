import { InGroupDto } from '../dto/in-group.dto';
import { OutGroupDto } from '../dto/out-group.dto';
import { OutGroupsDto } from '../dto/out-groups.dto';
import { ICoreConfig } from '../interfaces/core-config.interface';
import { GroupsService } from '../services/groups.service';
export declare class GroupsController {
    private readonly coreConfig;
    private readonly service;
    constructor(coreConfig: ICoreConfig, service: GroupsService);
    create(dto: InGroupDto): Promise<OutGroupDto>;
    update(id: any, dto: InGroupDto): Promise<OutGroupDto>;
    delete(id: any): Promise<OutGroupDto>;
    findById(id: any): Promise<OutGroupDto>;
    findAll(curPage: any, perPage: any, q: any, sort: any): Promise<OutGroupsDto>;
}
