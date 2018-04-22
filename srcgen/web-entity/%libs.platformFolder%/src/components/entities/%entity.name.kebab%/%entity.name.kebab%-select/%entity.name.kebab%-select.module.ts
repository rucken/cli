import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { EntitySelectModule } from '@rucken/web';
import { <%=entity.list.name.camel%>GridModalModule } from '../<%=entity.list.name.kebab%>-grid-modal/<%=entity.list.name.kebab%>-grid-modal.module';
import { <%=entity.name.camel%>SelectComponent } from './<%=entity.name.kebab%>-select.component';

@NgModule({
  imports: [
    CommonModule,
    EntitySelectModule,
    <%=entity.list.name.camel%>GridModalModule
  ],
  declarations: [
    <%=entity.name.camel%>SelectComponent
  ],
  exports: [
    <%=entity.name.camel%>SelectComponent
    EntitySelectModule
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
