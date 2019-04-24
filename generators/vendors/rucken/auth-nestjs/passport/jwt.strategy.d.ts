import { GroupsService, User } from '@rucken/core-nestjs';
import { IJwtPayload } from '../interfaces/jwt-payload.interface';
import { TokenService } from '../services/token.service';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly tokenService;
    private readonly groupsService;
    constructor(tokenService: TokenService, groupsService: GroupsService);
    validate(req: any, payload: IJwtPayload): Promise<User>;
}
export {};
