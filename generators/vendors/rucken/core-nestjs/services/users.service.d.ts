import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
export declare class UsersService {
    private readonly repository;
    constructor(repository: Repository<User>);
    assertUsernameAndEmail(options: {
        id?: number;
        email: string;
        username: string;
    }): Promise<void>;
    create(options: {
        item: User;
    }): Promise<{
        user: User;
    }>;
    update(options: {
        id: number;
        item: User;
    }): Promise<{
        user: User;
    }>;
    delete(options: {
        id: number;
    }): Promise<{
        user: any;
    }>;
    findById(options: {
        id: number;
    }): Promise<{
        user: User;
    }>;
    findAll(options: {
        curPage: number;
        perPage: number;
        q?: string;
        group?: number;
        sort?: string;
    }): Promise<{
        users: User[];
        meta: {
            perPage: number;
            totalPages: number;
            totalResults: number;
            curPage: number;
        };
    }>;
    findByEmail(options: {
        email: string;
    }): Promise<{
        user: User;
    }>;
    findByUserName(options: {
        username: string;
    }): Promise<{
        user: User;
    }>;
}
