import { translate } from '@rucken/core';
import { <%=app.classPrefix%>AuthGuardService } from '../../../shared/guards/auth-guard.service';

import { <%=frame.classPrefix%>FrameComponent } from './<%=frame.name%>-frame.component';

export const <%=frame.classPrefix%>FrameRoutes = [{
  path: '',
  component: <%=frame.classPrefix%>FrameComponent,
  data: {
    name: '<%=frame.name%>',
    title: translate('<%=frame.title%>'),
    visible: true
  },
  canActivate: [<%=app.classPrefix%>AuthGuardService]
}];
