import { BaseResourceModel, translate } from '@rucken/core';

export class <%=grid.name.camel%> extends BaseResourceModel {
  static titles: any = {
    <%=grid.table.pk.name %>: translate('<%=_.upperFirst(grid.table.pk.name)%>'),
    <%for (var i = 0; i < grid.table.fields.names.length; i++) {%>    <%=grid.table.fields.names[i] + ': translate(\'' + _.upperFirst(grid.table.fields.names[i]) + '\'),\n' %><%}%>
  };
  static dateFields: any = <%=JSON.stringify(grid.table.fields.dates) %>;
  static fields: any = [
  '<%=grid.table.pk.name%>',
  <%for (var i = 0; i < grid.table.fields.names.length; i++) {%>    <%='\'' + grid.table.fields.names[i] + '\',\n' %><%}%>
  ];

<%=grid.table.pk.name %>: <%=grid.table.pk.name === 'id' ? 'number' : 'string' %>;
<%for (var i = 0; i < grid.table.fields.names.length; i++) { if (grid.table.fields.dates.indexOf(grid.table.fields.names[i]) === -1) {%>  <%=grid.table.fields.names[i] + ': string;\n' %><%}else {%>  <%=grid.table.fields.names[i] + ': Date;\n' %><%}}%>
  static meta() {
  const meta: any = <%=grid.name.camel%>;
  return meta;
}
constructor(obj ?: any) {
  super(obj);
}
parse(obj: any) {
  this.parseByFields(obj, <%=grid.name.camel %>.meta());
}
format() {
  const result = this.formatByFields(<%=grid.name.camel %>.meta());
  return result;
}
get asString() {
  return this.pk;
}
}
