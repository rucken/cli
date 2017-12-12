import { translate } from '@rucken/core';
import { HomeGuardService } from '@rucken/web';

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
  canActivate: [HomeGuardService]
}];
