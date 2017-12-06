import { NgModule, ModuleWithProviders } from '@angular/core';
import { ApplesGridComponent } from './apples-grid.component';
import { SharedModule } from '@rucken/web';
import { GridSearchPanelModule, TableColumnModule, GridRowButtonsModule, ConfirmModalModule } from '@rucken/web';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AppleModalModule } from './apple-modal/apple-modal.module';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    GridSearchPanelModule.forRoot(),
    AppleModalModule.forRoot(),
    ConfirmModalModule.forRoot(),
    TableColumnModule.forRoot(),
    GridRowButtonsModule.forRoot(),
    PaginationModule.forRoot()
  ],
  declarations: [
    ApplesGridComponent
  ],
  exports: [ApplesGridComponent],
  entryComponents: [ApplesGridComponent]
})
export class ApplesGridModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ApplesGridModule,
      providers: []
    };
  }
}
