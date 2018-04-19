import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EntityInputModule } from '@rucken/core';
import { <%=entity.list.name.camel%>GridModalModule } from '../<%=entity.list.name.kebab%>-grid-modal/<%=entity.list.name.kebab%>-grid-modal.module';
import { <%=entity.name.camel%>InputComponent } from './<%=entity.name.kebab%>-input.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    EntityInputModule,
    <%=entity.list.name.camel%>GridModalModule,
    ModalModule.forRoot()
  ],
  declarations: [
    <%=entity.name.camel%>InputComponent
  ],
  exports: [
    <%=entity.name.camel%>InputComponent
  ]
})
export class <%=entity.name.camel%>InputModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: <%=entity.name.camel%>InputModule,
      providers: []
    };
  }
}
