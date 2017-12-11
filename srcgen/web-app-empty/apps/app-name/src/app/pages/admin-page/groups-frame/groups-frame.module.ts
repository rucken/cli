import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { <%=app.classPrefix%>GroupsFrameRoutes } from './groups-frame.routes';
import { GroupsFrameModule } from '@rucken/web';

@NgModule({
  imports: [
    GroupsFrameModule.forRoot(),
    RouterModule.forChild(<%=app.classPrefix%>GroupsFrameRoutes)
  ]
})
export class <%=app.classPrefix%>GroupsFrameModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: GroupsFrameModule,
      providers: []
    };
  }
}
