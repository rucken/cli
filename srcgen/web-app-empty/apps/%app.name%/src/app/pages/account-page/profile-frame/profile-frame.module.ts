import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { <%=app.classPrefix%>ProfileFrameRoutes } from './profile-frame.routes';
import { ProfileFrameModule } from '@rucken/web';

@NgModule({
  imports: [
    ProfileFrameModule.forRoot(),
    RouterModule.forChild(<%=app.classPrefix%>ProfileFrameRoutes)
  ]
})
export class <%=app.classPrefix%>ProfileFrameModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: <%=app.classPrefix%>ProfileFrameModule,
      providers: []
    };
  }
}
