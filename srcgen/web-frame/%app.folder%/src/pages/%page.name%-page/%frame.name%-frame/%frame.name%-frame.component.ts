import { Component, Injector } from '@angular/core';
import { BaseFrameComponent } from '@rucken/web';

@Component({
  selector: '<%=frame.name%>-frame',
  templateUrl: './<%=frame.name%>-frame.component.html',
  styleUrls: ['./<%=frame.name%>-frame.component.scss']
})
export class <%=frame.classPrefix%>FrameComponent extends BaseFrameComponent {
}
