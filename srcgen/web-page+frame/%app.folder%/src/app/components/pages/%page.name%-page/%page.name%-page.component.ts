import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { <%=page.classPrefix%>PageChildrenRoutes } from './<%=page.name%>-page.children-routes';

@Component({
  selector: '<%=page.name%>-page',
  templateUrl: './<%=page.name%>-page.component.html'
})
export class <%=page.classPrefix%>PageComponent {

  routes = <%=page.classPrefix%>PageChildrenRoutes;

  constructor(
    public activatedRoute: ActivatedRoute
  ) {
  }
}
