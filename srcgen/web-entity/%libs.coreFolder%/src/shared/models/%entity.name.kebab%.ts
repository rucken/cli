import { IModel } from 'ngx-repository';
import { translate } from '@rucken/core';

export class <%=entity.name.camel%> implements IModel {
  static strings: any = {
    <%=entity.table.pk.name %>: translate('<%=_.upperFirst(entity.table.pk.name)%>'),
    <%for (var i = 0; i < entity.table.fields.names.length; i++) {%>    <%=entity.table.fields.names[i] + ': translate(\'' + _.upperFirst(entity.table.fields.names[i]) + '\'),\n' %><%}%>
    createTitle: translate('Add new <%=entity.item.name.caption%>'),
    viewTitle: translate('<%=entity.name.caption%> #{{id}}'),
    updateTitle: translate('Update <%=entity.item.name.caption%> #{{id}}'),
    deleteTitle: translate('Delete <%=entity.item.name.caption%> #{{id}}'),
    deleteMessage: translate('Do you really want to delete <%=entity.item.name.caption%>?')
  };

<%=entity.table.pk.name %>: <%=entity.table.pk.name === 'id' ? 'number = undefined' : 'string = undefined' %>;
<%for (var i = 0; i < entity.table.fields.names.length; i++) { if (entity.table.fields.dates.indexOf(entity.table.fields.names[i]) === -1) {%>  <%=entity.table.fields.names[i] + ': string = undefined;\n' %><%}else {%>  <%=entity.table.fields.names[i] + ': Date = undefined;\n' %><%}}%>
  toString() {
    return this.title;
  }
}
