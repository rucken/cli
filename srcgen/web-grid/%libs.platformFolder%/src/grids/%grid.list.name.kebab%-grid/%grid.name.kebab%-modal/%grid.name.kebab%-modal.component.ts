import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { <%=grid.name.camel%> } from '<%=libs.coreFolder%>';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { AccountService } from '@rucken/core';
import { BaseResourceModalComponent } from '@rucken/web';
import { User } from '@rucken/core';
import { TextInputComponent } from '@rucken/web';

@Component({
  selector: '<%=grid.name.kebab%>-modal',
  templateUrl: './<%=grid.name.kebab%>-modal.component.html',
  styleUrls: ['./<%=grid.name.kebab%>-modal.component.scss']
})

export class <%=grid.name.camel%>ModalComponent extends BaseResourceModalComponent {

  @ViewChild('modal')
  modal: ModalDirective;
  @ViewChild('focusElement')
  focusElement: TextInputComponent;

  @Input()
  item: any | <%=grid.name.camel%> = new <%=grid.name.camel%>();
  @Input()
  modelMeta: any = <%=grid.name.camel%>.meta();
  @Output()
  onClose: EventEmitter<<%=grid.name.camel%>ModalComponent> = new EventEmitter<<%=grid.name.camel%>ModalComponent>();
  @Output()
  onOk: EventEmitter<<%=grid.name.camel%>ModalComponent> = new EventEmitter<<%=grid.name.camel%>ModalComponent>();
}
