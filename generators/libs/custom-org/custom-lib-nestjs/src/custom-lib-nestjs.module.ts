import { DynamicModule, Module, Provider } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RuckenCoreModule } from "@rucken/core-nestjs";
import { CUSTOM_LIB_NESTJS_CONTROLLERS } from "./controllers";
import { CUSTOM_LIB_NESTJS_ENTITIES } from "./entities";
import { CUSTOM_LIB_NESTJS_SERVICES } from "./services";

@Module({})
export class CustomOrgCustomLibNestjsModule {
  static forFeature(options: { providers: Provider[] }): DynamicModule {
    return {
      module: CustomOrgCustomLibNestjsModule,
      imports: [
        RuckenCoreModule.forFeature(options),
        TypeOrmModule.forFeature(CUSTOM_LIB_NESTJS_ENTITIES)
      ],
      providers: [...options.providers, ...CUSTOM_LIB_NESTJS_SERVICES],
      exports: [...CUSTOM_LIB_NESTJS_SERVICES]
    };
  }
  static forRoot(options: { providers: Provider[] }): DynamicModule {
    return {
      module: CustomOrgCustomLibNestjsModule,
      imports: [
        RuckenCoreModule.forFeature(options),
        TypeOrmModule.forFeature(CUSTOM_LIB_NESTJS_ENTITIES)
      ],
      controllers: [...CUSTOM_LIB_NESTJS_CONTROLLERS],
      providers: [...options.providers, ...CUSTOM_LIB_NESTJS_SERVICES],
      exports: [...CUSTOM_LIB_NESTJS_SERVICES]
    };
  }
}
