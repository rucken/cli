import { User } from '@rucken/core-nestjs';
import { IJwtConfig } from '../interfaces/jwt-config.interface';
import { IJwtPayload } from '../interfaces/jwt-payload.interface';
export declare class TokenService {
    private readonly jwtConfig;
    constructor(jwtConfig: IJwtConfig);
    create(user: User): string;
    validate(token: string): string | object;
    decode(token: string): IJwtPayload;
    removeHeaderPrefix(token: string): string;
    extractTokenFromRequest(request: any): string;
    createSecretKey(user: User): string;
}
