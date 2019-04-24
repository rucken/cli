import { PermissionDto } from '../dto/permission.dto';
export declare class GroupWithPermissionsDto {
    id: number;
    name: string;
    title: string;
    permissions: PermissionDto[];
}
