import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EntitySelectModule } from '@rucken/core';
import { <%=entity.list.name.camel%>GridModalModule } from '../<%=entity.list.name.kebab%>-grid-modal/<%=entity.list.name.kebab%>-grid-modal.module';
import { <%=entity.name.camel%>SelectComponent } from './<%=entity.name.kebab%>-select.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    EntitySelectModule,
    <%=entity.list.name.camel%>GridModalModule,
    ModalModule.forRoot()
  ],
  declarations: [
    <%=entity.name.camel%>SelectComponent
  ],
  exports: [
    <%=entity.name.camel%>SelectComponent
  ]
})
export class <%=entity.name.camel%>SelectModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: <%=entity.name.camel%>SelectModule,
      providers: []
    };
  }
}
