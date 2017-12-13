import { User } from '@rucken/core';
import { Subscription } from 'rxjs/Rx';
import { Component, Input, Output, EventEmitter, ComponentFactoryResolver, ViewChild, ElementRef } from '@angular/core';
import { <%=grid.name.camel%> } from '<%=libs.coreFolder%>';
import { <%=grid.name.camel%>ModalComponent } from './<%=grid.name.kebab%>-modal/<%=grid.name.kebab%>-modal.component';
import { ConfirmModalComponent } from '@rucken/web';
import { <%=grid.list.name.camel%>Service } from '<%=libs.coreFolder%>';
import { AppService } from '@rucken/core';
import { AccountService } from '@rucken/core';
import { MetaModel } from '@rucken/core';
import { BaseResourcesGridComponent  } from '@rucken/web';
import { TranslateService } from '@ngx-translate/core';
import { translate } from '@rucken/core';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: '<%=grid.list.name.kebab%>-grid',
  templateUrl: './<%=grid.list.name.kebab%>-grid.component.html',
  styleUrls: ['./<%=grid.list.name.kebab%>-grid.component.scss'],
  entryComponents: [<%=grid.name.camel%>ModalComponent, ConfirmModalComponent]
})
export class <%=grid.list.name.camel%>GridComponent extends BaseResourcesGridComponent {

  @Output()
  onSelectItems: EventEmitter<any[] | <%=grid.name.camel%>[]>;
  @ViewChild('focusElement')
  focusElement: ElementRef;

  modelMeta: any = <%=grid.name.camel%>.meta();
  items: any[] | <%=grid.name.camel%>[];
  selectedItems: any[] | <%=grid.name.camel%>[];
  cachedResourcesService: <%=grid.list.name.camel%>Service;

  <%=grid.list.name.lower.camel%>Service: <%=grid.list.name.camel%>Service;
  
  constructor(
    public injector: Injector,
    public resolver: ComponentFactoryResolver
  ) {
    super(injector);
    this.<%=grid.list.name.lower.camel%>Service = injector.get(<%=grid.list.name.camel%>Service);
    this.cachedResourcesService = this.<%=grid.list.name.lower.camel%>Service.createCache();
  }
  
  get readonly() {
    return this.hardReadonly || !(this.accessToAdd || this.accessToChange || this.accessToDelete);
  }
  showCreateModal() {
    if (this.modalIsOpened) {
      return;
    }
    this.modalIsOpened = true;
    const itemModal: any | <%=grid.name.camel%>ModalComponent = this.app.modals(this.resolver).create(<%=grid.name.camel%>ModalComponent);
    itemModal.readonly = this.hardReadonly || !this.accessToAdd;
    itemModal.okTitle = translate('Create');
    itemModal.title = translate('Create new <%=grid.item.name.caption%>');
    itemModal.onOk.subscribe(($event: any) => this.save($event));
    itemModal.onClose.subscribe(() => this.focus());
    itemModal.item = new <%=grid.name.camel%>();
    itemModal.modal.show();
    this.selectedItems = [itemModal.item];
    this.cachedResourcesService.changeStatusItem$.pipe(takeUntil(this.destroyed$)).subscribe((status: any) =>
      itemModal.okInProcessFromStatus(status)
    );
  }
  showEditModal(item: any | <%=grid.name.camel%>) {
    if (this.modalIsOpened) {
      return;
    }
    this.modalIsOpened = true;
    const itemModal: any | <%=grid.name.camel%>ModalComponent = this.app.modals(this.resolver).create(<%=grid.name.camel%>ModalComponent);
    itemModal.readonly = this.hardReadonly || !this.accessToChange;
    itemModal.okTitle = translate('Save');
    itemModal.title = translate('Edit <%=grid.item.name.caption%>');
    if (itemModal.readonly) {
      itemModal.title = translate('<%=grid.name.caption%> info');
    }
    itemModal.onOk.subscribe(($event: any) => this.save($event));
    itemModal.onClose.subscribe(() => this.focus());
    itemModal.item = new <%=grid.name.camel%>(item);
    itemModal.modal.show();
    this.selectedItems = [itemModal.item];
    this.cachedResourcesService.changeStatusItem$.pipe(takeUntil(this.destroyed$)).subscribe((status: any) =>
      itemModal.okInProcessFromStatus(status)
    );
  }
  showRemoveModal(item: any | <%=grid.name.camel%>) {
    if (this.modalIsOpened) {
      return;
    }
    this.modalIsOpened = true;
    const confirm: ConfirmModalComponent = this.app.modals(this.resolver).create(ConfirmModalComponent);
    confirm.size = 'md';
    confirm.title = translate('Remove');
    confirm.message = translate('Are you sure you want to remove a <%=grid.item.name.caption%>?');
    confirm.onOk.subscribe(($event: any) => this.remove($event));
    confirm.onClose.subscribe(() => this.focus());
    this.selectedItems = [item];
    confirm.modal.show();
    this.cachedResourcesService.changeStatusItem$.pipe(takeUntil(this.destroyed$)).subscribe((status: any) =>
      confirm.okInProcessFromStatus(status)
    );
  }
  save(itemModal: any | <%=grid.name.camel%>ModalComponent) {
    this.cachedResourcesService.save(itemModal.item).subscribe(
      (<%=grid.name.lower.camel%>: any | <%=grid.name.camel%>) => {
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
