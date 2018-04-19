import { <%=page.classPrefix%>PageComponent } from './<%=page.name%>-page.component';
import { translate } from '@rucken/core';

export const <%=page.classPrefix%>PageRoutes = [{
  path: '',
  component: <%=page.classPrefix%>PageComponent,
  data: {
    name: '<%=page.name%>',
    title: translate('<%=page.title%>'),
    visible: false
  }
}];
