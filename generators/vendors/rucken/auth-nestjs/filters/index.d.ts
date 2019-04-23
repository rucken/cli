import { CustomExceptionFilter } from '../filters/custom-exception.filter';
export declare const AUTH_APP_FILTERS: {
    provide: string;
    useClass: typeof CustomExceptionFilter;
    multi: boolean;
}[];
