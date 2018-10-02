import { Component, EventEmitter, OnInit, Output, Input, Inject, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ErrorsExtractor, translate } from '@rucken/core';
import { Demo, DEMOS_CONFIG_TOKEN } from '@demo/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { DynamicRepository, IRestProviderOptions } from 'ngx-repository';
import { MessageModalService, IBaseEntityModalOptions } from '@rucken/web';
import { DemosGridModalComponent } from '../demos-grid-modal/demos-grid-modal.component';
import { DemosGridComponent } from '../demos-grid/demos-grid.component';


@Component({
  selector: 'demo-input',
  templateUrl: './demo-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoInputComponent extends DemosGridComponent implements OnInit {

  @Output()
  select = new EventEmitter <Demo> ();
  @Input()
  modalAppendFromGrid: IBaseEntityModalOptions = {
    component: DemosGridModalComponent,
    initialState: {
      title: translate('Select demo'),
      yesTitle: translate('Select')
    }
  };

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
    this.mockedItems = [];
    this.useMock({
      items: this.mockedItems,
      ...this.demosConfig
    });
    this.mockedItemsChange.subscribe(items =>
      this.onSelect(items[0])
    );
  }
  onSelect(item: Demo) {
    this.select.emit(item);
  }
}
