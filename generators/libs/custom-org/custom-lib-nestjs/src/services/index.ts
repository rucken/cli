import { Provider } from "@nestjs/common";
import { CustomEntitiesService } from "./custom-entities.service";

export const CUSTOM_LIB_NESTJS_SERVICES: Provider[] = [CustomEntitiesService];
