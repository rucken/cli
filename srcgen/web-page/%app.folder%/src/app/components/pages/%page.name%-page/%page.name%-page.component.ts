import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: '<%=page.name%>-page',
  templateUrl: './<%=page.name%>-page.component.html'
})
export class <%=page.classPrefix%>PageComponent {

  constructor(
    public activatedRoute: ActivatedRoute
  ) {
  }
}
