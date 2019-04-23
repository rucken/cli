import { Permission } from '../entities/permission.entity';
export declare class ContentType {
    id: number;
    name: string;
    title: string;
    permissions: Permission[];
    doBeforeInsertion(): void;
    doBeforeUpdate(): void;
}
