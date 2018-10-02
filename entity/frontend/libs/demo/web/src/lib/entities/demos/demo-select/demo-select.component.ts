import { Component, Input, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ErrorsExtractor } from '@rucken/core';
import { Demo, DEMOS_CONFIG_TOKEN } from '@demo/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { DynamicRepository, IRestProviderOptions } from 'ngx-repository';
import { MessageModalService } from '@rucken/web';
import { DemosGridComponent } from '../demos-grid/demos-grid.component';


@Component({
  selector: 'demo-select',
  templateUrl: './demo-select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoSelectComponent extends DemosGridComponent implements OnInit {

  @Input()
  searchField: FormControl = new FormControl();

  nameField = 'name';

  constructor(
    public modalService: BsModalService,
    protected errorsExtractor: ErrorsExtractor,
    protected translateService: TranslateService,
    protected dynamicRepository: DynamicRepository,
    protected messageModalService: MessageModalService,
    @Inject(DEMOS_CONFIG_TOKEN) protected demosConfig: IRestProviderOptions<Demo>
  ) {
    super(
      modalService,
      errorsExtractor,
      translateService,
      dynamicRepository,
      messageModalService,
      demosConfig
    );
  }
  ngOnInit() {
    if (!this.mockedItems) {
      this.useRest({
        apiUrl: this.apiUrl,
        ...this.demosConfig,
        paginationMeta: { perPage: 1000 }
      });
    }
    if (this.mockedItems) {
      this.useMock({
        items: this.mockedItems,
        ...this.demosConfig
      });
    }
  }
  checkChange(value: any, item: any) {
    return item instanceof Demo;
  }
}
