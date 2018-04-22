import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { EntityGridModalModule } from '@rucken/web';
import { <%=entity.list.name.camel%>GridModule } from '../<%=entity.list.name.kebab%>-grid/<%=entity.list.name.kebab%>-grid.module';
import { <%=entity.list.name.camel%>GridModalComponent } from './<%=entity.list.name.kebab%>-grid-modal.component';

@NgModule({
  imports: [
    CommonModule,
    EntityGridModalModule,
    <%=entity.list.name.camel%>GridModule
  ],
  declarations: [
    <%=entity.list.name.camel%>GridModalComponent
  ],
  entryComponents: [
    <%=entity.list.name.camel%>GridModalComponent
  ],
  exports: [
    <%=entity.list.name.camel%>GridModalComponent,
    EntityGridModalModule,
    <%=entity.list.name.camel%>GridModule
  ]
})
export class <%=entity.list.name.camel%>GridModalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: <%=entity.list.name.camel%>GridModalModule,
      providers: []
    };
  }
}
