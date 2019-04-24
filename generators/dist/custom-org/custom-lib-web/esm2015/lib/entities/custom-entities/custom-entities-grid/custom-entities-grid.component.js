/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Inject, Input } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { BaseEntityListComponent, ErrorsExtractor, ModalsService, translate } from "@rucken/core";
import { CustomEntity, CUSTOM_ENTITIES_CONFIG_TOKEN } from "@custom-org/custom-lib";
import { BindIoInner } from "ngx-bind-io";
import { DynamicRepository } from "ngx-repository";
import { map } from "rxjs/operators";
import { CustomEntityModalComponent } from "../custom-entity-modal/custom-entity-modal.component";
let CustomEntitiesGridComponent = class CustomEntitiesGridComponent extends BaseEntityListComponent {
    /**
     * @param {?} modalsService
     * @param {?} errorsExtractor
     * @param {?} translateService
     * @param {?} dynamicRepository
     * @param {?} customEntitiesConfig
     */
    constructor(modalsService, errorsExtractor, translateService, dynamicRepository, customEntitiesConfig) {
        super(dynamicRepository.fork(CustomEntity), modalsService, CustomEntity);
        this.errorsExtractor = errorsExtractor;
        this.translateService = translateService;
        this.dynamicRepository = dynamicRepository;
        this.customEntitiesConfig = customEntitiesConfig;
        this.autoload = false;
        this.modalItem = {
            component: CustomEntityModalComponent
        };
        this.title = translate("Custom entities");
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.mockedItems) {
            this.useRest(Object.assign({ apiUrl: this.apiUrl }, this.customEntitiesConfig, { autoload: this.autoload }));
        }
        if (this.mockedItems) {
            this.useMock(Object.assign({ items: this.mockedItems }, this.customEntitiesConfig, { autoload: this.autoload }));
        }
        this.items$ = this.repository.items$.pipe(map(items => items.map(item => {
            return item;
        })));
    }
    /**
     * @param {?=} item
     * @return {?}
     */
    defaultCreateCreateModal(item) {
        item = item || new CustomEntity();
        this.modalCreate = Object.assign({}, this.modalCreate, { initialState: Object.assign({}, this.modalCreate.initialState, { data: item }) });
        return super.defaultCreateCreateModal(item);
    }
    /**
     * @param {?=} item
     * @return {?}
     */
    defaultCreateUpdateModal(item) {
        this.modalUpdate = Object.assign({}, this.modalUpdate, { initialState: Object.assign({}, this.modalUpdate.initialState, { data: item }) });
        return super.defaultCreateUpdateModal(item);
    }
};
CustomEntitiesGridComponent.decorators = [
    { type: Component, args: [{
                selector: "custom-entities-grid",
                template: "<entity-grid\n  [bindIO]\n  [columns]=\"['title', 'name', 'action']\"\n  [enableCreate]=\"'add_custom-entity' | perm: false | async\"\n  [enableUpdate]=\"'change_custom-entity' | perm: false | async\"\n  [enableDelete]=\"'delete_custom-entity' | perm: false | async\"\n>\n</entity-grid>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CustomEntitiesGridComponent.ctorParameters = () => [
    { type: ModalsService },
    { type: ErrorsExtractor },
    { type: TranslateService },
    { type: DynamicRepository },
    { type: undefined, decorators: [{ type: Inject, args: [CUSTOM_ENTITIES_CONFIG_TOKEN,] }] }
];
CustomEntitiesGridComponent.propDecorators = {
    autoload: [{ type: Input }],
    modalItem: [{ type: Input }],
    title: [{ type: Input }]
};
CustomEntitiesGridComponent = tslib_1.__decorate([
    BindIoInner(),
    tslib_1.__metadata("design:paramtypes", [ModalsService,
        ErrorsExtractor,
        TranslateService,
        DynamicRepository, Object])
], CustomEntitiesGridComponent);
export { CustomEntitiesGridComponent };
if (false) {
    /** @type {?} */
    CustomEntitiesGridComponent.prototype.autoload;
    /** @type {?} */
    CustomEntitiesGridComponent.prototype.modalItem;
    /** @type {?} */
    CustomEntitiesGridComponent.prototype.title;
    /**
     * @type {?}
     * @protected
     */
    CustomEntitiesGridComponent.prototype.errorsExtractor;
    /**
     * @type {?}
     * @protected
     */
    CustomEntitiesGridComponent.prototype.translateService;
    /**
     * @type {?}
     * @protected
     */
    CustomEntitiesGridComponent.prototype.dynamicRepository;
    /**
     * @type {?}
     * @protected
     */
    CustomEntitiesGridComponent.prototype.customEntitiesConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVudGl0aWVzLWdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGN1c3RvbS1vcmcvY3VzdG9tLWxpYi13ZWIvIiwic291cmNlcyI6WyJsaWIvZW50aXRpZXMvY3VzdG9tLWVudGl0aWVzL2N1c3RvbS1lbnRpdGllcy1ncmlkL2N1c3RvbS1lbnRpdGllcy1ncmlkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULE1BQU0sRUFDTixLQUFLLEVBRU4sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixlQUFlLEVBR2YsYUFBYSxFQUNiLFNBQVMsRUFDVixNQUFNLGNBQWMsQ0FBQztBQUN0QixPQUFPLEVBQ0wsWUFBWSxFQUNaLDRCQUE0QixFQUM3QixNQUFNLHdCQUF3QixDQUFDO0FBQ2hDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztJQVFyRiwyQkFBMkIsU0FBM0IsMkJBQ1gsU0FBUSx1QkFBcUM7Ozs7Ozs7O0lBVzdDLFlBQ0UsYUFBNEIsRUFDbEIsZUFBZ0MsRUFDaEMsZ0JBQWtDLEVBQ2xDLGlCQUFvQyxFQUVwQyxvQkFBd0Q7UUFFbEUsS0FBSyxDQUNILGlCQUFpQixDQUFDLElBQUksQ0FBZSxZQUFZLENBQUMsRUFDbEQsYUFBYSxFQUNiLFlBQVksQ0FDYixDQUFDO1FBVlEsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUVwQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQW9DO1FBZHBFLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsY0FBUyxHQUE0QjtZQUNuQyxTQUFTLEVBQUUsMEJBQTBCO1NBQ3RDLENBQUM7UUFFRixVQUFLLEdBQUcsU0FBUyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFlckMsQ0FBQzs7OztJQUNELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixJQUFJLENBQUMsT0FBTyxpQkFDVixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sSUFDaEIsSUFBSSxDQUFDLG9CQUFvQixJQUM1QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsSUFDdkIsQ0FBQztTQUNKO1FBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxPQUFPLGlCQUNWLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxJQUNwQixJQUFJLENBQUMsb0JBQW9CLElBQzVCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxJQUN2QixDQUFDO1NBQ0o7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDdkMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQ1YsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQ0gsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFDRCx3QkFBd0IsQ0FBQyxJQUFtQjtRQUMxQyxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLFdBQVcscUJBQ1gsSUFBSSxDQUFDLFdBQVcsSUFDbkIsWUFBWSxvQkFDUCxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksSUFDaEMsSUFBSSxFQUFFLElBQUksTUFFYixDQUFDO1FBQ0YsT0FBTyxLQUFLLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7SUFDRCx3QkFBd0IsQ0FBQyxJQUFtQjtRQUMxQyxJQUFJLENBQUMsV0FBVyxxQkFDWCxJQUFJLENBQUMsV0FBVyxJQUNuQixZQUFZLG9CQUNQLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxJQUNoQyxJQUFJLEVBQUUsSUFBSSxNQUViLENBQUM7UUFDRixPQUFPLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDO0NBQ0YsQ0FBQTs7WUEzRUEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLDRTQUFvRDtnQkFDcEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFqQkMsYUFBYTtZQUhiLGVBQWU7WUFIUixnQkFBZ0I7WUFjaEIsaUJBQWlCOzRDQTJCckIsTUFBTSxTQUFDLDRCQUE0Qjs7O3VCQWRyQyxLQUFLO3dCQUVMLEtBQUs7b0JBSUwsS0FBSzs7QUFUSywyQkFBMkI7SUFOdkMsV0FBVyxFQUFFOzZDQW1CSyxhQUFhO1FBQ0QsZUFBZTtRQUNkLGdCQUFnQjtRQUNmLGlCQUFpQjtHQWhCckMsMkJBQTJCLENBc0V2QztTQXRFWSwyQkFBMkI7OztJQUd0QywrQ0FDaUI7O0lBQ2pCLGdEQUdFOztJQUNGLDRDQUNxQzs7Ozs7SUFJbkMsc0RBQTBDOzs7OztJQUMxQyx1REFBNEM7Ozs7O0lBQzVDLHdEQUE4Qzs7Ozs7SUFDOUMsMkRBQ2tFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25Jbml0XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSBcIkBuZ3gtdHJhbnNsYXRlL2NvcmVcIjtcbmltcG9ydCB7XG4gIEJhc2VFbnRpdHlMaXN0Q29tcG9uZW50LFxuICBFcnJvcnNFeHRyYWN0b3IsXG4gIElCYXNlRW50aXR5R3JpZEZpbHRlcixcbiAgSUJhc2VFbnRpdHlNb2RhbE9wdGlvbnMsXG4gIE1vZGFsc1NlcnZpY2UsXG4gIHRyYW5zbGF0ZVxufSBmcm9tIFwiQHJ1Y2tlbi9jb3JlXCI7XG5pbXBvcnQge1xuICBDdXN0b21FbnRpdHksXG4gIENVU1RPTV9FTlRJVElFU19DT05GSUdfVE9LRU5cbn0gZnJvbSBcIkBjdXN0b20tb3JnL2N1c3RvbS1saWJcIjtcbmltcG9ydCB7IEJpbmRJb0lubmVyIH0gZnJvbSBcIm5neC1iaW5kLWlvXCI7XG5pbXBvcnQgeyBEeW5hbWljUmVwb3NpdG9yeSwgSVJlc3RQcm92aWRlck9wdGlvbnMgfSBmcm9tIFwibmd4LXJlcG9zaXRvcnlcIjtcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgQ3VzdG9tRW50aXR5TW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi4vY3VzdG9tLWVudGl0eS1tb2RhbC9jdXN0b20tZW50aXR5LW1vZGFsLmNvbXBvbmVudFwiO1xuXG5AQmluZElvSW5uZXIoKVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImN1c3RvbS1lbnRpdGllcy1ncmlkXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vY3VzdG9tLWVudGl0aWVzLWdyaWQuY29tcG9uZW50Lmh0bWxcIixcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tRW50aXRpZXNHcmlkQ29tcG9uZW50XG4gIGV4dGVuZHMgQmFzZUVudGl0eUxpc3RDb21wb25lbnQ8Q3VzdG9tRW50aXR5PlxuICBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGF1dG9sb2FkID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIG1vZGFsSXRlbTogSUJhc2VFbnRpdHlNb2RhbE9wdGlvbnMgPSB7XG4gICAgY29tcG9uZW50OiBDdXN0b21FbnRpdHlNb2RhbENvbXBvbmVudFxuICB9O1xuICBASW5wdXQoKVxuICB0aXRsZSA9IHRyYW5zbGF0ZShcIkN1c3RvbSBlbnRpdGllc1wiKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBtb2RhbHNTZXJ2aWNlOiBNb2RhbHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBlcnJvcnNFeHRyYWN0b3I6IEVycm9yc0V4dHJhY3RvcixcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZHluYW1pY1JlcG9zaXRvcnk6IER5bmFtaWNSZXBvc2l0b3J5LFxuICAgIEBJbmplY3QoQ1VTVE9NX0VOVElUSUVTX0NPTkZJR19UT0tFTilcbiAgICBwcm90ZWN0ZWQgY3VzdG9tRW50aXRpZXNDb25maWc6IElSZXN0UHJvdmlkZXJPcHRpb25zPEN1c3RvbUVudGl0eT5cbiAgKSB7XG4gICAgc3VwZXIoXG4gICAgICBkeW5hbWljUmVwb3NpdG9yeS5mb3JrPEN1c3RvbUVudGl0eT4oQ3VzdG9tRW50aXR5KSxcbiAgICAgIG1vZGFsc1NlcnZpY2UsXG4gICAgICBDdXN0b21FbnRpdHlcbiAgICApO1xuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5tb2NrZWRJdGVtcykge1xuICAgICAgdGhpcy51c2VSZXN0KHtcbiAgICAgICAgYXBpVXJsOiB0aGlzLmFwaVVybCxcbiAgICAgICAgLi4udGhpcy5jdXN0b21FbnRpdGllc0NvbmZpZyxcbiAgICAgICAgYXV0b2xvYWQ6IHRoaXMuYXV0b2xvYWRcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5tb2NrZWRJdGVtcykge1xuICAgICAgdGhpcy51c2VNb2NrKHtcbiAgICAgICAgaXRlbXM6IHRoaXMubW9ja2VkSXRlbXMsXG4gICAgICAgIC4uLnRoaXMuY3VzdG9tRW50aXRpZXNDb25maWcsXG4gICAgICAgIGF1dG9sb2FkOiB0aGlzLmF1dG9sb2FkXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5pdGVtcyQgPSB0aGlzLnJlcG9zaXRvcnkuaXRlbXMkLnBpcGUoXG4gICAgICBtYXAoaXRlbXMgPT5cbiAgICAgICAgaXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cbiAgZGVmYXVsdENyZWF0ZUNyZWF0ZU1vZGFsKGl0ZW0/OiBDdXN0b21FbnRpdHkpIHtcbiAgICBpdGVtID0gaXRlbSB8fCBuZXcgQ3VzdG9tRW50aXR5KCk7XG4gICAgdGhpcy5tb2RhbENyZWF0ZSA9IHtcbiAgICAgIC4uLnRoaXMubW9kYWxDcmVhdGUsXG4gICAgICBpbml0aWFsU3RhdGU6IHtcbiAgICAgICAgLi4udGhpcy5tb2RhbENyZWF0ZS5pbml0aWFsU3RhdGUsXG4gICAgICAgIGRhdGE6IGl0ZW1cbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBzdXBlci5kZWZhdWx0Q3JlYXRlQ3JlYXRlTW9kYWwoaXRlbSk7XG4gIH1cbiAgZGVmYXVsdENyZWF0ZVVwZGF0ZU1vZGFsKGl0ZW0/OiBDdXN0b21FbnRpdHkpIHtcbiAgICB0aGlzLm1vZGFsVXBkYXRlID0ge1xuICAgICAgLi4udGhpcy5tb2RhbFVwZGF0ZSxcbiAgICAgIGluaXRpYWxTdGF0ZToge1xuICAgICAgICAuLi50aGlzLm1vZGFsVXBkYXRlLmluaXRpYWxTdGF0ZSxcbiAgICAgICAgZGF0YTogaXRlbVxuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIHN1cGVyLmRlZmF1bHRDcmVhdGVVcGRhdGVNb2RhbChpdGVtKTtcbiAgfVxufVxuIl19