import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { EntityInputModule } from '@rucken/web';
import { <%=entity.list.name.camel%>GridModalModule } from '../<%=entity.list.name.kebab%>-grid-modal/<%=entity.list.name.kebab%>-grid-modal.module';
import { <%=entity.name.camel%>InputComponent } from './<%=entity.name.kebab%>-input.component';

@NgModule({
  imports: [
    CommonModule,
    EntityInputModule,
    <%=entity.list.name.camel%>GridModalModule
  ],
  declarations: [
    <%=entity.name.camel%>InputComponent
  ],
  exports: [
    <%=entity.name.camel%>InputComponent,
    EntityInputModule,
    <%=entity.list.name.camel%>GridModalModule
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
