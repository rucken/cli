import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemesPageModule } from '@rucken/web';

import { <%=app.classPrefix%>ThemesPageRoutes } from './themes-page.routes';

@NgModule({
  imports: [
    ThemesPageModule.forRoot(),
    RouterModule.forChild(<%=app.classPrefix%>ThemesPageRoutes)
  ]
})
export class <%=app.classPrefix%>ThemesPageModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: <%=app.classPrefix%>ThemesPageModule,
      providers: []
    };
  }
}
