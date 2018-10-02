import { ChangeDetectionStrategy, Inject, Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ErrorsExtractor, translate } from '@rucken/core';
import { Demo, DEMOS_CONFIG_TOKEN } from '@demo/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DynamicRepository, IRestProviderOptions } from 'ngx-repository';
import { BaseEntityListComponent, IBaseEntityModalOptions } from '@rucken/web';
import { MessageModalService } from '@rucken/web';
import { DemoModalComponent } from '../demo-modal/demo-modal.component';


@Component({
  selector: 'demos-grid',
  templateUrl: './demos-grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemosGridComponent extends BaseEntityListComponent <Demo> implements OnInit {
  @Input()
  modalItem: IBaseEntityModalOptions = {
      component: DemoModalComponent
  };
  @Input()
  title = translate('Demos');
  constructor(
    public modalService: BsModalService,
    protected errorsExtractor: ErrorsExtractor,
    protected translateService: TranslateService,
    protected dynamicRepository: DynamicRepository,
    protected messageModalService: MessageModalService,
    @Inject(DEMOS_CONFIG_TOKEN) protected demosConfig: IRestProviderOptions<Demo>
  ) {
    super(
      dynamicRepository.fork <Demo> (Demo),
      modalService,
      Demo
    );
  }
  ngOnInit() {
    if (!this.mockedItems) {
      this.useRest({
        apiUrl: this.apiUrl,
        ...this.demosConfig
      });
    }
    if (this.mockedItems) {
      this.useMock({
        items: this.mockedItems,
        ...this.demosConfig
      });
    }
  }
  /*
  createDeleteModal(item: Demo): BsModalRef {
    return this.modalService.show(DemoModalComponent, {
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
    const item = new Demo();
    return this.modalService.show(DemoModalComponent, {
      class: 'modal-md',
      initialState: {
        title: this.strings.createTitle,
        yesTitle: translate('Create'),
        data: item,
        apiUrl: this.apiUrl
      }
    });
  }
  createUpdateModal(item?: Demo): BsModalRef {
    return this.modalService.show(DemoModalComponent, {
      class: 'modal-md',
      initialState: {
        title: this.strings.updateTitle,
        yesTitle: translate('Save'),
        data: item,
        apiUrl: this.apiUrl
      }
    });
  }
  createViewModal(item?: Demo): BsModalRef {
    return this.modalService.show(DemoModalComponent, {
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
  */
}
