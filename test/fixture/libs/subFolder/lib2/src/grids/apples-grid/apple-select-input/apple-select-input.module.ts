import { SharedModule } from '@rucken/web';
import { SelectInputModule, FooterButtonsModule, TextInputModule } from '@rucken/web';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { AppleSelectInputComponent } from './apple-select-input.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FormsModule } from '@angular/forms';
import { ApplesListModalModule } from '../apples-list-modal/apples-list-modal.module';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    FormsModule,
    ModalModule.forRoot(),
    ApplesListModalModule.forRoot(),
    FooterButtonsModule.forRoot(),
    TextInputModule.forRoot(),
    TooltipModule.forRoot(),
    SelectInputModule.forRoot()
  ],
  declarations: [
    AppleSelectInputComponent
  ],
  exports: [AppleSelectInputComponent],
  entryComponents: [AppleSelectInputComponent]
})
export class AppleSelectInputModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppleSelectInputModule,
      providers: []
    };
  }
}
