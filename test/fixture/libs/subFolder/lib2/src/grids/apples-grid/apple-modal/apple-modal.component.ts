import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { Apple } from 'C:\Projects\open-sources\@rucken\cli\test\fixture\libs\lib1';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { AccountService } from '@rucken/core';
import { BaseResourceModalComponent } from '@rucken/web';
import { User } from '@rucken/core';
import { TextInputComponent } from '@rucken/web';

@Component({
  selector: 'apple-modal',
  templateUrl: './apple-modal.component.html',
  styleUrls: ['./apple-modal.component.scss']
})

export class AppleModalComponent extends BaseResourceModalComponent {

  @ViewChild('modal')
  modal: ModalDirective;
  @ViewChild('focusElement')
  focusElement: TextInputComponent;

  @Input()
  item: any | Apple = new Apple();
  @Input()
  modelMeta: any = Apple.meta();
  @Output()
  onClose: EventEmitter<AppleModalComponent> = new EventEmitter<AppleModalComponent>();
  @Output()
  onOk: EventEmitter<AppleModalComponent> = new EventEmitter<AppleModalComponent>();
}
