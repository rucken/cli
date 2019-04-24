import { InCreateUserDto } from '../dto/in-create-user.dto';
import { InUserDto } from '../dto/in-user.dto';
import { OutUserDto } from '../dto/out-user.dto';
import { OutUsersDto } from '../dto/out-users.dto';
import { ICoreConfig } from '../interfaces/core-config.interface';
import { UsersService } from '../services/users.service';
export declare class UsersController {
    private readonly coreConfig;
    private readonly service;
    constructor(coreConfig: ICoreConfig, service: UsersService);
    create(dto: InCreateUserDto): Promise<OutUserDto>;
    update(id: any, dto: InUserDto): Promise<OutUserDto>;
    delete(id: any): Promise<OutUserDto>;
    findById(id: any): Promise<OutUserDto>;
    findAll(curPage: any, perPage: any, q: any, group: any, sort: any): Promise<OutUsersDto>;
}
