import { DynamicModule, Provider } from '@nestjs/common';
export declare class RuckenCoreModule {
    static forFeature(options?: {
        providers: Provider[];
    }): DynamicModule;
    static forRoot(options?: {
        providers: Provider[];
    }): DynamicModule;
}
