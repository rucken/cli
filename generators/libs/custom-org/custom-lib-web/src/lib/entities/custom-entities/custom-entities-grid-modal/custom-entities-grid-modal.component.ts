import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild
} from "@angular/core";
import { BaseEntityListModalComponent } from "@rucken/core";
import { CustomEntity } from "@custom-org/custom-lib";
import { CustomEntitiesGridComponent } from "../custom-entities-grid/custom-entities-grid.component";
import { BindIoInner } from "ngx-bind-io";

@BindIoInner()
@Component({
  selector: "custom-entities-grid-modal",
  templateUrl: "./custom-entities-grid-modal.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomEntitiesGridModalComponent extends BaseEntityListModalComponent<
  CustomEntity
> {
  @ViewChild("grid")
  grid: CustomEntitiesGridComponent;
  @Input()
  apiUrl?: string = undefined;

  constructor() {
    super();
  }
}
