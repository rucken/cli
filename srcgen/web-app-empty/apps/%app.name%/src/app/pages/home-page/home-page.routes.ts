import { translate } from '@rucken/core';
import { <%=app.classPrefix%>HomeGuardService } from '../../shared/guards/home-guard.service';

import { <%=app.classPrefix%>HomePageComponent } from './home-page.component';

export const <%=app.classPrefix%>HomePageRoutes = [{
  path: '',
  pathMatch: 'full',
  component: <%=app.classPrefix%>HomePageComponent,
  data: {
    name: 'home',
    title: translate('Home'),
    visible: true
  },
  canActivate: [<%=app.classPrefix%>HomeGuardService]
}];
