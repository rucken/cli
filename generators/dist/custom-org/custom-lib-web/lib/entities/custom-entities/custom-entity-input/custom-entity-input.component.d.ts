import { EventEmitter, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { ErrorsExtractor, IBaseEntityModalOptions, ModalsService } from "@rucken/core";
import { CustomEntity } from "@custom-org/custom-lib";
import { DynamicRepository, IRestProviderOptions } from "ngx-repository";
import { CustomEntitiesGridComponent } from "../custom-entities-grid/custom-entities-grid.component";
export declare class CustomEntityInputComponent extends CustomEntitiesGridComponent implements OnInit {
    protected errorsExtractor: ErrorsExtractor;
    protected translateService: TranslateService;
    protected dynamicRepository: DynamicRepository;
    protected customEntitiesConfig: IRestProviderOptions<CustomEntity>;
    modalAppendFromGrid: IBaseEntityModalOptions;
    select: EventEmitter<CustomEntity>;
    constructor(modalsService: ModalsService, errorsExtractor: ErrorsExtractor, translateService: TranslateService, dynamicRepository: DynamicRepository, customEntitiesConfig: IRestProviderOptions<CustomEntity>);
    ngOnInit(): void;
    onSelect(item: CustomEntity): void;
}
