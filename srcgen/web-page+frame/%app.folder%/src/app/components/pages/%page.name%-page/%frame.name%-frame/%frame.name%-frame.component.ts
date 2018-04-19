import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: '<%=frame.name%>-frame',
  templateUrl: './<%=frame.name%>-frame.component.html'
})
export class <%=frame.classPrefix%>FrameComponent {

  apiUrl = environment.apiUrl;

  constructor(
    public activatedRoute: ActivatedRoute
  ) {
  }
}
