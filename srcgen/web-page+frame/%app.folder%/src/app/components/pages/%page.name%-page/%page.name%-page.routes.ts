import { translate } from '@rucken/core';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { <%=page.classPrefix%>PageChildrenRoutes } from './<%=page.name%>-page.children-routes';
import { <%=page.classPrefix%>PageComponent } from './<%=page.name%>-page.component';
import { environment } from '../../../../environments/environment';

export const <%=page.classPrefix%>PageRoutes = [{
  path: '',
  component: <%=page.classPrefix%>PageComponent,
  data: {
    name: '<%=page.name%>',
    title: translate('<%=page.title%>'),
    permissions: {
      only: 'read_<%=page.name%>-page'
    }
  },
  ...(environment.server ? {} : { canActivate: [NgxPermissionsGuard] }),
  children: <%=page.classPrefix%>PageChildrenRoutes
}];
