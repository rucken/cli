import { GroupDto } from '../dto/group.dto';
export declare class UserDto {
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
    groups: GroupDto[];
}
