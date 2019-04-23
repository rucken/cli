import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output
} from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import {
  ErrorsExtractor,
  IBaseEntityModalOptions,
  ModalsService,
  translate
} from "@rucken/core";
import {
  CustomEntity,
  CUSTOM_ENTITIES_CONFIG_TOKEN
} from "@custom-org/custom-lib";
import { DynamicRepository, IRestProviderOptions } from "ngx-repository";
import { CustomEntitiesGridModalComponent } from "../custom-entities-grid-modal/custom-entities-grid-modal.component";
import { CustomEntitiesGridComponent } from "../custom-entities-grid/custom-entities-grid.component";
import { BindIoInner } from "ngx-bind-io";

@BindIoInner()
@Component({
  selector: "custom-entity-input",
  templateUrl: "./custom-entity-input.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomEntityInputComponent extends CustomEntitiesGridComponent
  implements OnInit {
  @Input()
  modalAppendFromGrid: IBaseEntityModalOptions = {
    component: CustomEntitiesGridModalComponent,
    initialState: {
      title: translate("Select customEntity"),
      yesTitle: translate("Select")
    }
  };
  @Output()
  select = new EventEmitter<CustomEntity>();

  constructor(
    modalsService: ModalsService,
    protected errorsExtractor: ErrorsExtractor,
    protected translateService: TranslateService,
    protected dynamicRepository: DynamicRepository,
    @Inject(CUSTOM_ENTITIES_CONFIG_TOKEN)
    protected customEntitiesConfig: IRestProviderOptions<CustomEntity>
  ) {
    super(
      modalsService,
      errorsExtractor,
      translateService,
      dynamicRepository,
      customEntitiesConfig
    );
  }
  ngOnInit() {
    this.mockedItems = [];
    this.useMock({
      items: this.mockedItems,
      ...this.customEntitiesConfig
    });
    this.mockedItemsChange.subscribe(items => this.onSelect(items[0]));
  }
  onSelect(item: CustomEntity) {
    this.select.emit(item);
  }
}
