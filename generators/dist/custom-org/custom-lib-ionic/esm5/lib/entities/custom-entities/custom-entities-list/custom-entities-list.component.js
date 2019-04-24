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
var CustomEntitiesListComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CustomEntitiesListComponent, _super);
    function CustomEntitiesListComponent(modalsService, errorsExtractor, translateService, dynamicRepository, customEntitiesConfig, _customEntitiesListFiltersModalService) {
        var _this = _super.call(this, dynamicRepository.fork(CustomEntity), modalsService, CustomEntity) || this;
        _this.errorsExtractor = errorsExtractor;
        _this.translateService = translateService;
        _this.dynamicRepository = dynamicRepository;
        _this.customEntitiesConfig = customEntitiesConfig;
        _this._customEntitiesListFiltersModalService = _customEntitiesListFiltersModalService;
        _this.modalItem = {
            class: "primary",
            component: CustomEntityModalComponent,
            initialState: {
                hideYes: true,
                hideNo: true
            }
        };
        _this.modalView = {
            class: "medium",
            component: CustomEntityModalComponent,
            initialState: {
                noClass: "medium",
                hideYes: true,
                hideNo: true
            }
        };
        _this.title = translate("Custom entities");
        return _this;
    }
    /**
     * @return {?}
     */
    CustomEntitiesListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.mockedItems) {
            this.useRest(tslib_1.__assign({ apiUrl: this.apiUrl, infinity: true }, this.customEntitiesConfig, { autoload: false }));
        }
        if (this.mockedItems) {
            this.useMock(tslib_1.__assign({ items: this.mockedItems, infinity: true }, this.customEntitiesConfig, { autoload: false }));
        }
        this.onChangeFilter();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CustomEntitiesListComponent.prototype.setSearchText = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.list.searchField.setValue(event.detail.value);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    CustomEntitiesListComponent.prototype.onDeleteClickAsync = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var title, message, result, error_1;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        title = interpolate(this.translateService.instant(this.strings.deleteTitle), item);
                        message = interpolate(this.translateService.instant(this.strings.deleteMessage), item);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, ((/** @type {?} */ (this
                                .modalsService))).confirmAsync({
                                title: title,
                                message: message
                            })];
                    case 2:
                        result = _a.sent();
                        if (result) {
                            this.repository.delete(item.id).subscribe((/**
                             * @param {?} deletedItem
                             * @return {?}
                             */
                            function (deletedItem) {
                                if (_this.mockedItems) {
                                    _this.mockedItems = _this.repository.items;
                                    _this.mockedItemsChange.emit(_this.mockedItems);
                                }
                            }), (/**
                             * @param {?} error
                             * @return {?}
                             */
                            function (error) { return _this.onError(error); }));
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        throw error_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {?=} item
     * @return {?}
     */
    CustomEntitiesListComponent.prototype.createFiltersModal = /**
     * @param {?=} item
     * @return {?}
     */
    function (item) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modalRef;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        item = item || new CustomEntitiesListFiltersModal();
                        return [4 /*yield*/, this.modalsService.createAsync(CustomEntitiesListFiltersModalComponent, {
                                class: "secondary",
                                initialState: {
                                    title: translate("Custom entities filters"),
                                    data: item
                                }
                            })];
                    case 1:
                        modalRef = _a.sent();
                        modalRef.instance.group(CustomEntitiesListFiltersModal);
                        modalRef.instance.data = item;
                        return [2 /*return*/, modalRef];
                }
            });
        });
    };
    /**
     * @param {?=} data
     * @return {?}
     */
    CustomEntitiesListComponent.prototype.onFilterClickAsync = /**
     * @param {?=} data
     * @return {?}
     */
    function (data) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modalRef;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createFiltersModal(data)];
                    case 1:
                        modalRef = _a.sent();
                        modalRef.instance.yes.subscribe((/**
                         * @param {?} modal
                         * @return {?}
                         */
                        function (modal) {
                            modal.hide();
                            _this.onChangeFilter();
                        }));
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {?=} data
     * @return {?}
     */
    CustomEntitiesListComponent.prototype.onFilterClick = /**
     * @param {?=} data
     * @return {?}
     */
    function (data) {
        this.onFilterClickAsync(data).then();
    };
    /**
     * @param {?=} filter
     * @return {?}
     */
    CustomEntitiesListComponent.prototype.onChangeFilter = /**
     * @param {?=} filter
     * @return {?}
     */
    function (filter) {
        if (!filter) {
            filter = {};
        }
        /** @type {?} */
        var customEntitiesListFiltersModal = this._customEntitiesListFiltersModalService.getCurrent();
        if (customEntitiesListFiltersModal.sortField) {
            filter["sort"] = customEntitiesListFiltersModal.sortField.id;
        }
        if (customEntitiesListFiltersModal.sortType) {
            filter["sort"] =
                (customEntitiesListFiltersModal.sortType.id === "asc" ? "" : "-") +
                    filter["sort"];
        }
        if (true) {
            _super.prototype.onChangeFilter.call(this, filter);
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    CustomEntitiesListComponent.prototype.onUpdateClickAsync = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var useCustomModalComponent, modalRef, _a;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        useCustomModalComponent = this.modalUpdate.component || this.modalItem.component;
                        if (!!useCustomModalComponent) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.createUpdateModal(item)];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = undefined;
                        _b.label = 3;
                    case 3:
                        modalRef = _a;
                        if (!!modalRef) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.defaultCreateUpdateModal(item)];
                    case 4:
                        modalRef = _b.sent();
                        if (isDevMode() && !useCustomModalComponent) {
                            console.warn('Method "createUpdateModal" is not defined', this);
                        }
                        _b.label = 5;
                    case 5:
                        modalRef.instance.yes.subscribe((/**
                         * @param {?} modal
                         * @return {?}
                         */
                        function (modal) {
                            modal.processing = true;
                            _this.repository.update(item.id, modal.getData()).subscribe((/**
                             * @param {?} updatedItem
                             * @return {?}
                             */
                            function (updatedItem) {
                                modal.processing = false;
                                if (_this.mockedItems) {
                                    _this.mockedItems = _this.repository.items;
                                    _this.mockedItemsChange.emit(_this.mockedItems);
                                }
                                modal.hide();
                            }), (/**
                             * @param {?} error
                             * @return {?}
                             */
                            function (error) { return _this.onUpdateError(modal, error); }));
                        }));
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomEntitiesListComponent.decorators = [
        { type: Component, args: [{
                    selector: "custom-entities-list",
                    template: "<entity-list\n  [bindIO]\n  [items]=\"items$ | async\"\n  [columns]=\"['title', 'name', 'action']\"\n  [enableCreate]=\"'add_custom-entity' | perm: false | async\"\n  [enableUpdate]=\"'change_custom-entity' | perm: false | async\"\n  [enableDelete]=\"'delete_custom-entity' | perm: false | async\"\n  #list\n>\n  <ng-content></ng-content>\n</entity-list>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    CustomEntitiesListComponent.ctorParameters = function () { return [
        { type: ModalsService },
        { type: ErrorsExtractor },
        { type: TranslateService },
        { type: DynamicRepository },
        { type: undefined, decorators: [{ type: Inject, args: [CUSTOM_ENTITIES_CONFIG_TOKEN,] }] },
        { type: CustomEntitiesListFiltersModalService }
    ]; };
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
    return CustomEntitiesListComponent;
}(BaseEntityListComponent));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVudGl0aWVzLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGN1c3RvbS1vcmcvY3VzdG9tLWxpYi1pb25pYy8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9jdXN0b20tZW50aXRpZXMvY3VzdG9tLWVudGl0aWVzLWxpc3QvY3VzdG9tLWVudGl0aWVzLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsTUFBTSxFQUNOLEtBQUssRUFDTCxTQUFTLEVBSVQsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsZUFBZSxFQUdmLFdBQVcsRUFDWCxhQUFhLEVBQ2IsU0FBUyxFQUNWLE1BQU0sY0FBYyxDQUFDO0FBQ3RCLE9BQU8sRUFBRSxtQkFBbUIsRUFBc0IsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBQ3pILE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLG1GQUFtRixDQUFDO0FBQzVJLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLGlGQUFpRixDQUFDOztJQVM5SCx1REFBcUM7SUEwQjdDLHFDQUNFLGFBQTRCLEVBQ2xCLGVBQWdDLEVB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QUVoQixLQUFLOzRCQVNMLEtBQUs7d0JBVUwsS0FBSzs7SUF4QkssMkJBQTJCO1FBTnZDLFdBQVcsRUFBRTtpREFrQ0ssYUFBYTtZQUNELGVBQWU7WUFDZCxnQkFBZ0I7WUFDZixpQkFBaUIsVUFHRSxxQ0FBcUM7T0FsQzVFLDJCQUEyQixDQXdLdkM7SUFBRCxrQ0FBQztDQUFBLENBdktTLHVCQUF1QixHQXVLaEM7U0F4S1ksMkJBQTJCOzs7SUFHdEMsMkNBQ3dDOztJQUN4QyxnREFRRTs7SUFDRixnREFTRTs7SUFDRiw0Q0FDcUM7Ozs7O0lBSW5DLHNEQUEwQzs7Ozs7SUFDMUMsdURBQTRDOzs7OztJQUM1Qyx3REFBOEM7Ozs7O0lBQzlDLDJEQUNrRTs7Ozs7SUFDbEUsNkVBQXFGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgaXNEZXZNb2RlLFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSBcIkBuZ3gtdHJhbnNsYXRlL2NvcmVcIjtcbmltcG9ydCB7XG4gIEJhc2VFbnRpdHlMaXN0Q29tcG9uZW50LFxuICBCYXNlUHJvbXB0Rm9ybU1vZGFsQ29tcG9uZW50LFxuICBFcnJvcnNFeHRyYWN0b3IsXG4gIElCYXNlRW50aXR5R3JpZEZpbHRlcixcbiAgSUJhc2VFbnRpdHlNb2RhbE9wdGlvbnMsXG4gIGludGVycG9sYXRlLFxuICBNb2RhbHNTZXJ2aWNlLFxuICB0cmFuc2xhdGVcbn0gZnJvbSBcIkBydWNrZW4vY29yZVwiO1xuaW1wb3J0IHsgRW50aXR5TGlzdENvbXBvbmVudCwgSW9uaWNNb2RhbHNTZXJ2aWNlIH0gZnJvbSBcIkBydWNrZW4vaW9uaWNcIjtcbmltcG9ydCB7IENVU1RPTV9FTlRJVElFU19DT05GSUdfVE9LRU4gfSBmcm9tIFwiQGN1c3RvbS1vcmcvY3VzdG9tLWxpYlwiO1xuaW1wb3J0IHsgQmluZElvSW5uZXIgfSBmcm9tIFwibmd4LWJpbmQtaW9cIjtcbmltcG9ydCB7IER5bmFtaWNSZXBvc2l0b3J5LCBJUmVzdFByb3ZpZGVyT3B0aW9ucyB9IGZyb20gXCJuZ3gtcmVwb3NpdG9yeVwiO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgeyBDdXN0b21FbnRpdHkgfSBmcm9tIFwiQGN1c3RvbS1vcmcvY3VzdG9tLWxpYlwiO1xuaW1wb3J0IHsgQ3VzdG9tRW50aXR5TW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi4vY3VzdG9tLWVudGl0eS1tb2RhbC9jdXN0b20tZW50aXR5LW1vZGFsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsIH0gZnJvbSBcIi4vY3VzdG9tLWVudGl0aWVzLWxpc3QtZmlsdGVycy1tb2RhbC9jdXN0b20tZW50aXRpZXMtbGlzdC1maWx0ZXJzLW1vZGFsXCI7XG5pbXBvcnQgeyBDdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi9jdXN0b20tZW50aXRpZXMtbGlzdC1maWx0ZXJzLW1vZGFsL2N1c3RvbS1lbnRpdGllcy1saXN0LWZpbHRlcnMtbW9kYWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWxTZXJ2aWNlIH0gZnJvbSBcIi4vY3VzdG9tLWVudGl0aWVzLWxpc3QtZmlsdGVycy1tb2RhbC9jdXN0b20tZW50aXRpZXMtbGlzdC1maWx0ZXJzLW1vZGFsLnNlcnZpY2VcIjtcblxuQEJpbmRJb0lubmVyKClcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJjdXN0b20tZW50aXRpZXMtbGlzdFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2N1c3RvbS1lbnRpdGllcy1saXN0LmNvbXBvbmVudC5odG1sXCIsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbUVudGl0aWVzTGlzdENvbXBvbmVudFxuICBleHRlbmRzIEJhc2VFbnRpdHlMaXN0Q29tcG9uZW50PEN1c3RvbUVudGl0eT5cbiAgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKFwibGlzdFwiKVxuICBsaXN0OiBFbnRpdHlMaXN0Q29tcG9uZW50PEN1c3RvbUVudGl0eT47XG4gIEBJbnB1dCgpXG4gIG1vZGFsSXRlbTogSUJhc2VFbnRpdHlNb2RhbE9wdGlvbnMgPSB7XG4gICAgY2xhc3M6IFwicHJpbWFyeVwiLFxuICAgIGNvbXBvbmVudDogQ3VzdG9tRW50aXR5TW9kYWxDb21wb25lbnQsXG4gICAgaW5pdGlhbFN0YXRlOiB7XG4gICAgICBoaWRlWWVzOiB0cnVlLFxuICAgICAgaGlkZU5vOiB0cnVlXG4gICAgfVxuICB9O1xuICBASW5wdXQoKVxuICBtb2RhbFZpZXc6IElCYXNlRW50aXR5TW9kYWxPcHRpb25zID0ge1xuICAgIGNsYXNzOiBcIm1lZGl1bVwiLFxuICAgIGNvbXBvbmVudDogQ3VzdG9tRW50aXR5TW9kYWxDb21wb25lbnQsXG4gICAgaW5pdGlhbFN0YXRlOiB7XG4gICAgICBub0NsYXNzOiBcIm1lZGl1bVwiLFxuICAgICAgaGlkZVllczogdHJ1ZSxcbiAgICAgIGhpZGVObzogdHJ1ZVxuICAgIH1cbiAgfTtcbiAgQElucHV0KClcbiAgdGl0bGUgPSB0cmFuc2xhdGUoXCJDdXN0b20gZW50aXRpZXNcIik7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgbW9kYWxzU2VydmljZTogTW9kYWxzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZXJyb3JzRXh0cmFjdG9yOiBFcnJvcnNFeHRyYWN0b3IsXG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGR5bmFtaWNSZXBvc2l0b3J5OiBEeW5hbWljUmVwb3NpdG9yeSxcbiAgICBASW5qZWN0KENVU1RPTV9FTlRJVElFU19DT05GSUdfVE9LRU4pXG4gICAgcHJvdGVjdGVkIGN1c3RvbUVudGl0aWVzQ29uZmlnOiBJUmVzdFByb3ZpZGVyT3B0aW9uczxDdXN0b21FbnRpdHk+LFxuICAgIHByaXZhdGUgX2N1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbFNlcnZpY2U6IEN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbFNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoXG4gICAgICBkeW5hbWljUmVwb3NpdG9yeS5mb3JrPEN1c3RvbUVudGl0eT4oQ3VzdG9tRW50aXR5KSxcbiAgICAgIG1vZGFsc1NlcnZpY2UsXG4gICAgICBDdXN0b21FbnRpdHlcbiAgICApO1xuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5tb2NrZWRJdGVtcykge1xuICAgICAgdGhpcy51c2VSZXN0KHtcbiAgICAgICAgYXBpVXJsOiB0aGlzLmFwaVVybCxcbiAgICAgICAgaW5maW5pdHk6IHRydWUsXG4gICAgICAgIC4uLnRoaXMuY3VzdG9tRW50aXRpZXNDb25maWcsXG4gICAgICAgIGF1dG9sb2FkOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLm1vY2tlZEl0ZW1zKSB7XG4gICAgICB0aGlzLnVzZU1vY2soe1xuICAgICAgICBpdGVtczogdGhpcy5tb2NrZWRJdGVtcyxcbiAgICAgICAgaW5maW5pdHk6IHRydWUsXG4gICAgICAgIC4uLnRoaXMuY3VzdG9tRW50aXRpZXNDb25maWcsXG4gICAgICAgIGF1dG9sb2FkOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMub25DaGFuZ2VGaWx0ZXIoKTtcbiAgfVxuICBzZXRTZWFyY2hUZXh0KGV2ZW50OiB7IGRldGFpbDogeyB2YWx1ZTogc3RyaW5nIH0gfSkge1xuICAgIHRoaXMubGlzdC5zZWFyY2hGaWVsZC5zZXRWYWx1ZShldmVudC5kZXRhaWwudmFsdWUpO1xuICB9XG4gIGFzeW5jIG9uRGVsZXRlQ2xpY2tBc3luYyhpdGVtOiBDdXN0b21FbnRpdHkpIHtcbiAgICBjb25zdCB0aXRsZSA9IGludGVycG9sYXRlKFxuICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQodGhpcy5zdHJpbmdzLmRlbGV0ZVRpdGxlKSxcbiAgICAgIGl0ZW1cbiAgICApO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBpbnRlcnBvbGF0ZShcbiAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KHRoaXMuc3RyaW5ncy5kZWxldGVNZXNzYWdlKSxcbiAgICAgIGl0ZW1cbiAgICApO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCAodGhpc1xuICAgICAgICAubW9kYWxzU2VydmljZSBhcyBJb25pY01vZGFsc1NlcnZpY2UpLmNvbmZpcm1Bc3luYyh7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBtZXNzYWdlXG4gICAgICB9KTtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgdGhpcy5yZXBvc2l0b3J5LmRlbGV0ZShpdGVtLmlkKS5zdWJzY3JpYmUoXG4gICAgICAgICAgZGVsZXRlZEl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMubW9ja2VkSXRlbXMpIHtcbiAgICAgICAgICAgICAgdGhpcy5tb2NrZWRJdGVtcyA9IHRoaXMucmVwb3NpdG9yeS5pdGVtcztcbiAgICAgICAgICAgICAgdGhpcy5tb2NrZWRJdGVtc0NoYW5nZS5lbWl0KHRoaXMubW9ja2VkSXRlbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3IgPT4gdGhpcy5vbkVycm9yKGVycm9yKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cbiAgYXN5bmMgY3JlYXRlRmlsdGVyc01vZGFsKGl0ZW0/OiBDdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWwpIHtcbiAgICBpdGVtID0gaXRlbSB8fCBuZXcgQ3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsKCk7XG4gICAgY29uc3QgbW9kYWxSZWYgPSBhd2FpdCB0aGlzLm1vZGFsc1NlcnZpY2UuY3JlYXRlQXN5bmM8XG4gICAgICBDdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWxDb21wb25lbnRcbiAgICA+KEN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbENvbXBvbmVudCwge1xuICAgICAgY2xhc3M6IFwic2Vjb25kYXJ5XCIsXG4gICAgICBpbml0aWFsU3RhdGU6IHtcbiAgICAgICAgdGl0bGU6IHRyYW5zbGF0ZShcIkN1c3RvbSBlbnRpdGllcyBmaWx0ZXJzXCIpLFxuICAgICAgICBkYXRhOiBpdGVtXG4gICAgICB9XG4gICAgfSk7XG4gICAgbW9kYWxSZWYuaW5zdGFuY2UuZ3JvdXAoQ3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsKTtcbiAgICBtb2RhbFJlZi5pbnN0YW5jZS5kYXRhID0gaXRlbTtcbiAgICByZXR1cm4gbW9kYWxSZWY7XG4gIH1cbiAgYXN5bmMgb25GaWx0ZXJDbGlja0FzeW5jKGRhdGE/OiBhbnkpIHtcbiAgICBjb25zdCBtb2RhbFJlZiA9IGF3YWl0IHRoaXMuY3JlYXRlRmlsdGVyc01vZGFsKGRhdGEpO1xuICAgIG1vZGFsUmVmLmluc3RhbmNlLnllcy5zdWJzY3JpYmUoXG4gICAgICAobW9kYWw6IEN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbENvbXBvbmVudCkgPT4ge1xuICAgICAgICBtb2RhbC5oaWRlKCk7XG4gICAgICAgIHRoaXMub25DaGFuZ2VGaWx0ZXIoKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG4gIG9uRmlsdGVyQ2xpY2soZGF0YT86IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25GaWx0ZXJDbGlja0FzeW5jKGRhdGEpLnRoZW4oKTtcbiAgfVxuICBvbkNoYW5nZUZpbHRlcihmaWx0ZXI/OiBJQmFzZUVudGl0eUdyaWRGaWx0ZXIpIHtcbiAgICBpZiAoIWZpbHRlcikge1xuICAgICAgZmlsdGVyID0ge307XG4gICAgfVxuICAgIGNvbnN0IGN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbCA9IHRoaXMuX2N1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbFNlcnZpY2UuZ2V0Q3VycmVudCgpO1xuICAgIGlmIChjdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWwuc29ydEZpZWxkKSB7XG4gICAgICBmaWx0ZXJbXCJzb3J0XCJdID0gY3VzdG9tRW50aXRpZXNMaXN0RmlsdGVyc01vZGFsLnNvcnRGaWVsZC5pZDtcbiAgICB9XG4gICAgaWYgKGN1c3RvbUVudGl0aWVzTGlzdEZpbHRlcnNNb2RhbC5zb3J0VHlwZSkge1xuICAgICAgZmlsdGVyW1wic29ydFwiXSA9XG4gICAgICAgIChjdXN0b21FbnRpdGllc0xpc3RGaWx0ZXJzTW9kYWwuc29ydFR5cGUuaWQgPT09IFwiYXNjXCIgPyBcIlwiIDogXCItXCIpICtcbiAgICAgICAgZmlsdGVyW1wic29ydFwiXTtcbiAgICB9XG4gICAgaWYgKHRydWUpIHtcbiAgICAgIHN1cGVyLm9uQ2hhbmdlRmlsdGVyKGZpbHRlcik7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgb25VcGRhdGVDbGlja0FzeW5jKGl0ZW06IEN1c3RvbUVudGl0eSkge1xuICAgIGNvbnN0IHVzZUN1c3RvbU1vZGFsQ29tcG9uZW50ID1cbiAgICAgIHRoaXMubW9kYWxVcGRhdGUuY29tcG9uZW50IHx8IHRoaXMubW9kYWxJdGVtLmNvbXBvbmVudDtcbiAgICBsZXQgbW9kYWxSZWYgPSAhdXNlQ3VzdG9tTW9kYWxDb21wb25lbnRcbiAgICAgID8gYXdhaXQgdGhpcy5jcmVhdGVVcGRhdGVNb2RhbChpdGVtKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgaWYgKCFtb2RhbFJlZikge1xuICAgICAgbW9kYWxSZWYgPSBhd2FpdCB0aGlzLmRlZmF1bHRDcmVhdGVVcGRhdGVNb2RhbChpdGVtKTtcbiAgICAgIGlmIChpc0Rldk1vZGUoKSAmJiAhdXNlQ3VzdG9tTW9kYWxDb21wb25lbnQpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdNZXRob2QgXCJjcmVhdGVVcGRhdGVNb2RhbFwiIGlzIG5vdCBkZWZpbmVkJywgdGhpcyk7XG4gICAgICB9XG4gICAgfVxuICAgIG1vZGFsUmVmLmluc3RhbmNlLnllcy5zdWJzY3JpYmUoXG4gICAgICAobW9kYWw6IEJhc2VQcm9tcHRGb3JtTW9kYWxDb21wb25lbnQ8Q3VzdG9tRW50aXR5PikgPT4ge1xuICAgICAgICBtb2RhbC5wcm9jZXNzaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZXBvc2l0b3J5LnVwZGF0ZShpdGVtLmlkLCBtb2RhbC5nZXREYXRhKCkpLnN1YnNjcmliZShcbiAgICAgICAgICB1cGRhdGVkSXRlbSA9PiB7XG4gICAgICAgICAgICBtb2RhbC5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAodGhpcy5tb2NrZWRJdGVtcykge1xuICAgICAgICAgICAgICB0aGlzLm1vY2tlZEl0ZW1zID0gdGhpcy5yZXBvc2l0b3J5Lml0ZW1zO1xuICAgICAgICAgICAgICB0aGlzLm1vY2tlZEl0ZW1zQ2hhbmdlLmVtaXQodGhpcy5tb2NrZWRJdGVtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtb2RhbC5oaWRlKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvciA9PiB0aGlzLm9uVXBkYXRlRXJyb3IobW9kYWwsIGVycm9yKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICk7XG4gIH1cbn1cbiJdfQ==