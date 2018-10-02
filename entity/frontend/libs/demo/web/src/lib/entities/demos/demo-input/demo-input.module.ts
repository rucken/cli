import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { EntityInputModule } from '@rucken/web';
import { DemosGridModalModule } from '../demos-grid-modal/demos-grid-modal.module';
import { DemoInputComponent } from './demo-input.component';

@NgModule({
  imports: [
    CommonModule,
    EntityInputModule,
    DemosGridModalModule
  ],
  declarations: [
    DemoInputComponent
  ],
  exports: [
    DemoInputComponent,
    EntityInputModule,
    DemosGridModalModule
  ]
})
export class DemoInputModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DemoInputModule,
      providers: []
  };
}
}
