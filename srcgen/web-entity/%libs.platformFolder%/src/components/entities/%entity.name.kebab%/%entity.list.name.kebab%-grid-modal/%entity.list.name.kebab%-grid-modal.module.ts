import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { EntityGridModalModule } from '@rucken/core';
import { <%=entity.list.name.camel%>GridModule } from '../<%=entity.list.name.kebab%>-grid/<%=entity.list.name.kebab%>-grid.module';
import { <%=entity.list.name.camel%>GridModalComponent } from './<%=entity.list.name.kebab%>-grid-modal.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule.forChild(),
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
    <%=entity.list.name.camel%>GridModalComponent
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
