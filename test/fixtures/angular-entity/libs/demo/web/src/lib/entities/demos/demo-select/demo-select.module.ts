import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { EntitySelectModule } from '@rucken/web';
import { DemosGridModalModule } from '../demos-grid-modal/demos-grid-modal.module';
import { DemoSelectComponent } from './demo-select.component';

@NgModule({
  imports: [
    CommonModule,
    EntitySelectModule,
    DemosGridModalModule
  ],
  declarations: [
    DemoSelectComponent
  ],
  exports: [
    DemoSelectComponent,
    EntitySelectModule,
    DemosGridModalModule
  ]
})
export class DemoSelectModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DemoSelectModule,
      providers: []
  };
}
}
