import { Component, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { <%=grid.name.camel%> } from '<%=libs.coreFolder%>';
import { BaseResourceModalComponent } from '@rucken/web';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { <%=grid.list.name.camel%>GridComponent } from '../<%=grid.list.name.kebab%>-grid.component';

@Component({
  selector: '<%=grid.list.name.kebab%>-list-modal',
  templateUrl: './<%=grid.list.name.kebab%>-list-modal.component.html',
  styleUrls: ['./<%=grid.list.name.kebab%>-list-modal.component.scss']
})
export class <%=grid.list.name.camel%>ListModalComponent extends BaseResourceModalComponent {

  @ViewChild('<%=grid.list.name.lower.camel%>')
  <%=grid.list.name.lower.camel%>: <%=grid.list.name.camel%>GridComponent;
  @ViewChild('modal')
  modal: ModalDirective;
  @ViewChild('focusElement')
  focusElement: <%=grid.list.name.camel%>GridComponent;

  @Output()
  onClose: EventEmitter<<%=grid.list.name.camel%>ListModalComponent> = new EventEmitter<<%=grid.list.name.camel%>ListModalComponent>();
  @Output()
  onOk: EventEmitter<<%=grid.list.name.camel%>ListModalComponent> = new EventEmitter<<%=grid.list.name.camel%>ListModalComponent>();

  item: any | <%=grid.name.camel%> = new <%=grid.name.camel%>();
  items: any[] | <%=grid.name.camel%>[] = [];
  modelMeta: any = <%=grid.name.camel%>.meta();

  select<%=grid.name.camel%>(items: any[] | <%=grid.name.camel%>[]) {
    this.item = items[0];
    this.items = items;
  }
}
