import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RuckenWebPipes, SharedModule, PipesModule } from '@rucken/web';
import { PageHeaderModule } from '@rucken/web';
import { BasePageModule } from '@rucken/web';

import { <%=page.classPrefix%>PageComponent } from './<%=page.name%>-page.component';
import { <%=page.classPrefix%>PageRoutes } from './<%=page.name%>-page.routes';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    PageHeaderModule.forRoot(),
    PipesModule.forRoot(),
    RouterModule.forChild(<%=page.classPrefix%>PageRoutes),
    BasePageModule.forRoot()
  ],
  declarations: [<%=page.classPrefix%>PageComponent],
  exports: [<%=page.classPrefix%>PageComponent],
  entryComponents: [<%=page.classPrefix%>PageComponent]
})
export class <%=page.classPrefix%>PageModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: <%=page.classPrefix%>PageModule,
      providers: []
    };
  }
}
