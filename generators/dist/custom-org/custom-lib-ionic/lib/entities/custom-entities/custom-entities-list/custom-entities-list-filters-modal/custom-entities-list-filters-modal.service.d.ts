import { IStorage } from "@rucken/core";
import { Observable } from "rxjs";
import { CustomEntitiesListFiltersModal } from "./custom-entities-list-filters-modal";
import { ICustomEntitiesListFiltersModalConfig } from "./custom-entities-list-filters-modal.config";
export declare function customEntitiesListFiltersModalServiceInitializeApp(customEntitiesListFiltersModalService: CustomEntitiesListFiltersModalService): () => Promise<{}>;
export declare class CustomEntitiesListFiltersModalService {
    private _customEntitiesListFiltersModalConfig;
    private _storage;
    current: CustomEntitiesListFiltersModal;
    current$: Observable<CustomEntitiesListFiltersModal>;
    storageKeyName: string;
    constructor(_customEntitiesListFiltersModalConfig: ICustomEntitiesListFiltersModalConfig, _storage: IStorage);
    getDefault(): CustomEntitiesListFiltersModal;
    getCurrent(): CustomEntitiesListFiltersModal;
    setCurrent(value: CustomEntitiesListFiltersModal): void;
    initCurrent(): Promise<CustomEntitiesListFiltersModal>;
    initializeApp(): Promise<{}>;
}
