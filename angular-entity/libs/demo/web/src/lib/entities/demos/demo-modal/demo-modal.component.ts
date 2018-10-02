import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Demo } from '@demo/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BasePromptFormModalComponent } from '@rucken/web';

@Component({
  selector: 'demo-modal',
  templateUrl: './demo-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoModalComponent extends BasePromptFormModalComponent <Demo> {

  constructor(
    protected bsModalRef: BsModalRef
  ) {
    super(bsModalRef);
    this.group(Demo);
  }
}
