import { Component, Input, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { Demo } from '@demo/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BaseEntityListModalComponent } from '@rucken/web';
import { DemosGridComponent } from '../demos-grid/demos-grid.component';

@Component({
  selector: 'demos-grid-modal',
  templateUrl: './demos-grid-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemosGridModalComponent extends BaseEntityListModalComponent <Demo> {

  @ViewChild('grid')
  grid: DemosGridComponent;
  @Input()
  apiUrl?: string;

  constructor(
    protected bsModalRef: BsModalRef
  ) {
    super(bsModalRef);
  }
}
