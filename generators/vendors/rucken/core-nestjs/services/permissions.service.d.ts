import { Repository } from 'typeorm';
import { Permission } from '../entities/permission.entity';
export declare class PermissionsService {
    private readonly repository;
    constructor(repository: Repository<Permission>);
    create(options: {
        item: Permission;
    }): Promise<{
        permission: Permission;
    }>;
    update(options: {
        id: number;
        item: Permission;
    }): Promise<{
        permission: Permission;
    }>;
    delete(options: {
        id: number;
    }): Promise<{
        permission: any;
    }>;
    findById(options: {
        id: number;
    }): Promise<{
        permission: Permission;
    }>;
    findAll(options: {
        curPage: number;
        perPage: number;
        q?: string;
        group?: number;
        contentType?: number;
        sort?: string;
    }): Promise<{
        permissions: Permission[];
        meta: {
            perPage: number;
            totalPages: number;
            totalResults: number;
            curPage: number;
        };
    }>;
}
