import { Component, Input, ViewChild } from '@angular/core';
import { <%=entity.name.camel%> } from '<%=libs.coreData.name%>';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BaseEntityListModalComponent } from '@rucken/web';
import { <%=entity.list.name.camel%>GridComponent } from '../<%=entity.list.name.kebab%>-grid/<%=entity.list.name.kebab%>-grid.component';

@Component({
  selector: '<%=entity.list.name.kebab%>-grid-modal',
  templateUrl: './<%=entity.list.name.kebab%>-grid-modal.component.html'
})
export class <%=entity.list.name.camel%>GridModalComponent extends BaseEntityListModalComponent<<%=entity.name.camel%>> {

  @ViewChild('grid')
  grid: <%=entity.list.name.camel%>GridComponent;
  @Input()
  apiUrl?: string;

  constructor(
    protected bsModalRef: BsModalRef
  ) {
    super(bsModalRef);
  }
}
