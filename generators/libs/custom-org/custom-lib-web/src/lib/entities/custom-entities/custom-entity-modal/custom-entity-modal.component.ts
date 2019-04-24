import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { BasePromptFormModalComponent } from "@rucken/core";
import { CustomEntity } from "@custom-org/custom-lib";
import { BindIoInner } from "ngx-bind-io";

@BindIoInner()
@Component({
  selector: "custom-entity-modal",
  templateUrl: "./custom-entity-modal.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomEntityModalComponent extends BasePromptFormModalComponent<
  CustomEntity
> {
  @Input()
  apiUrl?: string = undefined;

  constructor() {
    super();
    this.group(CustomEntity);
  }
}
