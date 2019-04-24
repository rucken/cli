import { User } from "@rucken/core-nestjs";
import { Repository } from "typeorm";
import { CustomEntity } from "../entities/custom-entity.entity";
export declare class CustomEntitiesService {
    private readonly repository;
    constructor(repository: Repository<CustomEntity>);
    create(options: {
        item: CustomEntity;
    }, user?: User): Promise<{
        customEntity: CustomEntity;
    }>;
    update(options: {
        id: number;
        item: CustomEntity;
    }, user?: User): Promise<{
        customEntity: CustomEntity;
    }>;
    delete(options: {
        id: number;
    }, user?: User): Promise<{
        customEntity: any;
    }>;
    findById(options: {
        id: number;
    }, user?: User): Promise<{
        customEntity: CustomEntity;
    }>;
    findAll(options: {
        curPage: number;
        perPage: number;
        q?: string;
        sort?: string;
    }, user?: User): Promise<{
        customEntities: CustomEntity[];
        meta: {
            perPage: number;
            totalPages: number;
            totalResults: number;
            curPage: number;
        };
    }>;
}
