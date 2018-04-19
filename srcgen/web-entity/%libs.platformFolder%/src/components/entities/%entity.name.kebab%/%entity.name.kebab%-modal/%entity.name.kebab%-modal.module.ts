import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DirectivesModule } from '@rucken/web';
import { FormGroupModule } from '@rucken/web';
import { PromptFormModalModule } from '@rucken/web';
import { <%=entity.name.camel%>ModalComponent } from './<%=entity.name.kebab%>-modal.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule.forChild(),
    FormGroupModule,
    PromptFormModalModule,
    DirectivesModule
  ],
  declarations: [
    <%=entity.name.camel%>ModalComponent
  ],
  entryComponents: [
    <%=entity.name.camel%>ModalComponent
  ],
  exports: [
    <%=entity.name.camel%>ModalComponent
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
