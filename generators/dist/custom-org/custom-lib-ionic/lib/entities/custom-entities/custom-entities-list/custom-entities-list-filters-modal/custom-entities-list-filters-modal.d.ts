import { SelectInput } from "@rucken/ionic";
import { IModel } from "ngx-repository";
export declare class CustomEntitiesListFiltersModal implements IModel {
    static strings: {
        sortField: string;
        sortType: string;
    };
    static sortFields: SelectInput[];
    static sortTypes: SelectInput[];
    id: any;
    sortField: SelectInput;
    sortType: SelectInput;
}
