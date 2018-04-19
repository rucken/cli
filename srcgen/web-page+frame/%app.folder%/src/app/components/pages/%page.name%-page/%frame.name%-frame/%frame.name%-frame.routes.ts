import { translate } from '@rucken/core';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { <%=frame.classPrefix%>FrameComponent } from './<%=frame.name%>-frame.component';
import { environment } from '../../../../../environments/environment';

export const <%=frame.classPrefix%>FrameRoutes = [{
  path: '',
  component: <%=frame.classPrefix%>FrameComponent,
  data: {
    name: '<%=frame.name%>',
    title: translate('<%=frame.title%>'),
    permissions: {
      only: 'read_<%=frame.name%>-frame'
    }
  },
  ...(environment.server ? {} : { canActivate: [NgxPermissionsGuard] })
}];
