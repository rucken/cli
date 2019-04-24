import { DynamicModule, Provider } from "@nestjs/common";
export declare class CustomOrgCustomLibNestjsModule {
    static forFeature(options: {
        providers: Provider[];
    }): DynamicModule;
    static forRoot(options: {
        providers: Provider[];
    }): DynamicModule;
}
