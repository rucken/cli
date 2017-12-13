import { translate } from '@rucken/core';
import { AuthGuardService } from '@rucken/web';
import { Routes } from '@angular/router';

import { <%=page.classPrefix%>PageComponent } from './<%=page.name%>-page.component';
import { <%=frame.classPrefix%>FrameRoutes } from './<%=frame.name%>-frame/<%=frame.name%>-frame.routes';

const children = [
  {
    path: '<%=frame.name%>',
    loadChildren: './<%=frame.name%>-frame/<%=frame.name%>-frame.module#<%=frame.classPrefix%>FrameModule',
    data: <%=frame.classPrefix%>FrameRoutes[0].data,
    canActivate: [AuthGuardService]
  }
];
export const <%=page.classPrefix%>PageRoutes: Routes = [
  { path: '', redirectTo: '/<%=page.name%>/<%=frame.name%>', pathMatch: 'full' },
  {
    path: '',
    component: <%=page.classPrefix%>PageComponent,
    data: {
      name: '<%=page.name%>',
      title: translate('<%=page.title%>'),
      visible: true,
      children: children
    },
    children: children,
    canActivate: [AuthGuardService]
}];
