import { NgModule, ModuleWithProviders } from '@angular/core';
import { AppleModalComponent } from './apple-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from '@rucken/web';
import { FooterButtonsModule, TextInputModule } from '@rucken/web';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    FormsModule,
    ModalModule.forRoot(),
    FooterButtonsModule.forRoot(),
    TextInputModule.forRoot()
  ],
  declarations: [
    AppleModalComponent
  ],
  exports: [AppleModalComponent],
  entryComponents: [AppleModalComponent]
})
export class AppleModalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppleModalModule,
      providers: []
    };
  }
}
