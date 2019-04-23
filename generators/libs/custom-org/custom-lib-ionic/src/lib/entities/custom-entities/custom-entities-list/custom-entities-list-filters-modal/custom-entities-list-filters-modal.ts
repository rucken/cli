import {
  serializeIdToObject,
  serializeModel,
  serializeObjectToId,
  translate
} from "@rucken/core";
import {
  CustomUser,
  keyToSelectInput,
  SelectInput,
  selectInputToKey
} from "@rucken/ionic";
import { Transform, Type } from "class-transformer";
import { IModel } from "ngx-repository";

export class CustomEntitiesListFiltersModal implements IModel {
  static strings = {
    sortField: translate("Sort field"),
    sortType: translate("Sort type")
  };
  static sortFields: SelectInput[] = [
    { id: "id", title: translate("Id") },
    { id: "title", title: translate("Title") }
  ];
  static sortTypes: SelectInput[] = [
    { id: "asc", title: translate("Asc") },
    { id: "desc", title: translate("Desc") }
  ];

  id = undefined;

  @Type(serializeModel(SelectInput))
  @Transform(
    keyToSelectInput({ items: CustomEntitiesListFiltersModal.sortFields }),
    { toClassOnly: true, groups: ["manual"] }
  )
  @Transform(
    selectInputToKey({ items: CustomEntitiesListFiltersModal.sortFields }),
    { toPlainOnly: true, groups: ["manual"] }
  )
  sortField: SelectInput = undefined;

  @Type(serializeModel(SelectInput))
  @Transform(
    keyToSelectInput({ items: CustomEntitiesListFiltersModal.sortTypes }),
    { toClassOnly: true, groups: ["manual"] }
  )
  @Transform(
    selectInputToKey({ items: CustomEntitiesListFiltersModal.sortTypes }),
    { toPlainOnly: true, groups: ["manual"] }
  )
  sortType: SelectInput = undefined;
}
