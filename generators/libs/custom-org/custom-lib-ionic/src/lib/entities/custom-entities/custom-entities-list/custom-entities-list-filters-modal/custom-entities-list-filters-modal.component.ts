import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from "@angular/core";
import { BasePromptFormModalComponent } from "@rucken/core";
import { BindIoInner } from "ngx-bind-io";
import { CustomEntitiesListFiltersModal } from "./custom-entities-list-filters-modal";
import { CustomEntitiesListFiltersModalService } from "./custom-entities-list-filters-modal.service";
@BindIoInner()
@Component({
  selector: "custom-entities-list-filters-modal",
  templateUrl: "./custom-entities-list-filters-modal.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomEntitiesListFiltersModalComponent
  extends BasePromptFormModalComponent<CustomEntitiesListFiltersModal>
  implements OnInit {
  @Input()
  class: string = undefined;
  sortTypes = CustomEntitiesListFiltersModal.sortTypes;
  sortFields = CustomEntitiesListFiltersModal.sortFields;

  constructor(
    private _customEntitiesListFiltersModalService: CustomEntitiesListFiltersModalService
  ) {
    super();
    this.group(CustomEntitiesListFiltersModal);
  }
  ngOnInit() {
    this.data = this._customEntitiesListFiltersModalService.getCurrent();
    this.hideYes = true;
  }
  onYesClick(data?: any) {
    this._customEntitiesListFiltersModalService.setCurrent(this.data);
    super.onYesClick(data);
  }
}
