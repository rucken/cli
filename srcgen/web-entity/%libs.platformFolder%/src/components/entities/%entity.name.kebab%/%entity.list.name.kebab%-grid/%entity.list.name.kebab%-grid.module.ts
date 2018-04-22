import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { EntityGridModule } from '@rucken/web';
import { <%=entity.name.camel%>ModalModule } from '../<%=entity.name.kebab%>-modal/<%=entity.name.kebab%>-modal.module';
import { <%=entity.list.name.camel%>GridComponent } from './<%=entity.list.name.kebab%>-grid.component';

@NgModule({
  imports: [
    CommonModule,
    EntityGridModule,
    <%=entity.name.camel%>ModalModule
  ],
  declarations: [
    <%=entity.list.name.camel%>GridComponent
  ],
  exports: [
    <%=entity.list.name.camel%>GridComponent,
    EntityGridModule,
    <%=entity.name.camel%>ModalModule
  ]
})
export class <%=entity.list.name.camel%>GridModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: <%=entity.list.name.camel%>GridModule,
      providers: []
    };
  }
}
