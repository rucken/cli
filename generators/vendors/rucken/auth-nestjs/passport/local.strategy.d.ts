import { User } from '@rucken/core-nestjs';
import { Strategy } from 'passport-local';
import { AuthService } from '../services/auth.service';
declare const LocalStrategySignIn_base: new (...args: any[]) => typeof Strategy;
export declare class LocalStrategySignIn extends LocalStrategySignIn_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(req: any, email: string, password: string): Promise<User>;
}
declare const LocalStrategySignUp_base: new (...args: any[]) => typeof Strategy;
export declare class LocalStrategySignUp extends LocalStrategySignUp_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(req: any, email: string, password: string): Promise<any>;
}
export {};
