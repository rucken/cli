import { DynamicModule, MiddlewareConsumer, NestModule, Provider } from '@nestjs/common';
export declare class RuckenAuthModule implements NestModule {
    static forFeature(options?: {
        providers: Provider[];
    }): DynamicModule;
    static forRoot(options?: {
        providers: Provider[];
    }): DynamicModule;
    configure(consumer: MiddlewareConsumer): void;
}
