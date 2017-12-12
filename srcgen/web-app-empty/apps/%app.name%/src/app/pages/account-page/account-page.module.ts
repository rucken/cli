import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { <%=app.classPrefix%>AccountPageRoutes } from './account-page.routes';
import { AccountPageModule } from '@rucken/web';

@NgModule({
  imports: [
    AccountPageModule.forRoot(),
    RouterModule.forChild(<%=app.classPrefix%>AccountPageRoutes)
  ]
})
export class <%=app.classPrefix%>AccountPageModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: <%=app.classPrefix%>AccountPageModule,
      providers: []
    };
  }
}
