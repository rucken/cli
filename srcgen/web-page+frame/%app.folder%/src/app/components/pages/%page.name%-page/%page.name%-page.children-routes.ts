import { <%=frame.classPrefix%>FrameRoutes } from './<%=frame.name%>-frame/<%=frame.name%>-frame.routes';

export const <%=page.classPrefix%>PageChildrenRoutes = [
  { path: '', redirectTo: '/<%=frame.name%>/<%=frame.name%>', pathMatch: 'full' },
  {
    path: '<%=frame.name%>',
    loadChildren: './<%=frame.name%>-frame/<%=frame.name%>-frame.module#<%=frame.classPrefix%>FrameModule',
    data: <%=frame.classPrefix%>FrameRoutes[0].data
  }
];
