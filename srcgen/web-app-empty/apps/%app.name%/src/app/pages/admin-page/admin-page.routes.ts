import { Routes } from '@angular/router';
import { translate } from '@rucken/core';
import { AdminPageComponent, AuthGuardService } from '@rucken/web';

import { <%=app.classPrefix%>GroupsFrameRoutes } from './groups-frame/groups-frame.routes';
import { <%=app.classPrefix%>UsersFrameRoutes } from './users-frame/users-frame.routes';

export const children = [
  {
    path: 'users',
    loadChildren: './users-frame/users-frame.module#<%=app.classPrefix%>UsersFrameModule',
    data: <%=app.classPrefix%>UsersFrameRoutes[0].data,
    canActivate: [AuthGuardService]
  },
  {
    path: 'groups',
    loadChildren: './groups-frame/groups-frame.module#<%=app.classPrefix%>GroupsFrameModule',
    data: <%=app.classPrefix%>GroupsFrameRoutes[0].data,
    canActivate: [AuthGuardService]
  }
];
export const <%=app.classPrefix%>AdminPageRoutes: Routes = [
  { path: '', redirectTo: '/admin/users', pathMatch: 'full' },
  {
    path: '',
    component: AdminPageComponent,
    data: {
      name: 'admin',
      title: translate('Admin'),
      visible: true,
      children: children
    },
    children: children,
    canActivate: [AuthGuardService]
  }
];
