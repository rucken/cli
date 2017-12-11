import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { <%=app.classPrefix%>AdminPageRoutes } from './admin-page.routes';
import { AdminPageModule } from '@rucken/web';

@NgModule({
  imports: [
    AdminPageModule.forRoot(),
    RouterModule.forChild(<%=app.classPrefix%>AdminPageRoutes)
  ]
})
export class <%=app.classPrefix%>AdminPageModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: <%=app.classPrefix%>AdminPageModule,
      providers: []
    };
  }
}
