import { BaseEntityListModalComponent } from "@rucken/core";
import { CustomEntity } from "@custom-org/custom-lib";
import { CustomEntitiesGridComponent } from "../custom-entities-grid/custom-entities-grid.component";
export declare class CustomEntitiesGridModalComponent extends BaseEntityListModalComponent<CustomEntity> {
    grid: CustomEntitiesGridComponent;
    apiUrl?: string;
    constructor();
}
