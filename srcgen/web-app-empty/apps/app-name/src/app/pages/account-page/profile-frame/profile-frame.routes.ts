import { Routes } from '@angular/router';
import { translate } from '@rucken/core';
import { ProfileFrameComponent, AuthGuardService } from '@rucken/web';

export const <%=app.classPrefix%>ProfileFrameRoutes: Routes = [
  {
    path: '',
    component: ProfileFrameComponent,
    data: {
      name: 'profile',
      title: translate('Profile'),
      visible: true
    },
    canActivate: [AuthGuardService]
  }
];
