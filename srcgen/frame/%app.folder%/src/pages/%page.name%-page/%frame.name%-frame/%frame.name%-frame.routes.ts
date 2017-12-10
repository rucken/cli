import { translate } from '@rucken/core';
import { AuthGuardService } from '@rucken/web';

import { <%=frame.classPrefix%>FrameComponent } from './<%=frame.name%>-frame.component';

export const <%=frame.classPrefix%>FrameRoutes = [{
  path: '',
  component: <%=frame.classPrefix%>FrameComponent,
  data: {
    name: '<%=frame.name%>',
    title: translate('<%=frame.title%>'),
    visible: true
  },
  canActivate: [AuthGuardService]
}];
