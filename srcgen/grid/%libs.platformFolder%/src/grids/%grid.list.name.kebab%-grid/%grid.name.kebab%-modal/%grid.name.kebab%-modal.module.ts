import { NgModule, ModuleWithProviders } from '@angular/core';
import { <%=grid.name.camel%>ModalComponent } from './<%=grid.name.kebab%>-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from '@rucken/web';
import { FooterButtonsModule, TextInputModule } from '@rucken/web';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    FormsModule,
    ModalModule.forRoot(),
    FooterButtonsModule.forRoot(),
    TextInputModule.forRoot()
  ],
  declarations: [
    <%=grid.name.camel%>ModalComponent
  ],
  exports: [<%=grid.name.camel%>ModalComponent],
  entryComponents: [<%=grid.name.camel%>ModalComponent]
})
export class <%=grid.name.camel%>ModalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: <%=grid.name.camel%>ModalModule,
      providers: []
    };
  }
}
