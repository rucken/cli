/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    this.repository.delete(item.id).subscribe((/**
                     * @param {?} deletedItem
                     * @return {?}
                     */
                    deletedItem => {
                        if (this.mockedItems) {
                            this.mockedItems = this.repository.items;
                            this.mockedItemsChange.emit(this.mockedItems);
                        }
                    }), (/**
                     * @param {?} error
                     * @return {?}
                     */
                    error => this.onError(error)));
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
            modalRef.instance.yes.subscribe((/**
             * @param {?} modal
             * @return {?}
             */
            (modal) => {
                modal.hide();
                this.onChangeFilter();
            }));
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
            modalRef.instance.yes.subscribe((/**
             * @param {?} modal
             * @return {?}
             */
            (modal) => {
                modal.processing = true;
                this.repository.update(item.id, modal.getData()).subscribe((/**
                 * @param {?} updatedItem
                 * @return {?}
                 */
                updatedItem => {
                    modal.processing = false;
                    if (this.mockedItems) {
                        this.mockedItems = this.repository.items;
                        this.mockedItemsChange.emit(this.mockedItems);
                    }
                    modal.hide();
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                error => this.onUpdateError(modal, error)));
            }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVudGl0aWVzLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGN1c3RvbS1vcmcvY3VzdG9tLWxpYi1pb25pYy8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9jdXN0b20tZW50aXRpZXMvY3VzdG9tLWVudGl0aWVzLWxpc3QvY3VzdG9tLWVudGl0aWVzLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsTUFBTSxFQUNOLEtBQUssRUFDTCxTQUFTLEVBSVQsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsZUFBZSxFQUdmLFdBQVcsRUFDWCxhQUFhLEVBQ2IsU0FBUyxFQUNWLE1BQU0sY0FBYyxDQUFDO0FBQ3RCLE9BQU8sRUFBRSxtQkFBbUIsRUFBc0IsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBQ3pILE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLG1GQUFtRixDQUFDO0FBQzVJLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLGlGQUFpRixDQUFDO0lBUTNILDJCQUEyQixTQUEzQiwyQkFDWCxTQUFRLHVCQUFxQzs7Ozs7Ozs7O0lB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MkJBQTJCLENBd0t2QztTQXhLWSwyQkFBMkI7OztJQUd0QywyQ0FDd0M7O0lBQ3hDLGdEQVFFOztJQUNGLGdEQVNFOztJQUNGLDRDQUNxQzs7Ozs7SUFJbkMsc0RBQTBDOzs7OztJQUMxQyx1REFBNEM7Ozs7O0lBQzVDLHdEQUE4Qzs7Ozs7SUFDOUMsMkRBQ2tFOzs7OztJQUNsRSw2RUFBcUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbmplY3QsXG4gIElucHV0LFxuICBpc0Rldk1vZGUsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tIFwiQG5neC10cmFuc2xhdGUvY29yZVwiO1xuaW1wb3J0IHtcbiAgQmFzZUVudGl0eUxpc3RDb21wb25lbnQsXG4gIEJhc2VQcm9tcHRGb3JtTW9kYWxDb21wb25lbnQsXG4gIEVycm9yc0V4dHJhY3RvcixcbiAgSUJhc2VFbnRpdHlHcmlkRmlsdGVyLFxuICBJQmFzZUVudGl0eU1vZGFsT3B0aW9ucyxcbiAgaW50ZXJwb2xhdGUsXG4gIE1vZGFsc1NlcnZpY2UsXG4gIHRyYW5zbGF0ZVxufSBmcm9tIFwiQHJ1Y2tlbi9jb3JlXCI7XG5pbXBvcnQgeyBFbnRpdHlMaXN0Q29tcG9uZW50LCBJb25pY01vZGFsc1NlcnZpY2UgfSBmcm9tIFwiQHJ1Y2tlbi9pb25pY1wiO1xuaW1wb3J0IHsgQ1VTVE9NX0VOVElUSUVTX0NPTkZJR19UT0tFTiB9IGZyb20gXCJAY3VzdG9tLW9yZy9jdXN0b20tbGliXCI7XG5pbXBvcnQgeyBCaW5kSW9Jbm5lciB9IGZyb20gXCJuZ3gtYmluZC1pb1wiO1xuaW1wb3J0IHsgRHluYW1pY1JlcG9zaXRvcnksIElSZXN0UHJvdmlkZXJPcHRpb25zIH0gZnJvbSBcIm5neC1yZXBvc2l0b3J5XCI7XG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7IEN1c3RvbUVudGl0eSB9IGZyb20gXCJAY3VzdG9tLW9yZy9jdXN0b20tbGliXCI7XG5pbXBvcnQgeyBDdXN0b21FbnRpdHlNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuLi9jdXN0b20tZW50aXR5LW1vZGFsL2N1c3RvbS1lbnRpdHktbW9kYWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWwgfSBmcm9tIFwiLi9jdXN0b20tZW50aXRpZXMtbGlzdC1maWx0ZXJzLW1vZGFsL2N1c3RvbS1lbnRpdGllcy1saXN0LWZpbHRlcnMtbW9kYWxcIjtcbmltcG9ydCB7IEN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuL2N1c3RvbS1lbnRpdGllcy1saXN0LWZpbHRlcnMtbW9kYWwvY3VzdG9tLWVudGl0aWVzLWxpc3QtZmlsdGVycy1tb2RhbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbFNlcnZpY2UgfSBmcm9tIFwiLi9jdXN0b20tZW50aXRpZXMtbGlzdC1maWx0ZXJzLW1vZGFsL2N1c3RvbS1lbnRpdGllcy1saXN0LWZpbHRlcnMtbW9kYWwuc2VydmljZVwiO1xuXG5AQmluZElvSW5uZXIoKVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImN1c3RvbS1lbnRpdGllcy1saXN0XCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vY3VzdG9tLWVudGl0aWVzLWxpc3QuY29tcG9uZW50Lmh0bWxcIixcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tRW50aXRpZXNMaXN0Q29tcG9uZW50XG4gIGV4dGVuZHMgQmFzZUVudGl0eUxpc3RDb21wb25lbnQ8Q3VzdG9tRW50aXR5PlxuICBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoXCJsaXN0XCIpXG4gIGxpc3Q6IEVudGl0eUxpc3RDb21wb25lbnQ8Q3VzdG9tRW50aXR5PjtcbiAgQElucHV0KClcbiAgbW9kYWxJdGVtOiBJQmFzZUVudGl0eU1vZGFsT3B0aW9ucyA9IHtcbiAgICBjbGFzczogXCJwcmltYXJ5XCIsXG4gICAgY29tcG9uZW50OiBDdXN0b21FbnRpdHlNb2RhbENvbXBvbmVudCxcbiAgICBpbml0aWFsU3RhdGU6IHtcbiAgICAgIGhpZGVZZXM6IHRydWUsXG4gICAgICBoaWRlTm86IHRydWVcbiAgICB9XG4gIH07XG4gIEBJbnB1dCgpXG4gIG1vZGFsVmlldzogSUJhc2VFbnRpdHlNb2RhbE9wdGlvbnMgPSB7XG4gICAgY2xhc3M6IFwibWVkaXVtXCIsXG4gICAgY29tcG9uZW50OiBDdXN0b21FbnRpdHlNb2RhbENvbXBvbmVudCxcbiAgICBpbml0aWFsU3RhdGU6IHtcbiAgICAgIG5vQ2xhc3M6IFwibWVkaXVtXCIsXG4gICAgICBoaWRlWWVzOiB0cnVlLFxuICAgICAgaGlkZU5vOiB0cnVlXG4gICAgfVxuICB9O1xuICBASW5wdXQoKVxuICB0aXRsZSA9IHRyYW5zbGF0ZShcIkN1c3RvbSBlbnRpdGllc1wiKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBtb2RhbHNTZXJ2aWNlOiBNb2RhbHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBlcnJvcnNFeHRyYWN0b3I6IEVycm9yc0V4dHJhY3RvcixcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZHluYW1pY1JlcG9zaXRvcnk6IER5bmFtaWNSZXBvc2l0b3J5LFxuICAgIEBJbmplY3QoQ1VTVE9NX0VOVElUSUVTX0NPTkZJR19UT0tFTilcbiAgICBwcm90ZWN0ZWQgY3VzdG9tRW50aXRpZXNDb25maWc6IElSZXN0UHJvdmlkZXJPcHRpb25zPEN1c3RvbUVudGl0eT4sXG4gICAgcHJpdmF0ZSBfY3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsU2VydmljZTogQ3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsU2VydmljZVxuICApIHtcbiAgICBzdXBlcihcbiAgICAgIGR5bmFtaWNSZXBvc2l0b3J5LmZvcms8Q3VzdG9tRW50aXR5PihDdXN0b21FbnRpdHkpLFxuICAgICAgbW9kYWxzU2VydmljZSxcbiAgICAgIEN1c3RvbUVudGl0eVxuICAgICk7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLm1vY2tlZEl0ZW1zKSB7XG4gICAgICB0aGlzLnVzZVJlc3Qoe1xuICAgICAgICBhcGlVcmw6IHRoaXMuYXBpVXJsLFxuICAgICAgICBpbmZpbml0eTogdHJ1ZSxcbiAgICAgICAgLi4udGhpcy5jdXN0b21FbnRpdGllc0NvbmZpZyxcbiAgICAgICAgYXV0b2xvYWQ6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMubW9ja2VkSXRlbXMpIHtcbiAgICAgIHRoaXMudXNlTW9jayh7XG4gICAgICAgIGl0ZW1zOiB0aGlzLm1vY2tlZEl0ZW1zLFxuICAgICAgICBpbmZpbml0eTogdHJ1ZSxcbiAgICAgICAgLi4udGhpcy5jdXN0b21FbnRpdGllc0NvbmZpZyxcbiAgICAgICAgYXV0b2xvYWQ6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5vbkNoYW5nZUZpbHRlcigpO1xuICB9XG4gIHNldFNlYXJjaFRleHQoZXZlbnQ6IHsgZGV0YWlsOiB7IHZhbHVlOiBzdHJpbmcgfSB9KSB7XG4gICAgdGhpcy5saXN0LnNlYXJjaEZpZWxkLnNldFZhbHVlKGV2ZW50LmRldGFpbC52YWx1ZSk7XG4gIH1cbiAgYXN5bmMgb25EZWxldGVDbGlja0FzeW5jKGl0ZW06IEN1c3RvbUVudGl0eSkge1xuICAgIGNvbnN0IHRpdGxlID0gaW50ZXJwb2xhdGUoXG4gICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudCh0aGlzLnN0cmluZ3MuZGVsZXRlVGl0bGUpLFxuICAgICAgaXRlbVxuICAgICk7XG4gICAgY29uc3QgbWVzc2FnZSA9IGludGVycG9sYXRlKFxuICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQodGhpcy5zdHJpbmdzLmRlbGV0ZU1lc3NhZ2UpLFxuICAgICAgaXRlbVxuICAgICk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0ICh0aGlzXG4gICAgICAgIC5tb2RhbHNTZXJ2aWNlIGFzIElvbmljTW9kYWxzU2VydmljZSkuY29uZmlybUFzeW5jKHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIG1lc3NhZ2VcbiAgICAgIH0pO1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICB0aGlzLnJlcG9zaXRvcnkuZGVsZXRlKGl0ZW0uaWQpLnN1YnNjcmliZShcbiAgICAgICAgICBkZWxldGVkSXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5tb2NrZWRJdGVtcykge1xuICAgICAgICAgICAgICB0aGlzLm1vY2tlZEl0ZW1zID0gdGhpcy5yZXBvc2l0b3J5Lml0ZW1zO1xuICAgICAgICAgICAgICB0aGlzLm1vY2tlZEl0ZW1zQ2hhbmdlLmVtaXQodGhpcy5tb2NrZWRJdGVtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvciA9PiB0aGlzLm9uRXJyb3IoZXJyb3IpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxuICBhc3luYyBjcmVhdGVGaWx0ZXJzTW9kYWwoaXRlbT86IEN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbCkge1xuICAgIGl0ZW0gPSBpdGVtIHx8IG5ldyBDdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWwoKTtcbiAgICBjb25zdCBtb2RhbFJlZiA9IGF3YWl0IHRoaXMubW9kYWxzU2VydmljZS5jcmVhdGVBc3luYzxcbiAgICAgIEN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbENvbXBvbmVudFxuICAgID4oQ3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsQ29tcG9uZW50LCB7XG4gICAgICBjbGFzczogXCJzZWNvbmRhcnlcIixcbiAgICAgIGluaXRpYWxTdGF0ZToge1xuICAgICAgICB0aXRsZTogdHJhbnNsYXRlKFwiQ3VzdG9tIGVudGl0aWVzIGZpbHRlcnNcIiksXG4gICAgICAgIGRhdGE6IGl0ZW1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBtb2RhbFJlZi5pbnN0YW5jZS5ncm91cChDdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWwpO1xuICAgIG1vZGFsUmVmLmluc3RhbmNlLmRhdGEgPSBpdGVtO1xuICAgIHJldHVybiBtb2RhbFJlZjtcbiAgfVxuICBhc3luYyBvbkZpbHRlckNsaWNrQXN5bmMoZGF0YT86IGFueSkge1xuICAgIGNvbnN0IG1vZGFsUmVmID0gYXdhaXQgdGhpcy5jcmVhdGVGaWx0ZXJzTW9kYWwoZGF0YSk7XG4gICAgbW9kYWxSZWYuaW5zdGFuY2UueWVzLnN1YnNjcmliZShcbiAgICAgIChtb2RhbDogQ3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsQ29tcG9uZW50KSA9PiB7XG4gICAgICAgIG1vZGFsLmhpZGUoKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZUZpbHRlcigpO1xuICAgICAgfVxuICAgICk7XG4gIH1cbiAgb25GaWx0ZXJDbGljayhkYXRhPzogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkZpbHRlckNsaWNrQXN5bmMoZGF0YSkudGhlbigpO1xuICB9XG4gIG9uQ2hhbmdlRmlsdGVyKGZpbHRlcj86IElCYXNlRW50aXR5R3JpZEZpbHRlcikge1xuICAgIGlmICghZmlsdGVyKSB7XG4gICAgICBmaWx0ZXIgPSB7fTtcbiAgICB9XG4gICAgY29uc3QgY3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsID0gdGhpcy5fY3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsU2VydmljZS5nZXRDdXJyZW50KCk7XG4gICAgaWYgKGN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbC5zb3J0RmllbGQpIHtcbiAgICAgIGZpbHRlcltcInNvcnRcIl0gPSBjdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWwuc29ydEZpZWxkLmlkO1xuICAgIH1cbiAgICBpZiAoY3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsLnNvcnRUeXBlKSB7XG4gICAgICBmaWx0ZXJbXCJzb3J0XCJdID1cbiAgICAgICAgKGN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbC5zb3J0VHlwZS5pZCA9PT0gXCJhc2NcIiA/IFwiXCIgOiBcIi1cIikgK1xuICAgICAgICBmaWx0ZXJbXCJzb3J0XCJdO1xuICAgIH1cbiAgICBpZiAodHJ1ZSkge1xuICAgICAgc3VwZXIub25DaGFuZ2VGaWx0ZXIoZmlsdGVyKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBvblVwZGF0ZUNsaWNrQXN5bmMoaXRlbTogQ3VzdG9tRW50aXR5KSB7XG4gICAgY29uc3QgdXNlQ3VzdG9tTW9kYWxDb21wb25lbnQgPVxuICAgICAgdGhpcy5tb2RhbFVwZGF0ZS5jb21wb25lbnQgfHwgdGhpcy5tb2RhbEl0ZW0uY29tcG9uZW50O1xuICAgIGxldCBtb2RhbFJlZiA9ICF1c2VDdXN0b21Nb2RhbENvbXBvbmVudFxuICAgICAgPyBhd2FpdCB0aGlzLmNyZWF0ZVVwZGF0ZU1vZGFsKGl0ZW0pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBpZiAoIW1vZGFsUmVmKSB7XG4gICAgICBtb2RhbFJlZiA9IGF3YWl0IHRoaXMuZGVmYXVsdENyZWF0ZVVwZGF0ZU1vZGFsKGl0ZW0pO1xuICAgICAgaWYgKGlzRGV2TW9kZSgpICYmICF1c2VDdXN0b21Nb2RhbENvbXBvbmVudCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ01ldGhvZCBcImNyZWF0ZVVwZGF0ZU1vZGFsXCIgaXMgbm90IGRlZmluZWQnLCB0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbW9kYWxSZWYuaW5zdGFuY2UueWVzLnN1YnNjcmliZShcbiAgICAgIChtb2RhbDogQmFzZVByb21wdEZvcm1Nb2RhbENvbXBvbmVudDxDdXN0b21FbnRpdHk+KSA9PiB7XG4gICAgICAgIG1vZGFsLnByb2Nlc3NpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlcG9zaXRvcnkudXBkYXRlKGl0ZW0uaWQsIG1vZGFsLmdldERhdGEoKSkuc3Vic2NyaWJlKFxuICAgICAgICAgIHVwZGF0ZWRJdGVtID0+IHtcbiAgICAgICAgICAgIG1vZGFsLnByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICh0aGlzLm1vY2tlZEl0ZW1zKSB7XG4gICAgICAgICAgICAgIHRoaXMubW9ja2VkSXRlbXMgPSB0aGlzLnJlcG9zaXRvcnkuaXRlbXM7XG4gICAgICAgICAgICAgIHRoaXMubW9ja2VkSXRlbXNDaGFuZ2UuZW1pdCh0aGlzLm1vY2tlZEl0ZW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1vZGFsLmhpZGUoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycm9yID0+IHRoaXMub25VcGRhdGVFcnJvcihtb2RhbCwgZXJyb3IpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuIl19