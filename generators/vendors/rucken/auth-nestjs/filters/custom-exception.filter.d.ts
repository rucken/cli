import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { JsonWebTokenError } from 'jsonwebtoken';
export declare class CustomExceptionFilter implements ExceptionFilter {
    private response;
    catch(exception: JsonWebTokenError, host: ArgumentsHost): void;
}
