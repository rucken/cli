import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RuckenWebPipes, SharedModule, PipesModule } from '@rucken/web';
import { PageHeaderModule } from '@rucken/web';

import { <%=app.classPrefix%>HomePageComponent } from './home-page.component';
import { <%=app.classPrefix%>HomePageRoutes } from './home-page.routes';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    PageHeaderModule.forRoot(),
    PipesModule.forRoot(),
    RouterModule.forChild(<%=app.classPrefix%>HomePageRoutes)
  ],
  declarations: [<%=app.classPrefix%>HomePageComponent],
  exports: [<%=app.classPrefix%>HomePageComponent],
  entryComponents: [<%=app.classPrefix%>HomePageComponent]
})
export class <%=app.classPrefix%>HomePageModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: <%=app.classPrefix%>HomePageModule,
      providers: []
    };
  }
}
