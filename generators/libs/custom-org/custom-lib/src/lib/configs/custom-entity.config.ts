import { plainToClass } from "class-transformer";
import {
  IRestProviderOptions,
  PaginationMeta,
  ProviderActionEnum
} from "ngx-repository";
import { CustomEntity } from "../models/custom-entity";

export const DEFAULT_CUSTOM_ENTITIES_CONFIG: IRestProviderOptions<
  CustomEntity
> = {
  name: "custom_entity",
  pluralName: "custom_entities",
  autoload: true,
  paginationMeta: {
    perPage: 5
  },
  actionOptions: {
    responseData: (data: any, action: ProviderActionEnum) => {
      if (action === ProviderActionEnum.Delete) {
        return true;
      } else {
        if (action === ProviderActionEnum.LoadAll) {
          return plainToClass(
            CustomEntity,
            data && data.body && data.body.customEntities
          );
        } else {
          return plainToClass(
            CustomEntity,
            data && data.body && data.body.customEntity
          );
        }
      }
    },
    responsePaginationMeta: (
      data: any,
      action: ProviderActionEnum
    ): PaginationMeta => {
      return {
        totalResults:
          data && data.body && data.body.meta && data.body.meta.totalResults,
        perPage: undefined
      };
    }
  },
  restOptions: {
    limitQueryParam: "per_page",
    pageQueryParam: "cur_page",
    searchTextQueryParam: "q"
  }
};
export const CUSTOM_ENTITIES_CONFIG_TOKEN = "CustomEntitiesConfig";
