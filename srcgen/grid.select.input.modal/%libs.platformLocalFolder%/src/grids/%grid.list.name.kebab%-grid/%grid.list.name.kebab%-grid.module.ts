import { NgModule, ModuleWithProviders } from '@angular/core';
import { <%=grid.list.name.camel%>GridComponent } from './<%=grid.list.name.kebab%>-grid.component';
import { SharedModule } from '@rucken/web';
import { GridSearchPanelModule, TableColumnModule, GridRowButtonsModule, ConfirmModalModule } from '@rucken/web';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { <%=grid.name.camel%>ModalModule } from './<%=grid.name.kebab%>-modal/<%=grid.name.kebab%>-modal.module';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    GridSearchPanelModule.forRoot(),
    <%=grid.name.camel%>ModalModule.forRoot(),
    ConfirmModalModule.forRoot(),
    TableColumnModule.forRoot(),
    GridRowButtonsModule.forRoot(),
    PaginationModule.forRoot()
  ],
  declarations: [
    <%=grid.list.name.camel%>GridComponent
  ],
  exports: [<%=grid.list.name.camel%>GridComponent],
  entryComponents: [<%=grid.list.name.camel%>GridComponent]
})
export class <%=grid.list.name.camel%>GridModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: <%=grid.list.name.camel%>GridModule,
      providers: []
    };
  }
}
