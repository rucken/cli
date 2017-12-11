import { Component, Injector } from '@angular/core';
import { AuthModalComponent, ConfirmModalComponent, NavbarComponent } from '@rucken/web';

import { <%=app.classPrefix%>Routes } from './../../app.routes';

@Component({
  selector: '<%=app.name%>-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  entryComponents: [ConfirmModalComponent, AuthModalComponent]
})
export class <%=app.classPrefix%>NavbarComponent extends NavbarComponent {

  initRoutes() {
    this.childrenRoutes = <%=app.classPrefix%>Routes;
  }
}
