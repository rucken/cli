import { Injectable } from '@angular/core';
import { plainToClass } from 'class-transformer';
import { IRestProviderOptions, PaginationMeta, ProviderActionEnum } from 'ngx-repository';
import { <%=entity.name.camel%> } from '../models/<%=entity.name.kebab%>';

@Injectable()
export class <%=entity.list.name.camel%>Config implements IRestProviderOptions<Permission> {
  name = '<%=entity.name.snake%>';
  pluralName = '<%=entity.list.name.snake%>';
  autoload = true;
  paginationMeta = {
    perPage: 5
  };
  actionOptions = {
    responseData: (data: any, action: ProviderActionEnum) => {
      if (action === ProviderActionEnum.Delete) {
        return true;
      } else {
        if (action === ProviderActionEnum.LoadAll) {
          return plainToClass(<%=entity.name.camel%>, data.body.<%=entity.list.name.lower.camel%>);
        } else {
          return plainToClass(<%=entity.name.camel%>, data.body.<%=entity.name.lower.camel%>);
        }
      }
    },
    responsePaginationMeta: (data: any, action: ProviderActionEnum): PaginationMeta => {
      return { totalResults: data.body.meta.totalResults, perPage: undefined };
    }
  };
  restOptions = {
    limitQueryParam: 'per_page',
    pageQueryParam: 'cur_page',
    searchTextQueryParam: 'q'
  };
  constructor() { }
}
