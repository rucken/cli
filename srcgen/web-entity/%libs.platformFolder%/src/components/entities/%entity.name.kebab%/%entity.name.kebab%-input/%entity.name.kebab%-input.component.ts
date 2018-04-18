import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { <%=entity.name.camel%>, <%=entity.list.name.camel%>Config, ErrorsExtractor, translate } from '@rucken/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DynamicRepository } from 'ngx-repository';
import { <%=entity.list.name.camel%>GridModalComponent } from '../<%=entity.list.name.kebab%>-grid-modal/<%=entity.list.name.kebab%>-grid-modal.component';
import { <%=entity.list.name.camel%>GridComponent } from '../<%=entity.list.name.kebab%>-grid/<%=entity.list.name.kebab%>-grid.component';


@Component({
  selector: '<%=entity.name.kebab%>-input',
  templateUrl: './<%=entity.name.kebab%>-input.component.html'
})
export class <%=entity.name.camel%>InputComponent extends <%=entity.list.name.camel%>GridComponent implements OnInit {

  @Output()
  select = new EventEmitter<<%=entity.name.camel%>>();

  constructor(
    public modalService: BsModalService,
    protected errorsExtractor: ErrorsExtractor,
    protected translateService: TranslateService,
    protected dynamicRepository: DynamicRepository,
    protected <%=entity.list.name.lower.camel%>Config: <%=entity.list.name.camel%>Config
  ) {
    super(
      modalService,
      errorsExtractor,
      translateService,
      dynamicRepository,
      <%=entity.list.name.lower.camel%>Config
    );
  }
  ngOnInit() {
    this.mockedItems = [];
    this.repository.useMock({
      items: this.mockedItems,
      ...this.<%=entity.list.name.lower.camel%>Config
    });
    this.mockedItemsChange.subscribe(items =>
      this.onSelect(items[0])
    );
  }
  createAppendFromGridModal(): BsModalRef {
    return this.modalService.show(<%=entity.list.name.camel%>GridModalComponent, {
      class: 'modal-md',
      initialState: {
        title: translate('Select <%=entity.item.name.caption%>'),
        yesTitle: translate('Select'),
        apiUrl: this.apiUrl
      }
    });
  }
  onSelect(item: <%=entity.name.camel%>) {
    this.select.emit(item);
  }
}
