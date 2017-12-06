import { User } from '@rucken/core';
import { Subscription } from 'rxjs/Rx';
import { Component, Input, Output, EventEmitter, ComponentFactoryResolver, ViewChild, ElementRef } from '@angular/core';
import { Apple } from 'C:\Projects\open-sources\@rucken\cli\test\fixture\libs\lib1';
import { AppleModalComponent } from './apple-modal/apple-modal.component';
import { ConfirmModalComponent } from '@rucken/web';
import { ApplesService } from 'C:\Projects\open-sources\@rucken\cli\test\fixture\libs\lib1';
import { AppService } from '@rucken/core';
import { AccountService } from '@rucken/core';
import { MetaModel } from '@rucken/core';
import { BaseResourcesGridComponent  } from '@rucken/web';
import { TranslateService } from '@ngx-translate/core';
import { translate } from '@rucken/core';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'apples-grid',
  templateUrl: './apples-grid.component.html',
  styleUrls: ['./apples-grid.component.scss'],
  entryComponents: [AppleModalComponent, ConfirmModalComponent]
})
export class ApplesGridComponent extends BaseResourcesGridComponent {

  @Output()
  onSelectItems: EventEmitter<any[] | Apple[]>;
  @ViewChild('focusElement')
  focusElement: ElementRef;

  modelMeta: any = Apple.meta();
  items: any[] | Apple[];
  selectedItems: any[] | Apple[];
  cachedResourcesService: ApplesService;

  applesService: ApplesService;
  
  constructor(
    public injector: Injector,
    public resolver: ComponentFactoryResolver
  ) {
    super(injector);
    this.applesService = injector.get(ApplesService);
    this.cachedResourcesService = this.applesService.createCache();
  }
  
  get readonly() {
    return this.hardReadonly || !(this.accessToAdd || this.accessToChange || this.accessToDelete);
  }
  showCreateModal() {
    if (this.modalIsOpened) {
      return;
    }
    this.modalIsOpened = true;
    const itemModal: any | AppleModalComponent = this.app.modals(this.resolver).create(AppleModalComponent);
    itemModal.readonly = this.hardReadonly || !this.accessToAdd;
    itemModal.okTitle = translate('Create');
    itemModal.title = translate('Create new apple');
    itemModal.onOk.subscribe(($event: any) => this.save($event));
    itemModal.onClose.subscribe(() => this.focus());
    itemModal.item = new Apple();
    itemModal.modal.show();
    this.selectedItems = [itemModal.item];
    this.cachedResourcesService.changeStatusItem$.pipe(takeUntil(this.destroyed$)).subscribe((status: any) =>
      itemModal.okInProcessFromStatus(status)
    );
  }
  showEditModal(item: any | Apple) {
    if (this.modalIsOpened) {
      return;
    }
    this.modalIsOpened = true;
    const itemModal: any | AppleModalComponent = this.app.modals(this.resolver).create(AppleModalComponent);
    itemModal.readonly = this.hardReadonly || !this.accessToChange;
    itemModal.okTitle = translate('Save');
    itemModal.title = translate('Edit apple');
    if (itemModal.readonly) {
      itemModal.title = translate('Apple info');
    }
    itemModal.onOk.subscribe(($event: any) => this.save($event));
    itemModal.onClose.subscribe(() => this.focus());
    itemModal.item = new Apple(item);
    itemModal.modal.show();
    this.selectedItems = [itemModal.item];
    this.cachedResourcesService.changeStatusItem$.pipe(takeUntil(this.destroyed$)).subscribe((status: any) =>
      itemModal.okInProcessFromStatus(status)
    );
  }
  showRemoveModal(item: any | Apple) {
    if (this.modalIsOpened) {
      return;
    }
    this.modalIsOpened = true;
    const confirm: ConfirmModalComponent = this.app.modals(this.resolver).create(ConfirmModalComponent);
    confirm.size = 'md';
    confirm.title = translate('Remove');
    confirm.message = translate('Are you sure you want to remove a apple?');
    confirm.onOk.subscribe(($event: any) => this.remove($event));
    confirm.onClose.subscribe(() => this.focus());
    this.selectedItems = [item];
    confirm.modal.show();
    this.cachedResourcesService.changeStatusItem$.pipe(takeUntil(this.destroyed$)).subscribe((status: any) =>
      confirm.okInProcessFromStatus(status)
    );
  }
  save(itemModal: any | AppleModalComponent) {
    this.cachedResourcesService.save(itemModal.item).subscribe(
      (apple: any | Apple) => {
        itemModal.modal.hide();
      }, (errors: any) => {
        if (errors.message) {
          this.app.component.showErrorModal(errors.message.join(', ')).subscribe(
            () => {
              itemModal.info.emit({ name: '' });
            });
        } else {
          itemModal.errors.emit(errors);
        }
      });
  }
  remove(itemModal: ConfirmModalComponent) {
    this.cachedResourcesService.remove(this.selectedItems).subscribe(
      () => {
        itemModal.modal.hide();
      },
      (errors: any) => {
        if (errors.message) {
          this.app.component.showErrorModal(errors.message.join(', ')).subscribe(
            () => {
              this.focus();
            });
        } else {
          itemModal.errors.emit(errors);
        }
      });
  }
}
