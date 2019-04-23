export interface ICustomEntitiesListFiltersModalConfig {
  sortField?: string;
  sortType?: "asc" | "desc";
}
export const DEFAULT_CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG: ICustomEntitiesListFiltersModalConfig = {
  sortField: "id",
  sortType: "desc"
};
export const CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG_TOKEN =
  "CustomEntitiesListFiltersModalConfig";
