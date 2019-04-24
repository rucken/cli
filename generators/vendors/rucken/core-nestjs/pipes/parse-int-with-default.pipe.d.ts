import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class ParseIntWithDefaultPipe implements PipeTransform<string> {
    private readonly defaultValue;
    constructor(defaultValue: number);
    transform(value: string, metadata: ArgumentMetadata): Promise<number>;
}
