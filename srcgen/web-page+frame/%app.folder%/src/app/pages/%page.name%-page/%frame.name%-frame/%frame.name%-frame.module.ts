import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RuckenWebPipes, SharedModule, PipesModule } from '@rucken/web';
import { PageHeaderModule } from '@rucken/web';

import { <%=frame.classPrefix%>FrameComponent } from './<%=frame.name%>-frame.component';
import { <%=frame.classPrefix%>FrameRoutes } from './<%=frame.name%>-frame.routes';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    PageHeaderModule.forRoot(),
    PipesModule.forRoot(),
    RouterModule.forChild(<%=frame.classPrefix%>FrameRoutes)
  ],
  declarations: [<%=frame.classPrefix%>FrameComponent],
  exports: [<%=frame.classPrefix%>FrameComponent],
  entryComponents: [<%=frame.classPrefix%>FrameComponent]
})
export class <%=frame.classPrefix%>FrameModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: <%=frame.classPrefix%>FrameModule,
      providers: []
    };
  }
}
