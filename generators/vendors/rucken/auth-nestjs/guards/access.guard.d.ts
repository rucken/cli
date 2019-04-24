import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
declare const AccessGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class AccessGuard extends AccessGuard_base {
    private readonly reflector;
    constructor(reflector: Reflector);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
export {};
