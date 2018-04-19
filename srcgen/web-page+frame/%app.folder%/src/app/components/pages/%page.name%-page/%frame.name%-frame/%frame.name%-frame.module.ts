import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';
import { <%=frame.classPrefix%>FrameComponent } from './<%=frame.name%>-frame.component';
import { <%=frame.classPrefix%>FrameRoutes } from './<%=frame.name%>-frame.routes';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  imports: [
    SharedModule,
    NgxPermissionsModule.forChild(),
    RouterModule.forChild(<%=frame.classPrefix%>FrameRoutes),
    FormsModule
  ],
  declarations: [
    <%=frame.classPrefix%>FrameComponent
  ]
})
export class <%=frame.classPrefix%>FrameModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: <%=frame.classPrefix%>FrameModule,
      providers: []
    };
  }
}
