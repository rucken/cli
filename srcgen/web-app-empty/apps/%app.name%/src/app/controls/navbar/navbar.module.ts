import { NgModule, ModuleWithProviders } from '@angular/core';
import { <%=app.classPrefix%>NavbarComponent } from './navbar.component';
import { SharedModule } from '@rucken/web';
import { ConfirmModalModule, AuthModalModule } from '@rucken/web';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    ConfirmModalModule.forRoot(),
    AuthModalModule.forRoot(),
    CollapseModule.forRoot(),
    RouterModule
  ],
  declarations: [
    <%=app.classPrefix%>NavbarComponent
  ],
  exports: [
    <%=app.classPrefix%>NavbarComponent
  ],
  entryComponents: [<%=app.classPrefix%>NavbarComponent]
})
export class <%=app.classPrefix%>NavbarModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: <%=app.classPrefix%>NavbarModule,
      providers: []
    };
  }
}
