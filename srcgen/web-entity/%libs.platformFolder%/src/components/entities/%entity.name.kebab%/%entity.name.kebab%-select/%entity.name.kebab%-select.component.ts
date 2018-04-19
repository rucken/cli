import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ErrorsExtractor } from '@rucken/core';
import { <%=entity.name.camel%>, <%=entity.list.name.camel%>Config } from '<%=libs.coreData.name%>';
import { BsModalService } from 'ngx-bootstrap/modal';
import { DynamicRepository } from 'ngx-repository';
import { <%=entity.list.name.camel%>GridComponent } from '../<%=entity.list.name.kebab%>-grid/<%=entity.list.name.kebab%>-grid.component';


@Component({
  selector: '<%=entity.name.kebab%>-select',
  templateUrl: './<%=entity.name.kebab%>-select.component.html'
})
export class <%=entity.name.camel%>SelectComponent extends <%=entity.list.name.camel%>GridComponent implements OnInit {

  @Input()
  searchField: FormControl = new FormControl();

  nameField = 'title';

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
    if (!this.mockedItems) {
      this.repository.useRest({
        apiUrl: this.apiUrl,
        ...this.<%=entity.list.name.lower.camel%>Config,
        paginationMeta: { perPage: 1000 }
      });
    }
    if (this.mockedItems) {
      this.repository.useMock({
        items: this.mockedItems,
        ...this.<%=entity.list.name.lower.camel%>Config
      });
    }
  }
  checkChange(value: any, item: any) {
    return item instanceof <%=entity.name.camel%>;
  }
}
