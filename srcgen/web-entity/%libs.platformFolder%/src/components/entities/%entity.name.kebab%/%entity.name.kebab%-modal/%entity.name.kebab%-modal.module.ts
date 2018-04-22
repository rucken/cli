import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { PromptFormModalModule } from '@rucken/web';
import { <%=entity.name.camel%>ModalComponent } from './<%=entity.name.kebab%>-modal.component';

@NgModule({
  imports: [
    CommonModule,
    PromptFormModalModule
  ],
  declarations: [
    <%=entity.name.camel%>ModalComponent
  ],
  entryComponents: [
    <%=entity.name.camel%>ModalComponent
  ],
  exports: [
    <%=entity.name.camel%>ModalComponent,
    PromptFormModalModule
  ]
})
export class <%=entity.name.camel%>ModalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: <%=entity.name.camel%>ModalModule,
      providers: []
    };
  }
}
