import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { <%=app.classPrefix%>UsersFrameRoutes } from './users-frame.routes';
import { UsersFrameModule } from '@rucken/web';

@NgModule({
  imports: [
    UsersFrameModule.forRoot(),
    RouterModule.forChild(<%=app.classPrefix%>UsersFrameRoutes)
  ]
})
export class <%=app.classPrefix%>UsersFrameModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: <%=app.classPrefix%>UsersFrameModule,
      providers: []
    };
  }
}
