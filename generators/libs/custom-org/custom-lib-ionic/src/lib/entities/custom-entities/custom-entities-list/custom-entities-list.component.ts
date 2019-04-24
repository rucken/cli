import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
  isDevMode,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild
} from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import {
  BaseEntityListComponent,
  BasePromptFormModalComponent,
  ErrorsExtractor,
  IBaseEntityGridFilter,
  IBaseEntityModalOptions,
  interpolate,
  ModalsService,
  translate
} from "@rucken/core";
import { EntityListComponent, IonicModalsService } from "@rucken/ionic";
import { CUSTOM_ENTITIES_CONFIG_TOKEN } from "@custom-org/custom-lib";
import { BindIoInner } from "ngx-bind-io";
import { DynamicRepository, IRestProviderOptions } from "ngx-repository";
import { map } from "rxjs/operators";
import { CustomEntity } from "@custom-org/custom-lib";
import { CustomEntityModalComponent } from "../custom-entity-modal/custom-entity-modal.component";
import { CustomEntitiesListFiltersModal } from "./custom-entities-list-filters-modal/custom-entities-list-filters-modal";
import { CustomEntitiesListFiltersModalComponent } from "./custom-entities-list-filters-modal/custom-entities-list-filters-modal.component";
import { CustomEntitiesListFiltersModalService } from "./custom-entities-list-filters-modal/custom-entities-list-filters-modal.service";

@BindIoInner()
@Component({
  selector: "custom-entities-list",
  templateUrl: "./custom-entities-list.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomEntitiesListComponent
  extends BaseEntityListComponent<CustomEntity>
  implements OnInit {
  @ViewChild("list")
  list: EntityListComponent<CustomEntity>;
  @Input()
  modalItem: IBaseEntityModalOptions = {
    class: "primary",
    component: CustomEntityModalComponent,
    initialState: {
      hideYes: true,
      hideNo: true
    }
  };
  @Input()
  modalView: IBaseEntityModalOptions = {
    class: "medium",
    component: CustomEntityModalComponent,
    initialState: {
      noClass: "medium",
      hideYes: true,
      hideNo: true
    }
  };
  @Input()
  title = translate("Custom entities");

  constructor(
    modalsService: ModalsService,
    protected errorsExtractor: ErrorsExtractor,
    protected translateService: TranslateService,
    protected dynamicRepository: DynamicRepository,
    @Inject(CUSTOM_ENTITIES_CONFIG_TOKEN)
    protected customEntitiesConfig: IRestProviderOptions<CustomEntity>,
    private _customEntitiesListFiltersModalService: CustomEntitiesListFiltersModalService
  ) {
    super(
      dynamicRepository.fork<CustomEntity>(CustomEntity),
      modalsService,
      CustomEntity
    );
  }
  ngOnInit() {
    if (!this.mockedItems) {
      this.useRest({
        apiUrl: this.apiUrl,
        infinity: true,
        ...this.customEntitiesConfig,
        autoload: false
      });
    }
    if (this.mockedItems) {
      this.useMock({
        items: this.mockedItems,
        infinity: true,
        ...this.customEntitiesConfig,
        autoload: false
      });
    }
    this.onChangeFilter();
  }
  setSearchText(event: { detail: { value: string } }) {
    this.list.searchField.setValue(event.detail.value);
  }
  async onDeleteClickAsync(item: CustomEntity) {
    const title = interpolate(
      this.translateService.instant(this.strings.deleteTitle),
      item
    );
    const message = interpolate(
      this.translateService.instant(this.strings.deleteMessage),
      item
    );
    try {
      const result = await (this
        .modalsService as IonicModalsService).confirmAsync({
        title,
        message
      });
      if (result) {
        this.repository.delete(item.id).subscribe(
          deletedItem => {
            if (this.mockedItems) {
              this.mockedItems = this.repository.items;
              this.mockedItemsChange.emit(this.mockedItems);
            }
          },
          error => this.onError(error)
        );
      }
    } catch (error) {
      throw error;
    }
  }
  async createFiltersModal(item?: CustomEntitiesListFiltersModal) {
    item = item || new CustomEntitiesListFiltersModal();
    const modalRef = await this.modalsService.createAsync<
      CustomEntitiesListFiltersModalComponent
    >(CustomEntitiesListFiltersModalComponent, {
      class: "secondary",
      initialState: {
        title: translate("Custom entities filters"),
        data: item
      }
    });
    modalRef.instance.group(CustomEntitiesListFiltersModal);
    modalRef.instance.data = item;
    return modalRef;
  }
  async onFilterClickAsync(data?: any) {
    const modalRef = await this.createFiltersModal(data);
    modalRef.instance.yes.subscribe(
      (modal: CustomEntitiesListFiltersModalComponent) => {
        modal.hide();
        this.onChangeFilter();
      }
    );
  }
  onFilterClick(data?: any): void {
    this.onFilterClickAsync(data).then();
  }
  onChangeFilter(filter?: IBaseEntityGridFilter) {
    if (!filter) {
      filter = {};
    }
    const customEntitiesListFiltersModal = this._customEntitiesListFiltersModalService.getCurrent();
    if (customEntitiesListFiltersModal.sortField) {
      filter["sort"] = customEntitiesListFiltersModal.sortField.id;
    }
    if (customEntitiesListFiltersModal.sortType) {
      filter["sort"] =
        (customEntitiesListFiltersModal.sortType.id === "asc" ? "" : "-") +
        filter["sort"];
    }
    if (true) {
      super.onChangeFilter(filter);
    }
  }

  async onUpdateClickAsync(item: CustomEntity) {
    const useCustomModalComponent =
      this.modalUpdate.component || this.modalItem.component;
    let modalRef = !useCustomModalComponent
      ? await this.createUpdateModal(item)
      : undefined;
    if (!modalRef) {
      modalRef = await this.defaultCreateUpdateModal(item);
      if (isDevMode() && !useCustomModalComponent) {
        console.warn('Method "createUpdateModal" is not defined', this);
      }
    }
    modalRef.instance.yes.subscribe(
      (modal: BasePromptFormModalComponent<CustomEntity>) => {
        modal.processing = true;
        this.repository.update(item.id, modal.getData()).subscribe(
          updatedItem => {
            modal.processing = false;
            if (this.mockedItems) {
              this.mockedItems = this.repository.items;
              this.mockedItemsChange.emit(this.mockedItems);
            }
            modal.hide();
          },
          error => this.onUpdateError(modal, error)
        );
      }
    );
  }
}
