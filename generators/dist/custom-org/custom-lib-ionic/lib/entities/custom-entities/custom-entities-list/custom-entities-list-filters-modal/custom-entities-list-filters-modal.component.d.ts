import { OnInit } from "@angular/core";
import { BasePromptFormModalComponent } from "@rucken/core";
import { CustomEntitiesListFiltersModal } from "./custom-entities-list-filters-modal";
import { CustomEntitiesListFiltersModalService } from "./custom-entities-list-filters-modal.service";
export declare class CustomEntitiesListFiltersModalComponent extends BasePromptFormModalComponent<CustomEntitiesListFiltersModal> implements OnInit {
    private _customEntitiesListFiltersModalService;
    class: string;
    sortTypes: import("@rucken/ionic").SelectInput[];
    sortFields: import("@rucken/ionic").SelectInput[];
    constructor(_customEntitiesListFiltersModalService: CustomEntitiesListFiltersModalService);
    ngOnInit(): void;
    onYesClick(data?: any): void;
}
