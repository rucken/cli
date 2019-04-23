import { Permission } from '../entities/permission.entity';
import { User } from '../entities/user.entity';
export declare class Group {
    id: number;
    name: string;
    title: string;
    permissions: Permission[];
    users: User[];
    doBeforeInsertion(): void;
    doBeforeUpdate(): void;
}
