import { ValidationPipe } from '../pipes/validation.pipe';
export declare const CORE_APP_PIPES: {
    provide: string;
    useClass: typeof ValidationPipe;
    multi: boolean;
}[];
