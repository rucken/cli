import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
  OnInit
} from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import {
  BaseEntityListComponent,
  ErrorsExtractor,
  IBaseEntityGridFilter,
  IBaseEntityModalOptions,
  ModalsService,
  translate
} from "@rucken/core";
import {
  CustomEntity,
  CUSTOM_ENTITIES_CONFIG_TOKEN
} from "@custom-org/custom-lib";
import { BindIoInner } from "ngx-bind-io";
import { DynamicRepository, IRestProviderOptions } from "ngx-repository";
import { map } from "rxjs/operators";
import { CustomEntityModalComponent } from "../custom-entity-modal/custom-entity-modal.component";

@BindIoInner()
@Component({
  selector: "custom-entities-grid",
  templateUrl: "./custom-entities-grid.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomEntitiesGridComponent
  extends BaseEntityListComponent<CustomEntity>
  implements OnInit {
  @Input()
  autoload = false;
  @Input()
  modalItem: IBaseEntityModalOptions = {
    component: CustomEntityModalComponent
  };
  @Input()
  title = translate("Custom entities");

  constructor(
    modalsService: ModalsService,
    protected errorsExtractor: ErrorsExtractor,
    protected translateService: TranslateService,
    protected dynamicRepository: DynamicRepository,
    @Inject(CUSTOM_ENTITIES_CONFIG_TOKEN)
    protected customEntitiesConfig: IRestProviderOptions<CustomEntity>
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
        ...this.customEntitiesConfig,
        autoload: this.autoload
      });
    }
    if (this.mockedItems) {
      this.useMock({
        items: this.mockedItems,
        ...this.customEntitiesConfig,
        autoload: this.autoload
      });
    }
    this.items$ = this.repository.items$.pipe(
      map(items =>
        items.map(item => {
          return item;
        })
      )
    );
  }
  defaultCreateCreateModal(item?: CustomEntity) {
    item = item || new CustomEntity();
    this.modalCreate = {
      ...this.modalCreate,
      initialState: {
        ...this.modalCreate.initialState,
        data: item
      }
    };
    return super.defaultCreateCreateModal(item);
  }
  defaultCreateUpdateModal(item?: CustomEntity) {
    this.modalUpdate = {
      ...this.modalUpdate,
      initialState: {
        ...this.modalUpdate.initialState,
        data: item
      }
    };
    return super.defaultCreateUpdateModal(item);
  }
}
