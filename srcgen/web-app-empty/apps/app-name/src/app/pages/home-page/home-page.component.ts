import { Component, Injector } from '@angular/core';
import { BasePageComponent } from '@rucken/web';

@Component({
  selector: '<%=app.name%>-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class <%=app.classPrefix%>HomePageComponent extends BasePageComponent {

}
