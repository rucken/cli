import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
  OnInit
} from "@angular/core";
import { FormControl } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";
import { ErrorsExtractor, ModalsService } from "@rucken/core";
import {
  CustomEntity,
  CUSTOM_ENTITIES_CONFIG_TOKEN
} from "@custom-org/custom-lib";
import { DynamicRepository, IRestProviderOptions } from "ngx-repository";
import { CustomEntitiesGridComponent } from "../custom-entities-grid/custom-entities-grid.component";
import { BindIoInner } from "ngx-bind-io";

@BindIoInner()
@Component({
  selector: "custom-entity-select",
  templateUrl: "./custom-entity-select.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomEntitySelectComponent extends CustomEntitiesGridComponent
  implements OnInit {
  @Input()
  searchField: FormControl = new FormControl();

  nameField = "title";

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
    if (!this.mockedItems) {
      this.useRest({
        apiUrl: this.apiUrl,
        ...this.customEntitiesConfig,
        paginationMeta: { perPage: 1000 }
      });
    }
    if (this.mockedItems) {
      this.useMock({
        items: this.mockedItems,
        ...this.customEntitiesConfig
      });
    }
  }
  checkChange(value: any, item: any) {
    return item instanceof CustomEntity;
  }
}
