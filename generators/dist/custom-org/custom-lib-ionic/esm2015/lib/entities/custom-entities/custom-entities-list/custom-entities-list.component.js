/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Inject, Input, isDevMode, ViewChild } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { BaseEntityListComponent, ErrorsExtractor, interpolate, ModalsService, translate } from "@rucken/core";
import { EntityListComponent } from "@rucken/ionic";
import { CUSTOM_ENTITIES_CONFIG_TOKEN } from "@custom-org/custom-lib";
import { BindIoInner } from "ngx-bind-io";
import { DynamicRepository } from "ngx-repository";
import { CustomEntity } from "@custom-org/custom-lib";
import { CustomEntityModalComponent } from "../custom-entity-modal/custom-entity-modal.component";
import { CustomEntitiesListFiltersModal } from "./custom-entities-list-filters-modal/custom-entities-list-filters-modal";
import { CustomEntitiesListFiltersModalComponent } from "./custom-entities-list-filters-modal/custom-entities-list-filters-modal.component";
import { CustomEntitiesListFiltersModalService } from "./custom-entities-list-filters-modal/custom-entities-list-filters-modal.service";
let CustomEntitiesListComponent = class CustomEntitiesListComponent extends BaseEntityListComponent {
    /**
     * @param {?} modalsService
     * @param {?} errorsExtractor
     * @param {?} translateService
     * @param {?} dynamicRepository
     * @param {?} customEntitiesConfig
     * @param {?} _customEntitiesListFiltersModalService
     */
    constructor(modalsService, errorsExtractor, translateService, dynamicRepository, customEntitiesConfig, _customEntitiesListFiltersModalService) {
        super(dynamicRepository.fork(CustomEntity), modalsService, CustomEntity);
        this.errorsExtractor = errorsExtractor;
        this.translateService = translateService;
        this.dynamicRepository = dynamicRepository;
        this.customEntitiesConfig = customEntitiesConfig;
        this._customEntitiesListFiltersModalService = _customEntitiesListFiltersModalService;
        this.modalItem = {
            class: "primary",
            component: CustomEntityModalComponent,
            initialState: {
                hideYes: true,
                hideNo: true
            }
        };
        this.modalView = {
            class: "medium",
            component: CustomEntityModalComponent,
            initialState: {
                noClass: "medium",
                hideYes: true,
                hideNo: true
            }
        };
        this.title = translate("Custom entities");
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.mockedItems) {
            this.useRest(Object.assign({ apiUrl: this.apiUrl, infinity: true }, this.customEntitiesConfig, { autoload: false }));
        }
        if (this.mockedItems) {
            this.useMock(Object.assign({ items: this.mockedItems, infinity: true }, this.customEntitiesConfig, { autoload: false }));
        }
        this.onChangeFilter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    setSearchText(event) {
        this.list.searchField.setValue(event.detail.value);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onDeleteClickAsync(item) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const title = interpolate(this.translateService.instant(this.strings.deleteTitle), item);
            /** @type {?} */
            const message = interpolate(this.translateService.instant(this.strings.deleteMessage), item);
            try {
                /** @type {?} */
                const result = yield ((/** @type {?} */ (this
                    .modalsService))).confirmAsync({
                    title,
                    message
                });
                if (result) {
                    this.repository.delete(item.id).subscribe(deletedItem => {
                        if (this.mockedItems) {
                            this.mockedItems = this.repository.items;
                            this.mockedItemsChange.emit(this.mockedItems);
                        }
                    }, error => this.onError(error));
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
    /**
     * @param {?=} item
     * @return {?}
     */
    createFiltersModal(item) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            item = item || new CustomEntitiesListFiltersModal();
            /** @type {?} */
            const modalRef = yield this.modalsService.createAsync(CustomEntitiesListFiltersModalComponent, {
                class: "secondary",
                initialState: {
                    title: translate("Custom entities filters"),
                    data: item
                }
            });
            modalRef.instance.group(CustomEntitiesListFiltersModal);
            modalRef.instance.data = item;
            return modalRef;
        });
    }
    /**
     * @param {?=} data
     * @return {?}
     */
    onFilterClickAsync(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const modalRef = yield this.createFiltersModal(data);
            modalRef.instance.yes.subscribe((modal) => {
                modal.hide();
                this.onChangeFilter();
            });
        });
    }
    /**
     * @param {?=} data
     * @return {?}
     */
    onFilterClick(data) {
        this.onFilterClickAsync(data).then();
    }
    /**
     * @param {?=} filter
     * @return {?}
     */
    onChangeFilter(filter) {
        if (!filter) {
            filter = {};
        }
        /** @type {?} */
        const customEntitiesListFiltersModal = this._customEntitiesListFiltersModalService.getCurrent();
        if (customEntitiesListFiltersModal.sortField) {
            filter["sort"] = customEntitiesListFiltersModal.sortField.id;
        }
        if (customEntitiesListFiltersModal.sortType) {
            filter["sort"] =
                (customEntitiesListFiltersModal.sortType.id === "asc" ? "" : "-") +
                    filter["sort"];
        }
        if (true) {
            super.onChangeFilter(filter);
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onUpdateClickAsync(item) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const useCustomModalComponent = this.modalUpdate.component || this.modalItem.component;
            /** @type {?} */
            let modalRef = !useCustomModalComponent
                ? yield this.createUpdateModal(item)
                : undefined;
            if (!modalRef) {
                modalRef = yield this.defaultCreateUpdateModal(item);
                if (isDevMode() && !useCustomModalComponent) {
                    console.warn('Method "createUpdateModal" is not defined', this);
                }
            }
            modalRef.instance.yes.subscribe((modal) => {
                modal.processing = true;
                this.repository.update(item.id, modal.getData()).subscribe(updatedItem => {
                    modal.processing = false;
                    if (this.mockedItems) {
                        this.mockedItems = this.repository.items;
                        this.mockedItemsChange.emit(this.mockedItems);
                    }
                    modal.hide();
                }, error => this.onUpdateError(modal, error));
            });
        });
    }
};
CustomEntitiesListComponent.decorators = [
    { type: Component, args: [{
                selector: "custom-entities-list",
                template: "<entity-list\n  [bindIO]\n  [items]=\"items$ | async\"\n  [columns]=\"['title', 'name', 'action']\"\n  [enableCreate]=\"'add_custom-entity' | perm: false | async\"\n  [enableUpdate]=\"'change_custom-entity' | perm: false | async\"\n  [enableDelete]=\"'delete_custom-entity' | perm: false | async\"\n  #list\n>\n  <ng-content></ng-content>\n</entity-list>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CustomEntitiesListComponent.ctorParameters = () => [
    { type: ModalsService },
    { type: ErrorsExtractor },
    { type: TranslateService },
    { type: DynamicRepository },
    { type: undefined, decorators: [{ type: Inject, args: [CUSTOM_ENTITIES_CONFIG_TOKEN,] }] },
    { type: CustomEntitiesListFiltersModalService }
];
CustomEntitiesListComponent.propDecorators = {
    list: [{ type: ViewChild, args: ["list",] }],
    modalItem: [{ type: Input }],
    modalView: [{ type: Input }],
    title: [{ type: Input }]
};
CustomEntitiesListComponent = tslib_1.__decorate([
    BindIoInner(),
    tslib_1.__metadata("design:paramtypes", [ModalsService,
        ErrorsExtractor,
        TranslateService,
        DynamicRepository, Object, CustomEntitiesListFiltersModalService])
], CustomEntitiesListComponent);
export { CustomEntitiesListComponent };
if (false) {
    /** @type {?} */
    CustomEntitiesListComponent.prototype.list;
    /** @type {?} */
    CustomEntitiesListComponent.prototype.modalItem;
    /** @type {?} */
    CustomEntitiesListComponent.prototype.modalView;
    /** @type {?} */
    CustomEntitiesListComponent.prototype.title;
    /**
     * @type {?}
     * @protected
     */
    CustomEntitiesListComponent.prototype.errorsExtractor;
    /**
     * @type {?}
     * @protected
     */
    CustomEntitiesListComponent.prototype.translateService;
    /**
     * @type {?}
     * @protected
     */
    CustomEntitiesListComponent.prototype.dynamicRepository;
    /**
     * @type {?}
     * @protected
     */
    CustomEntitiesListComponent.prototype.customEntitiesConfig;
    /**
     * @type {?}
     * @private
     */
    CustomEntitiesListComponent.prototype._customEntitiesListFiltersModalService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVudGl0aWVzLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGN1c3RvbS1vcmcvY3VzdG9tLWxpYi1pb25pYy8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9jdXN0b20tZW50aXRpZXMvY3VzdG9tLWVudGl0aWVzLWxpc3QvY3VzdG9tLWVudGl0aWVzLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsTUFBTSxFQUNOLEtBQUssRUFDTCxTQUFTLEVBSVQsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsZUFBZSxFQUdmLFdBQVcsRUFDWCxhQUFhLEVBQ2IsU0FBUyxFQUNWLE1BQU0sY0FBYyxDQUFDO0FBQ3RCLE9BQU8sRUFBRSxtQkFBbUIsRUFBc0IsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBQ3pILE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLG1GQUFtRixDQUFDO0FBQzVJLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLGlGQUFpRixDQUFDO0lBUTNILDJCQUEyQixTQUEzQiwyQkFDWCxTQUFRLHVCQUFxQzs7Ozs7Ozs7O0lB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QUEyQjs7O0lBR3RDLDJDQUN3Qzs7SUFDeEMsZ0RBUUU7O0lBQ0YsZ0RBU0U7O0lBQ0YsNENBQ3FDOzs7OztJQUluQyxzREFBMEM7Ozs7O0lBQzFDLHVEQUE0Qzs7Ozs7SUFDNUMsd0RBQThDOzs7OztJQUM5QywyREFDa0U7Ozs7O0lBQ2xFLDZFQUFxRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIGlzRGV2TW9kZSxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gXCJAbmd4LXRyYW5zbGF0ZS9jb3JlXCI7XG5pbXBvcnQge1xuICBCYXNlRW50aXR5TGlzdENvbXBvbmVudCxcbiAgQmFzZVByb21wdEZvcm1Nb2RhbENvbXBvbmVudCxcbiAgRXJyb3JzRXh0cmFjdG9yLFxuICBJQmFzZUVudGl0eUdyaWRGaWx0ZXIsXG4gIElCYXNlRW50aXR5TW9kYWxPcHRpb25zLFxuICBpbnRlcnBvbGF0ZSxcbiAgTW9kYWxzU2VydmljZSxcbiAgdHJhbnNsYXRlXG59IGZyb20gXCJAcnVja2VuL2NvcmVcIjtcbmltcG9ydCB7IEVudGl0eUxpc3RDb21wb25lbnQsIElvbmljTW9kYWxzU2VydmljZSB9IGZyb20gXCJAcnVja2VuL2lvbmljXCI7XG5pbXBvcnQgeyBDVVNUT01fRU5USVRJRVNfQ09ORklHX1RPS0VOIH0gZnJvbSBcIkBjdXN0b20tb3JnL2N1c3RvbS1saWJcIjtcbmltcG9ydCB7IEJpbmRJb0lubmVyIH0gZnJvbSBcIm5neC1iaW5kLWlvXCI7XG5pbXBvcnQgeyBEeW5hbWljUmVwb3NpdG9yeSwgSVJlc3RQcm92aWRlck9wdGlvbnMgfSBmcm9tIFwibmd4LXJlcG9zaXRvcnlcIjtcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgQ3VzdG9tRW50aXR5IH0gZnJvbSBcIkBjdXN0b20tb3JnL2N1c3RvbS1saWJcIjtcbmltcG9ydCB7IEN1c3RvbUVudGl0eU1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4uL2N1c3RvbS1lbnRpdHktbW9kYWwvY3VzdG9tLWVudGl0eS1tb2RhbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbCB9IGZyb20gXCIuL2N1c3RvbS1lbnRpdGllcy1saXN0LWZpbHRlcnMtbW9kYWwvY3VzdG9tLWVudGl0aWVzLWxpc3QtZmlsdGVycy1tb2RhbFwiO1xuaW1wb3J0IHsgQ3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4vY3VzdG9tLWVudGl0aWVzLWxpc3QtZmlsdGVycy1tb2RhbC9jdXN0b20tZW50aXRpZXMtbGlzdC1maWx0ZXJzLW1vZGFsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsU2VydmljZSB9IGZyb20gXCIuL2N1c3RvbS1lbnRpdGllcy1saXN0LWZpbHRlcnMtbW9kYWwvY3VzdG9tLWVudGl0aWVzLWxpc3QtZmlsdGVycy1tb2RhbC5zZXJ2aWNlXCI7XG5cbkBCaW5kSW9Jbm5lcigpXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiY3VzdG9tLWVudGl0aWVzLWxpc3RcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9jdXN0b20tZW50aXRpZXMtbGlzdC5jb21wb25lbnQuaHRtbFwiLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21FbnRpdGllc0xpc3RDb21wb25lbnRcbiAgZXh0ZW5kcyBCYXNlRW50aXR5TGlzdENvbXBvbmVudDxDdXN0b21FbnRpdHk+XG4gIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZChcImxpc3RcIilcbiAgbGlzdDogRW50aXR5TGlzdENvbXBvbmVudDxDdXN0b21FbnRpdHk+O1xuICBASW5wdXQoKVxuICBtb2RhbEl0ZW06IElCYXNlRW50aXR5TW9kYWxPcHRpb25zID0ge1xuICAgIGNsYXNzOiBcInByaW1hcnlcIixcbiAgICBjb21wb25lbnQ6IEN1c3RvbUVudGl0eU1vZGFsQ29tcG9uZW50LFxuICAgIGluaXRpYWxTdGF0ZToge1xuICAgICAgaGlkZVllczogdHJ1ZSxcbiAgICAgIGhpZGVObzogdHJ1ZVxuICAgIH1cbiAgfTtcbiAgQElucHV0KClcbiAgbW9kYWxWaWV3OiBJQmFzZUVudGl0eU1vZGFsT3B0aW9ucyA9IHtcbiAgICBjbGFzczogXCJtZWRpdW1cIixcbiAgICBjb21wb25lbnQ6IEN1c3RvbUVudGl0eU1vZGFsQ29tcG9uZW50LFxuICAgIGluaXRpYWxTdGF0ZToge1xuICAgICAgbm9DbGFzczogXCJtZWRpdW1cIixcbiAgICAgIGhpZGVZZXM6IHRydWUsXG4gICAgICBoaWRlTm86IHRydWVcbiAgICB9XG4gIH07XG4gIEBJbnB1dCgpXG4gIHRpdGxlID0gdHJhbnNsYXRlKFwiQ3VzdG9tIGVudGl0aWVzXCIpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIG1vZGFsc1NlcnZpY2U6IE1vZGFsc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGVycm9yc0V4dHJhY3RvcjogRXJyb3JzRXh0cmFjdG9yLFxuICAgIHByb3RlY3RlZCB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBkeW5hbWljUmVwb3NpdG9yeTogRHluYW1pY1JlcG9zaXRvcnksXG4gICAgQEluamVjdChDVVNUT01fRU5USVRJRVNfQ09ORklHX1RPS0VOKVxuICAgIHByb3RlY3RlZCBjdXN0b21FbnRpdGllc0NvbmZpZzogSVJlc3RQcm92aWRlck9wdGlvbnM8Q3VzdG9tRW50aXR5PixcbiAgICBwcml2YXRlIF9jdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWxTZXJ2aWNlOiBDdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWxTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKFxuICAgICAgZHluYW1pY1JlcG9zaXRvcnkuZm9yazxDdXN0b21FbnRpdHk+KEN1c3RvbUVudGl0eSksXG4gICAgICBtb2RhbHNTZXJ2aWNlLFxuICAgICAgQ3VzdG9tRW50aXR5XG4gICAgKTtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMubW9ja2VkSXRlbXMpIHtcbiAgICAgIHRoaXMudXNlUmVzdCh7XG4gICAgICAgIGFwaVVybDogdGhpcy5hcGlVcmwsXG4gICAgICAgIGluZmluaXR5OiB0cnVlLFxuICAgICAgICAuLi50aGlzLmN1c3RvbUVudGl0aWVzQ29uZmlnLFxuICAgICAgICBhdXRvbG9hZDogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5tb2NrZWRJdGVtcykge1xuICAgICAgdGhpcy51c2VNb2NrKHtcbiAgICAgICAgaXRlbXM6IHRoaXMubW9ja2VkSXRlbXMsXG4gICAgICAgIGluZmluaXR5OiB0cnVlLFxuICAgICAgICAuLi50aGlzLmN1c3RvbUVudGl0aWVzQ29uZmlnLFxuICAgICAgICBhdXRvbG9hZDogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLm9uQ2hhbmdlRmlsdGVyKCk7XG4gIH1cbiAgc2V0U2VhcmNoVGV4dChldmVudDogeyBkZXRhaWw6IHsgdmFsdWU6IHN0cmluZyB9IH0pIHtcbiAgICB0aGlzLmxpc3Quc2VhcmNoRmllbGQuc2V0VmFsdWUoZXZlbnQuZGV0YWlsLnZhbHVlKTtcbiAgfVxuICBhc3luYyBvbkRlbGV0ZUNsaWNrQXN5bmMoaXRlbTogQ3VzdG9tRW50aXR5KSB7XG4gICAgY29uc3QgdGl0bGUgPSBpbnRlcnBvbGF0ZShcbiAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KHRoaXMuc3RyaW5ncy5kZWxldGVUaXRsZSksXG4gICAgICBpdGVtXG4gICAgKTtcbiAgICBjb25zdCBtZXNzYWdlID0gaW50ZXJwb2xhdGUoXG4gICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudCh0aGlzLnN0cmluZ3MuZGVsZXRlTWVzc2FnZSksXG4gICAgICBpdGVtXG4gICAgKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgKHRoaXNcbiAgICAgICAgLm1vZGFsc1NlcnZpY2UgYXMgSW9uaWNNb2RhbHNTZXJ2aWNlKS5jb25maXJtQXN5bmMoe1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgbWVzc2FnZVxuICAgICAgfSk7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHRoaXMucmVwb3NpdG9yeS5kZWxldGUoaXRlbS5pZCkuc3Vic2NyaWJlKFxuICAgICAgICAgIGRlbGV0ZWRJdGVtID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1vY2tlZEl0ZW1zKSB7XG4gICAgICAgICAgICAgIHRoaXMubW9ja2VkSXRlbXMgPSB0aGlzLnJlcG9zaXRvcnkuaXRlbXM7XG4gICAgICAgICAgICAgIHRoaXMubW9ja2VkSXRlbXNDaGFuZ2UuZW1pdCh0aGlzLm1vY2tlZEl0ZW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycm9yID0+IHRoaXMub25FcnJvcihlcnJvcilcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG4gIGFzeW5jIGNyZWF0ZUZpbHRlcnNNb2RhbChpdGVtPzogQ3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsKSB7XG4gICAgaXRlbSA9IGl0ZW0gfHwgbmV3IEN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbCgpO1xuICAgIGNvbnN0IG1vZGFsUmVmID0gYXdhaXQgdGhpcy5tb2RhbHNTZXJ2aWNlLmNyZWF0ZUFzeW5jPFxuICAgICAgQ3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsQ29tcG9uZW50XG4gICAgPihDdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWxDb21wb25lbnQsIHtcbiAgICAgIGNsYXNzOiBcInNlY29uZGFyeVwiLFxuICAgICAgaW5pdGlhbFN0YXRlOiB7XG4gICAgICAgIHRpdGxlOiB0cmFuc2xhdGUoXCJDdXN0b20gZW50aXRpZXMgZmlsdGVyc1wiKSxcbiAgICAgICAgZGF0YTogaXRlbVxuICAgICAgfVxuICAgIH0pO1xuICAgIG1vZGFsUmVmLmluc3RhbmNlLmdyb3VwKEN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbCk7XG4gICAgbW9kYWxSZWYuaW5zdGFuY2UuZGF0YSA9IGl0ZW07XG4gICAgcmV0dXJuIG1vZGFsUmVmO1xuICB9XG4gIGFzeW5jIG9uRmlsdGVyQ2xpY2tBc3luYyhkYXRhPzogYW55KSB7XG4gICAgY29uc3QgbW9kYWxSZWYgPSBhd2FpdCB0aGlzLmNyZWF0ZUZpbHRlcnNNb2RhbChkYXRhKTtcbiAgICBtb2RhbFJlZi5pbnN0YW5jZS55ZXMuc3Vic2NyaWJlKFxuICAgICAgKG1vZGFsOiBDdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWxDb21wb25lbnQpID0+IHtcbiAgICAgICAgbW9kYWwuaGlkZSgpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlRmlsdGVyKCk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuICBvbkZpbHRlckNsaWNrKGRhdGE/OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uRmlsdGVyQ2xpY2tBc3luYyhkYXRhKS50aGVuKCk7XG4gIH1cbiAgb25DaGFuZ2VGaWx0ZXIoZmlsdGVyPzogSUJhc2VFbnRpdHlHcmlkRmlsdGVyKSB7XG4gICAgaWYgKCFmaWx0ZXIpIHtcbiAgICAgIGZpbHRlciA9IHt9O1xuICAgIH1cbiAgICBjb25zdCBjdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWwgPSB0aGlzLl9jdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWxTZXJ2aWNlLmdldEN1cnJlbnQoKTtcbiAgICBpZiAoY3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsLnNvcnRGaWVsZCkge1xuICAgICAgZmlsdGVyW1wic29ydFwiXSA9IGN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbC5zb3J0RmllbGQuaWQ7XG4gICAgfVxuICAgIGlmIChjdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWwuc29ydFR5cGUpIHtcbiAgICAgIGZpbHRlcltcInNvcnRcIl0gPVxuICAgICAgICAoY3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsLnNvcnRUeXBlLmlkID09PSBcImFzY1wiID8gXCJcIiA6IFwiLVwiKSArXG4gICAgICAgIGZpbHRlcltcInNvcnRcIl07XG4gICAgfVxuICAgIGlmICh0cnVlKSB7XG4gICAgICBzdXBlci5vbkNoYW5nZUZpbHRlcihmaWx0ZXIpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIG9uVXBkYXRlQ2xpY2tBc3luYyhpdGVtOiBDdXN0b21FbnRpdHkpIHtcbiAgICBjb25zdCB1c2VDdXN0b21Nb2RhbENvbXBvbmVudCA9XG4gICAgICB0aGlzLm1vZGFsVXBkYXRlLmNvbXBvbmVudCB8fCB0aGlzLm1vZGFsSXRlbS5jb21wb25lbnQ7XG4gICAgbGV0IG1vZGFsUmVmID0gIXVzZUN1c3RvbU1vZGFsQ29tcG9uZW50XG4gICAgICA/IGF3YWl0IHRoaXMuY3JlYXRlVXBkYXRlTW9kYWwoaXRlbSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIGlmICghbW9kYWxSZWYpIHtcbiAgICAgIG1vZGFsUmVmID0gYXdhaXQgdGhpcy5kZWZhdWx0Q3JlYXRlVXBkYXRlTW9kYWwoaXRlbSk7XG4gICAgICBpZiAoaXNEZXZNb2RlKCkgJiYgIXVzZUN1c3RvbU1vZGFsQ29tcG9uZW50KSB7XG4gICAgICAgIGNvbnNvbGUud2FybignTWV0aG9kIFwiY3JlYXRlVXBkYXRlTW9kYWxcIiBpcyBub3QgZGVmaW5lZCcsIHRoaXMpO1xuICAgICAgfVxuICAgIH1cbiAgICBtb2RhbFJlZi5pbnN0YW5jZS55ZXMuc3Vic2NyaWJlKFxuICAgICAgKG1vZGFsOiBCYXNlUHJvbXB0Rm9ybU1vZGFsQ29tcG9uZW50PEN1c3RvbUVudGl0eT4pID0+IHtcbiAgICAgICAgbW9kYWwucHJvY2Vzc2luZyA9IHRydWU7XG4gICAgICAgIHRoaXMucmVwb3NpdG9yeS51cGRhdGUoaXRlbS5pZCwgbW9kYWwuZ2V0RGF0YSgpKS5zdWJzY3JpYmUoXG4gICAgICAgICAgdXBkYXRlZEl0ZW0gPT4ge1xuICAgICAgICAgICAgbW9kYWwucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHRoaXMubW9ja2VkSXRlbXMpIHtcbiAgICAgICAgICAgICAgdGhpcy5tb2NrZWRJdGVtcyA9IHRoaXMucmVwb3NpdG9yeS5pdGVtcztcbiAgICAgICAgICAgICAgdGhpcy5tb2NrZWRJdGVtc0NoYW5nZS5lbWl0KHRoaXMubW9ja2VkSXRlbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbW9kYWwuaGlkZSgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3IgPT4gdGhpcy5vblVwZGF0ZUVycm9yKG1vZGFsLCBlcnJvcilcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG59XG4iXX0=