import { DynamicModule, Module, Provider } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configs } from './configs';
import { controllers } from './controllers';
import { entities } from './entities';
import { services } from './services';
import { CoreModule } from '@demo/core-nestjs';

@Module({
  imports: [TypeOrmModule.forFeature(entities), CoreModule.forFeature()],
  controllers: [...controllers],
  providers: [...configs, ...services],
  exports: [...configs, ...services]
})
export class DemoModule {
  static forFeature(): DynamicModule {
    return {
      module: DemoModule,
      providers: [...services],
      exports: [...configs, ...services]
    };
  }
  static forRoot(options: { providers: Provider[] }): DynamicModule {
    return {
      module: DemoModule,
      imports: [TypeOrmModule.forFeature(entities), CoreModule.forFeature()],
      controllers: [...controllers],
      providers: [...configs, ...options.providers, ...services],
      exports: [...configs, ...services]
    };
  }
}
