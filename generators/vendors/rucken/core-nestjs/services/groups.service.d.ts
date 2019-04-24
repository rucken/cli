import { Repository } from 'typeorm';
import { Group } from '../entities/group.entity';
export declare class GroupsService {
    private readonly repository;
    items: Group[];
    constructor(repository: Repository<Group>);
    create(options: {
        item: Group;
    }): Promise<{
        group: Group;
    }>;
    update(options: {
        id: number;
        item: Group;
    }): Promise<{
        group: Group;
    }>;
    delete(options: {
        id: number;
    }): Promise<{
        group: any;
    }>;
    findById(options: {
        id: number;
    }): Promise<{
        group: Group;
    }>;
    findAll(options: {
        curPage: number;
        perPage: number;
        q?: string;
        sort?: string;
    }): Promise<{
        groups: Group[];
        meta: {
            perPage: number;
            totalPages: number;
            totalResults: number;
            curPage: number;
        };
    }>;
    getGroupByName(options: {
        name: string;
    }): Group;
    preloadAll(): Promise<void>;
}
