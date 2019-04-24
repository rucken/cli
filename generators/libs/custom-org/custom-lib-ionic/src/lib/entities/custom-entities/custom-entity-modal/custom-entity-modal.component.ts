import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { BasePromptFormModalComponent } from "@rucken/core";
import { BindIoInner } from "ngx-bind-io";
import { CustomEntity } from "@custom-org/custom-lib";

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
  class: string = undefined;

  constructor() {
    super();
    this.group(CustomEntity);
  }
}
