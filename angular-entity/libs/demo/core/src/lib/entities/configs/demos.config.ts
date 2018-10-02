import { Injectable } from '@angular/core';
import { plainToClass } from 'class-transformer';
import { IRestProviderOptions, PaginationMeta, ProviderActionEnum } from 'ngx-repository';
import { Demo } from '../models/demo';

export const defaultDemosConfig: IRestProviderOptions <Demo> = {
  name: 'demo',
  pluralName: 'demos',
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
          return plainToClass(Demo, data.body.demos);
        } else {
          return plainToClass(Demo, data.body.demo);
        }
      }
    },
    responsePaginationMeta: (data: any, action: ProviderActionEnum): PaginationMeta => {
      return { totalResults: data.body.meta.totalResults, perPage: undefined };
    }
  },
  restOptions: {
    limitQueryParam: 'per_page',
    pageQueryParam: 'cur_page',
    searchTextQueryParam: 'q'
  }
};
export const DEMOS_CONFIG_TOKEN = 'DemosConfig';
