import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { EntityGridModule } from '@rucken/web';
import { DemoModalModule } from '../demo-modal/demo-modal.module';
import { DemosGridComponent } from './demos-grid.component';

@NgModule({
  imports: [
    CommonModule,
    EntityGridModule,
    DemoModalModule
  ],
  declarations: [
    DemosGridComponent
  ],
  exports: [
    DemosGridComponent,
    EntityGridModule,
    DemoModalModule
  ]
})
export class DemosGridModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DemosGridModule,
      providers: []
    };
  }
}
