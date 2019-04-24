import { Provider } from "@angular/core";
import {
  DEFAULT_CUSTOM_ENTITIES_CONFIG,
  CUSTOM_ENTITIES_CONFIG_TOKEN
} from "./custom-entity.config";

export const ENTITIES_PROVIDERS: Provider[] = [
  {
    provide: CUSTOM_ENTITIES_CONFIG_TOKEN,
    useValue: DEFAULT_CUSTOM_ENTITIES_CONFIG
  }
];
