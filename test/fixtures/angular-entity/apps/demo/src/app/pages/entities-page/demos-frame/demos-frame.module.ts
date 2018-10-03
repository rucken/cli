import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DemosGridModule } from '@demo/web';
import { SharedModule } from '../../../shared/shared.module';
import { DemosFrameComponent } from './demos-frame.component';
import { DemosFrameRoutes } from './demos-frame.routes';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  imports: [
    SharedModule,
    NgxPermissionsModule,
    RouterModule.forChild(DemosFrameRoutes),
    DemosGridModule,
    FormsModule
  ],
  declarations: [
    DemosFrameComponent
  ]
})
export class DemosFrameModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DemosFrameModule,
      providers: []
    };
  }
}
