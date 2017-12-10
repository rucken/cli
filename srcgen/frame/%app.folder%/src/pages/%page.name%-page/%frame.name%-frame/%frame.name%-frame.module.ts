import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RuckenWebPipes, SharedModule, PipesModule } from '@rucken/web';
import { FrameHeaderModule } from '@rucken/web';

import { <%=frame.classPrefix%>FrameComponent } from './<%=frame.name%>-frame.component';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    FrameHeaderModule.forRoot(),
    PipesModule.forRoot()
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
