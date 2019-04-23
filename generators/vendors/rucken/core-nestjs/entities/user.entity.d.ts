import { Group } from '../entities/group.entity';
export declare class User {
    id: number;
    password: string;
    lastLogin: Date;
    isSuperuser: boolean;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    isStaff: boolean;
    isActive: boolean;
    dateJoined: Date;
    dateOfBirth: Date;
    groups: Group[];
    doBeforeInsertion(): void;
    doBeforeUpdate(): void;
    createPassword(password: string): Promise<any>;
    validatePassword(password: string): Promise<any>;
    setPassword(password: string): Promise<this>;
    checkPermissions(permissions: string[]): boolean;
}
