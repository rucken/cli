import { AccessGuard } from './access.guard';
export declare const AUTH_APP_GUARDS: {
    provide: string;
    useClass: typeof AccessGuard;
    multi: boolean;
}[];
