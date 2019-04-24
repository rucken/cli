import { OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { BaseEntityListComponent, ErrorsExtractor, IBaseEntityGridFilter, IBaseEntityModalOptions, ModalsService } from "@rucken/core";
import { EntityListComponent } from "@rucken/ionic";
import { DynamicRepository, IRestProviderOptions } from "ngx-repository";
import { CustomEntity } from "@custom-org/custom-lib";
import { CustomEntitiesListFiltersModal } from "./custom-entities-list-filters-modal/custom-entities-list-filters-modal";
import { CustomEntitiesListFiltersModalComponent } from "./custom-entities-list-filters-modal/custom-entities-list-filters-modal.component";
import { CustomEntitiesListFiltersModalService } from "./custom-entities-list-filters-modal/custom-entities-list-filters-modal.service";
export declare class CustomEntitiesListComponent extends BaseEntityListComponent<CustomEntity> implements OnInit {
    protected errorsExtractor: ErrorsExtractor;
    protected translateService: TranslateService;
    protected dynamicRepository: DynamicRepository;
    protected customEntitiesConfig: IRestProviderOptions<CustomEntity>;
    private _customEntitiesListFiltersModalService;
    list: EntityListComponent<CustomEntity>;
    modalItem: IBaseEntityModalOptions;
    modalView: IBaseEntityModalOptions;
    title: string;
    constructor(modalsService: ModalsService, errorsExtractor: ErrorsExtractor, translateService: TranslateService, dynamicRepository: DynamicRepository, customEntitiesConfig: IRestProviderOptions<CustomEntity>, _customEntitiesListFiltersModalService: CustomEntitiesListFiltersModalService);
    ngOnInit(): void;
    setSearchText(event: {
        detail: {
            value: string;
        };
    }): void;
    onDeleteClickAsync(item: CustomEntity): Promise<void>;
    createFiltersModal(item?: CustomEntitiesListFiltersModal): Promise<import("@rucken/core").IModalRef<CustomEntitiesListFiltersModalComponent>>;
    onFilterClickAsync(data?: any): Promise<void>;
    onFilterClick(data?: any): void;
    onChangeFilter(filter?: IBaseEntityGridFilter): void;
    onUpdateClickAsync(item: CustomEntity): Promise<void>;
}
