import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PipesModule } from '@rucken/web';
import { EntityGridModule } from '@rucken/web';
import { EntityModalModule, MessageModalModule } from '@rucken/web';
import { <%=entity.name.camel%>ModalModule } from '../<%=entity.name.kebab%>-modal/<%=entity.name.kebab%>-modal.module';
import { <%=entity.list.name.camel%>GridComponent } from './<%=entity.list.name.kebab%>-grid.component';

@NgModule({
  imports: [
    CommonModule,
    MessageModalModule,
    TranslateModule.forChild(),
    EntityGridModule,
    EntityModalModule,
    <%=entity.name.camel%>ModalModule,
    ModalModule.forRoot(),
    PipesModule
  ],
  declarations: [
    <%=entity.list.name.camel%>GridComponent
  ],
  exports: [
    <%=entity.list.name.camel%>GridComponent
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
