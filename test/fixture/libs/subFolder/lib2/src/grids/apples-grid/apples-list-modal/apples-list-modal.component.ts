import { Component, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { Apple } from 'C:\Projects\open-sources\@rucken\cli\test\fixture\libs\lib1';
import { BaseResourceModalComponent } from '@rucken/web';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ApplesGridComponent } from '../apples-grid.component';

@Component({
  selector: 'apples-list-modal',
  templateUrl: './apples-list-modal.component.html',
  styleUrls: ['./apples-list-modal.component.scss']
})
export class ApplesListModalComponent extends BaseResourceModalComponent {

  @ViewChild('apples')
  apples: ApplesGridComponent;
  @ViewChild('modal')
  modal: ModalDirective;
  @ViewChild('focusElement')
  focusElement: ApplesGridComponent;

  @Output()
  onClose: EventEmitter<ApplesListModalComponent> = new EventEmitter<ApplesListModalComponent>();
  @Output()
  onOk: EventEmitter<ApplesListModalComponent> = new EventEmitter<ApplesListModalComponent>();

  item: any | Apple = new Apple();
  items: any[] | Apple[] = [];
  modelMeta: any = Apple.meta();

  selectApple(items: any[] | Apple[]) {
    this.item = items[0];
    this.items = items;
  }
}
