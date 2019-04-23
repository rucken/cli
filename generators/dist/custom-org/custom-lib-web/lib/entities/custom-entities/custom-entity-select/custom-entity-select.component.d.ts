import { OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";
import { ErrorsExtractor, ModalsService } from "@rucken/core";
import { CustomEntity } from "@custom-org/custom-lib";
import { DynamicRepository, IRestProviderOptions } from "ngx-repository";
import { CustomEntitiesGridComponent } from "../custom-entities-grid/custom-entities-grid.component";
export declare class CustomEntitySelectComponent extends CustomEntitiesGridComponent implements OnInit {
    protected errorsExtractor: ErrorsExtractor;
    protected translateService: TranslateService;
    protected dynamicRepository: DynamicRepository;
    protected customEntitiesConfig: IRestProviderOptions<CustomEntity>;
    searchField: FormControl;
    nameField: string;
    constructor(modalsService: ModalsService, errorsExtractor: ErrorsExtractor, translateService: TranslateService, dynamicRepository: DynamicRepository, customEntitiesConfig: IRestProviderOptions<CustomEntity>);
    ngOnInit(): void;
    checkChange(value: any, item: any): boolean;
}
