import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavSidebarModule } from '@rucken/web';
import { SharedModule } from '../../../shared/shared.module';
import { <%=page.classPrefix%>PageComponent } from './<%=page.name%>-page.component';
import { <%=page.classPrefix%>PageRoutes } from './<%=page.name%>-page.routes';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  imports: [
    SharedModule,
    NgxPermissionsModule.forChild(),
    NavSidebarModule,
    RouterModule.forChild(<%=page.classPrefix%>PageRoutes)
  ],
  declarations: [
    <%=page.classPrefix%>PageComponent
  ]
})
export class <%=page.classPrefix%>PageModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: <%=page.classPrefix%>PageModule,
      providers: []
    };
  }
}
