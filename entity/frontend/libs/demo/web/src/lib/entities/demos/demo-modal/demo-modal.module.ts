import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { PromptFormModalModule } from '@rucken/web';
import { DemoModalComponent } from './demo-modal.component';

@NgModule({
  imports: [
    CommonModule,
    PromptFormModalModule
  ],
  declarations: [
    DemoModalComponent
  ],
  entryComponents: [
    DemoModalComponent
  ],
  exports: [
    DemoModalComponent,
    PromptFormModalModule
  ]
})
export class DemoModalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DemoModalModule,
      providers: []
  };
}
}
