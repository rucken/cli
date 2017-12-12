import { translate } from '@rucken/core';
import { <%=app.classPrefix%>AuthGuardService } from '../../shared/guards/auth-guard.service';

import { <%=page.classPrefix%>PageComponent } from './<%=page.name%>-page.component';
import { <%=frame.classPrefix%>FrameRoutes } from './<%=frame.name%>-frame/<%=frame.name%>-frame.routes';

const children = [
  { path: '', redirectTo: '/<%=frame.name%>', pathMatch: 'full' },
  {
    path: '<%=frame.name%>',
    loadChildren: './<%=frame.name%>-frame/<%=frame.name%>-frame.module#<%=frame.classPrefix%>FrameModule',
    data: <%=frame.classPrefix%>FrameRoutes[0].data,
    canActivate: [<%=app.classPrefix%>AuthGuardService]
  }
];
export const <%=page.classPrefix%>PageRoutes = [{
  component: <%=page.classPrefix%>PageComponent,
  data: {
    name: '<%=page.name%>',
    title: translate('<%=page.title%>'),
    visible: true,
    children: children
  },
  children: children,
  canActivate: [<%=app.classPrefix%>AuthGuardService]
}];
