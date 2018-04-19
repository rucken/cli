import { IModel } from 'ngx-repository';
import { translate } from '@rucken/core';

export class <%=entity.name.camel%> implements IModel {
  static strings: any = {
    <%=entity.table.pk.name %>: translate('<%=_.upperFirst(entity.table.pk.name)%>'),
    <%for (var i = 0; i < entity.table.fields.names.length; i++) {%>    <%=entity.table.fields.names[i] + ': translate(\'' + _.upperFirst(entity.table.fields.names[i]) + '\'),\n' %><%}%>
  };

<%=entity.table.pk.name %>: <%=entity.table.pk.name === 'id' ? 'number' : 'string' %>;
<%for (var i = 0; i < entity.table.fields.names.length; i++) { if (entity.table.fields.dates.indexOf(entity.table.fields.names[i]) === -1) {%>  <%=entity.table.fields.names[i] + ': string;\n' %><%}else {%>  <%=entity.table.fields.names[i] + ': Date;\n' %><%}}%>
  toString() {
    return this.title;
  }
}
