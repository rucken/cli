import { Repository } from 'typeorm';
import { ContentType } from '../entities/content-type.entity';
export declare class ContentTypesService {
    private readonly repository;
    constructor(repository: Repository<ContentType>);
    create(options: {
        item: ContentType;
    }): Promise<{
        contentType: ContentType;
    }>;
    update(options: {
        id: number;
        item: ContentType;
    }): Promise<{
        contentType: ContentType;
    }>;
    delete(options: {
        id: number;
    }): Promise<{
        contentType: any;
    }>;
    findById(options: {
        id: number;
    }): Promise<{
        contentType: ContentType;
    }>;
    findAll(options: {
        curPage: number;
        perPage: number;
        q?: string;
        sort?: string;
    }): Promise<{
        contentTypes: ContentType[];
        meta: {
            perPage: number;
            totalPages: number;
            totalResults: number;
            curPage: number;
        };
    }>;
}
