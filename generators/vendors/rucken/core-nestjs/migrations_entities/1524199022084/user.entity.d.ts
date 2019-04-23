import { Group1524199022084 } from './group.entity';
export declare class User1524199022084 {
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
    groups: Group1524199022084[];
    doBeforeInsertion(): void;
    doBeforeUpdate(): void;
    createPassword(password: string): Promise<any>;
    validatePassword(password: string): Promise<any>;
    setPassword(password: string): Promise<this>;
    checkPermissions(permissions: string[]): boolean;
}
