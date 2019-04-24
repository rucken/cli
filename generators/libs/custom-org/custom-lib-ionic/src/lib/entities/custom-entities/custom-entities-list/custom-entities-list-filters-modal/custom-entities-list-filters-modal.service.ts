import { Inject, Injectable } from "@angular/core";
import { IStorage, STORAGE_CONFIG_TOKEN } from "@rucken/core";
import { BindObservable } from "bind-observable";
import { classToPlain, plainToClass } from "class-transformer";
import { Observable } from "rxjs";
import { CustomEntitiesListFiltersModal } from "./custom-entities-list-filters-modal";
import {
  DEFAULT_CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG,
  ICustomEntitiesListFiltersModalConfig,
  CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG_TOKEN
} from "./custom-entities-list-filters-modal.config";

export function customEntitiesListFiltersModalServiceInitializeApp(
  customEntitiesListFiltersModalService: CustomEntitiesListFiltersModalService
) {
  return () => customEntitiesListFiltersModalService.initializeApp();
}

@Injectable()
export class CustomEntitiesListFiltersModalService {
  @BindObservable()
  current: CustomEntitiesListFiltersModal = undefined;
  current$: Observable<CustomEntitiesListFiltersModal>;

  storageKeyName = "custom-entities-list-filters-modal";

  constructor(
    @Inject(CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG_TOKEN)
    private _customEntitiesListFiltersModalConfig: ICustomEntitiesListFiltersModalConfig,
    @Inject(STORAGE_CONFIG_TOKEN) private _storage: IStorage
  ) {
    this.current = this.getDefault();
  }
  getDefault() {
    return plainToClass(
      CustomEntitiesListFiltersModal,
      {
        ...DEFAULT_CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG,
        ...this._customEntitiesListFiltersModalConfig
      },
      {
        groups: ["manual"]
      }
    );
  }
  getCurrent() {
    return this.current;
  }
  setCurrent(value: CustomEntitiesListFiltersModal) {
    this._storage
      .setItem(
        this.storageKeyName,
        JSON.stringify(
          classToPlain(!value ? this.getDefault() : value, {
            groups: ["manual"]
          })
        )
      )
      .then(_ => (this.current = value));
  }
  initCurrent() {
    return new Promise<CustomEntitiesListFiltersModal>(resolve => {
      this._storage.getItem(this.storageKeyName).then((data: string) => {
        if (data && data !== "undefined") {
          try {
            resolve(
              plainToClass(
                CustomEntitiesListFiltersModal,
                JSON.parse(data) as Object,
                { groups: ["manual"] }
              )
            );
          } catch (error) {
            resolve(this.getCurrent());
          }
        } else {
          resolve(this.getCurrent());
        }
      });
    });
  }
  initializeApp() {
    return new Promise(resolve => {
      this.initCurrent().then(value => {
        this.setCurrent(value);
        resolve();
      });
    });
  }
}
