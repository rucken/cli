import { InPermissionDto } from '../dto/in-permission.dto';
import { OutPermissionDto } from '../dto/out-permission.dto';
import { OutPermissionsDto } from '../dto/out-permissions.dto';
import { ICoreConfig } from '../interfaces/core-config.interface';
import { PermissionsService } from '../services/permissions.service';
export declare class PermissionsController {
    private readonly coreConfig;
    private readonly service;
    constructor(coreConfig: ICoreConfig, service: PermissionsService);
    create(dto: InPermissionDto): Promise<OutPermissionDto>;
    update(id: any, dto: InPermissionDto): Promise<OutPermissionDto>;
    delete(id: any): Promise<OutPermissionDto>;
    findById(id: any): Promise<OutPermissionDto>;
    findAll(curPage: any, perPage: any, q: any, group: any, contentType: any, sort: any): Promise<OutPermissionsDto>;
}
