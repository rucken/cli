import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ErrorsExtractor, translate } from '@rucken/core';
import { <%=entity.name.camel%>, <%=entity.list.name.camel%>Config } from '<%=libs.core%>';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DynamicRepository, PaginationMeta } from 'ngx-repository';
import { BaseEntityListComponent } from '@rucken/core';
import { <%=entity.name.camel%>ModalComponent } from '../<%=entity.name.kebab%>-modal/<%=entity.name.kebab%>-modal.component';


@Component({
  selector: '<%=entity.list.name.kebab%>-grid',
  templateUrl: './<%=entity.list.name.kebab%>-grid.component.html'
})
export class <%=entity.list.name.camel%>GridComponent extends BaseEntityListComponent<<%=entity.name.camel%>> implements OnInit {

  public paginationMeta: PaginationMeta;
  constructor(
    public modalService: BsModalService,
    protected errorsExtractor: ErrorsExtractor,
    protected translateService: TranslateService,
    protected dynamicRepository: DynamicRepository,
    protected <%=entity.list.name.lower.camel%>Config: <%=entity.list.name.camel%>Config
  ) {
    super(
      dynamicRepository.fork<<%=entity.name.camel%>>(<%=entity.name.camel%>),
      modalService,
      <%=entity.name.camel%>
    );
  }
  ngOnInit() {
    if (!this.mockedItems) {
      this.repository.useRest({
        apiUrl: this.apiUrl,
        ...this.<%=entity.list.name.lower.camel%>Config
      });
    }
    if (this.mockedItems) {
      this.repository.useMock({
        items: this.mockedItems,
        ...this.<%=entity.list.name.lower.camel%>Config
      });
    }
  }
  createDeleteModal(item: <%=entity.name.camel%>): BsModalRef {
    return this.modalService.show(<%=entity.name.camel%>ModalComponent, {
      class: 'modal-md',
      initialState: {
        title: this.strings.deleteTitle,
        message: this.strings.deleteMessage,
        yesTitle: translate('Delete'),
        data: item,
        apiUrl: this.apiUrl
      }
    });
  }
  createCreateModal(): BsModalRef {
    const item = new <%=entity.name.camel%>();
    return this.modalService.show(<%=entity.name.camel%>ModalComponent, {
      class: 'modal-md',
      initialState: {
        title: this.strings.createTitle,
        yesTitle: translate('Create'),
        data: item,
        apiUrl: this.apiUrl
      }
    });
  }
  createUpdateModal(item?: <%=entity.name.camel%>): BsModalRef {
    return this.modalService.show(<%=entity.name.camel%>ModalComponent, {
      class: 'modal-md',
      initialState: {
        title: this.strings.updateTitle,
        yesTitle: translate('Save'),
        data: item,
        apiUrl: this.apiUrl
      }
    });
  }
  createViewModal(item?: <%=entity.name.camel%>): BsModalRef {
    return this.modalService.show(<%=entity.name.camel%>ModalComponent, {
      class: 'modal-md',
      initialState: {
        title: this.strings.viewTitle,
        noTitle: translate('Close'),
        readonly: true,
        data: item,
        apiUrl: this.apiUrl
      }
    });
  }
}
