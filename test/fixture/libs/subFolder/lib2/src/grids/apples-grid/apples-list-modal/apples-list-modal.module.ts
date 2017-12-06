import { ApplesGridModule } from '../apples-grid.module';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { ApplesListModalComponent } from './apples-list-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from '@rucken/web';
import { FooterButtonsModule } from '@rucken/web';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    ModalModule.forRoot(),
    FooterButtonsModule.forRoot(),
    ApplesGridModule.forRoot()
  ],
  declarations: [
    ApplesListModalComponent
  ],
  exports: [ApplesListModalComponent],
  entryComponents: [ApplesListModalComponent]
})
export class ApplesListModalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ApplesListModalModule,
      providers: []
    };
  }
}
