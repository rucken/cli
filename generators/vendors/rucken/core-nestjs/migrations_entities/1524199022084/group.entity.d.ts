import { Permission1524199022084 } from './permission.entity';
import { User1524199022084 } from './user.entity';
export declare class Group1524199022084 {
    id: number;
    name: string;
    title: string;
    permissions: Permission1524199022084[];
    users: User1524199022084[];
    doBeforeInsertion(): void;
    doBeforeUpdate(): void;
}
