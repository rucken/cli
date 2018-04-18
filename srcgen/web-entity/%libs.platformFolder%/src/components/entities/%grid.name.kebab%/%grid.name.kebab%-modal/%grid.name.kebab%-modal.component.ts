import { Component } from '@angular/core';
import { <%=entity.name.camel%> } from '<%=libs.core%>';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BasePromptFormModalComponent } from '@rucken/core';

@Component({
  selector: '<%=entity.name.kebab%>-modal',
  templateUrl: './<%=entity.name.kebab%>-modal.component.html'
})
export class <%=entity.name.camel%>ModalComponent extends BasePromptFormModalComponent<<%=entity.name.camel%>> {

  constructor(
    protected bsModalRef: BsModalRef
  ) {
    super(bsModalRef);
    this.group(<%=entity.name.camel%>);
  }
}
