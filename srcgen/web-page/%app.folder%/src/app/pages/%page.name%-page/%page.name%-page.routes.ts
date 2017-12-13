import { translate } from '@rucken/core';
import { AuthGuardService } from '@rucken/web';

import { <%=page.classPrefix%>PageComponent } from './<%=page.name%>-page.component';

export const <%=page.classPrefix%>PageRoutes = [{
  path: '',
  pathMatch: 'full',
  component: <%=page.classPrefix%>PageComponent,
  data: {
    name: '<%=page.name%>',
    title: translate('<%=page.title%>'),
    visible: true
  },
  canActivate: [AuthGuardService]
}];
