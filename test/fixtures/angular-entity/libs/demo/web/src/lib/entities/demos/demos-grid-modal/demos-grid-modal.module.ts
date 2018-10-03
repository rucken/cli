import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { EntityGridModalModule } from '@rucken/web';
import { DemosGridModule } from '../demos-grid/demos-grid.module';
import { DemosGridModalComponent } from './demos-grid-modal.component';

@NgModule({
  imports: [
    CommonModule,
    EntityGridModalModule,
    DemosGridModule
  ],
  declarations: [
    DemosGridModalComponent
  ],
  entryComponents: [
    DemosGridModalComponent
  ],
  exports: [
    DemosGridModalComponent,
    EntityGridModalModule,
    DemosGridModule
  ]
})
export class DemosGridModalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DemosGridModalModule,
      providers: []
  };
}
}
