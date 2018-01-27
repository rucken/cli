import { Component, Injector } from '@angular/core';
import { HomePageComponent } from '@rucken/web';

@Component({
  selector: '<%=app.name%>-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class <%=app.classPrefix%>HomePageComponent extends HomePageComponent {

  afterCreate() {
    super.afterCreate();
    this.readme = require('html-loader!markdown-loader!./../../../../../../README.md');
  }
}
