import { <%=grid.list.name.camel%>GridModule } from '../<%=grid.list.name.kebab%>-grid.module';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { <%=grid.list.name.camel%>ListModalComponent } from './<%=grid.list.name.kebab%>-list-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from '@rucken/web';
import { FooterButtonsModule } from '@rucken/web';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    ModalModule.forRoot(),
    FooterButtonsModule.forRoot(),
    <%=grid.list.name.camel%>GridModule.forRoot()
  ],
  declarations: [
    <%=grid.list.name.camel%>ListModalComponent
  ],
  exports: [<%=grid.list.name.camel%>ListModalComponent],
  entryComponents: [<%=grid.list.name.camel%>ListModalComponent]
})
export class <%=grid.list.name.camel%>ListModalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: <%=grid.list.name.camel%>ListModalModule,
      providers: []
    };
  }
}
