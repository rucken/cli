import { SelectInputComponent } from '@rucken/web';
import { Apple } from 'C:\Projects\open-sources\@rucken\cli\test\fixture\libs\lib1';
import { Component, Input, EventEmitter, Output, ViewChild, ElementRef, ComponentFactoryResolver } from '@angular/core';
import { ApplesListModalComponent } from '../apples-list-modal/apples-list-modal.component';
import { AppService } from '@rucken/core';
import { AccountService } from '@rucken/core';
import { ApplesService } from 'C:\Projects\open-sources\@rucken\cli\test\fixture\libs\lib1';
import { User } from '@rucken/core';
import { BaseResourceSelectInputConfig } from '@rucken/web';
import { BaseResourceSelectInputComponent } from '@rucken/web';
import { TranslateService } from '@ngx-translate/core';
import { TooltipDirective } from 'ngx-bootstrap/tooltip';
import { DomSanitizer } from '@angular/platform-browser';
import { translate } from '@rucken/core';

@Component({
  selector: 'apple-select-input',
  templateUrl: './apple-select-input.component.html',
  styleUrls: ['./apple-select-input.component.scss'],
  entryComponents: [ApplesListModalComponent]
})
export class AppleSelectInputComponent extends BaseResourceSelectInputComponent {

  @ViewChild('tooltip')
  tooltip: TooltipDirective;
  @ViewChild('inputElement')
  inputElement: any;

  @Input()
  name = 'apple';
  @Input()
  model: any | Apple = new Apple();
  @Output()
  modelChange: EventEmitter<any | Apple> = new EventEmitter<any | Apple>();

  items: any[] | Apple[] = [];
  cachedResourcesService: ApplesService;
  
  constructor(
    public injector: Injector,
    public resolver: ComponentFactoryResolver
  ) {
    super(injector);
    this.applesService = injector.get(ApplesService);
    this.cachedResourcesService = this.applesService.createCache();
  }

  onLookup() {
    const itemModal: ApplesListModalComponent =
      this.app.modals(this.resolver).create(ApplesListModalComponent);
    itemModal.hardReadonly = this.hardReadonly;
    itemModal.okTitle = translate('Select');
    itemModal.title = translate('Apples');
    itemModal.onOk.subscribe(($event: any) => {
      this.value = itemModal.item;
      if (this.inputElement) {
        this.inputElement.value = this.value.pk;
      }
      if (this.inputReadonly === false) {
        this.valueAsString = '';
      }
      itemModal.modal.hide();
    });
    itemModal.onClose.subscribe(() => this.focus());
    itemModal.item = this.value;
    itemModal.modal.show();
  }
}
