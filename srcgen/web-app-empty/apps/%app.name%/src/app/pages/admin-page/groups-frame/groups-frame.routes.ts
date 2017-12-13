import { Routes } from '@angular/router';
import { translate } from '@rucken/core';
import { GroupsFrameComponent, AuthGuardService } from '@rucken/web';

export const <%=app.classPrefix%>GroupsFrameRoutes: Routes = [
  {
    path: '',
    component: GroupsFrameComponent,
    data: {
      name: 'groups',
      title: translate('Groups'),
      visible: true
    },
    canActivate: [AuthGuardService]
  }
];
