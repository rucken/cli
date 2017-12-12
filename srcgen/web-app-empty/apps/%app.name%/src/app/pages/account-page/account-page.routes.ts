import { Routes } from '@angular/router';
import { translate } from '@rucken/core';
import { AccountPageComponent, AuthGuardService } from '@rucken/web';
import { <%=app.classPrefix%>ProfileFrameRoutes } from './profile-frame/profile-frame.routes';
import { <%=app.classPrefix%>ProfileFrameModule } from './profile-frame/profile-frame.module';

export const children = [
  {
    path: 'profile',
    data: <%=app.classPrefix%>ProfileFrameRoutes[0].data,
    loadChildren: './profile-frame/profile-frame.module#<%=app.classPrefix%>ProfileFrameModule',
    canActivate: [AuthGuardService]
  }
];
export const <%=app.classPrefix%>AccountPageRoutes: Routes = [
  { path: '', redirectTo: '/account/profile', pathMatch: 'full' },
  {
    path: '',
    component: AccountPageComponent,
    data: {
      name: 'account',
      title: translate('Account'),
      visible: true,
      children: children
    },
    children: children,
    canActivate: [AuthGuardService]
  }
];
