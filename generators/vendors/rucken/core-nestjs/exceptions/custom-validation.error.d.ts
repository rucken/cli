import { ValidationError } from 'class-validator';
export declare class CustomValidationError extends Error {
    errors: ValidationError[];
    constructor(errors: ValidationError[]);
}
