import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { <%=app.classPrefix%>AppModule } from './app.module';
import { <%=app.classPrefix%>AppComponent } from './app.component';

@NgModule({
  imports: [
    // The AppServerModule should import your AppModule followed
    // by the ServerModule from @angular/platform-server.
    <%=app.classPrefix%>AppModule,
    ServerModule,
    ModuleMapLoaderModule // <-- *Important* to have lazy-loaded routes work
  ],
  // Since the bootstrapped component is not inherited from your
  // imported AppModule, it needs to be repeated here.
  bootstrap: [<%=app.classPrefix%>AppComponent],
})
export class <%=app.classPrefix%>AppServerModule { }