import { Component, Injector } from '@angular/core';
import { BasePageComponent } from '@rucken/web';

@Component({
  selector: '<%=page.name%>-page',
  templateUrl: './<%=page.name%>-page.component.html',
  styleUrls: ['./<%=page.name%>-page.component.scss']
})
export class <%=page.classPrefix%>PageComponent extends BasePageComponent {
}
