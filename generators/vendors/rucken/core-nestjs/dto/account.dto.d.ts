import { GroupWithPermissionsDto } from '../dto/group-with-permissions.dto';
import { UserDto } from '../dto/user.dto';
export declare class AccountDto extends UserDto {
    groups: GroupWithPermissionsDto[];
}
