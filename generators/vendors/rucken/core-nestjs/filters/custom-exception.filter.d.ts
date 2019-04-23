import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
import { CustomValidationError } from '../exceptions/custom-validation.error';
import { ICoreConfig } from '../interfaces/core-config.interface';
export declare class CustomExceptionFilter implements ExceptionFilter {
    private readonly coreConfig;
    constructor(coreConfig: ICoreConfig);
    private response;
    catch(exception: CustomValidationError | SyntaxError | Error | HttpException, host: ArgumentsHost): void;
}
