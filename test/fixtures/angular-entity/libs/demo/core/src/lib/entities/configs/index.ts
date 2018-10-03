import { Provider } from '@angular/core';
import { DEMOS_CONFIG_TOKEN, defaultDemosConfig } from './demos.config';


export const entitiesProviders: Provider[] = [
  {
    provide: DEMOS_CONFIG_TOKEN,
    useValue: defaultDemosConfig
  },
];
