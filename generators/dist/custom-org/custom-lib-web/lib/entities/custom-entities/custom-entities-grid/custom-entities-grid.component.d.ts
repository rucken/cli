import { OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { BaseEntityListComponent, ErrorsExtractor, IBaseEntityModalOptions, ModalsService } from "@rucken/core";
import { CustomEntity } from "@custom-org/custom-lib";
import { DynamicRepository, IRestProviderOptions } from "ngx-repository";
export declare class CustomEntitiesGridComponent extends BaseEntityListComponent<CustomEntity> implements OnInit {
    protected errorsExtractor: ErrorsExtractor;
    protected translateService: TranslateService;
    protected dynamicRepository: DynamicRepository;
    protected customEntitiesConfig: IRestProviderOptions<CustomEntity>;
    autoload: boolean;
    modalItem: IBaseEntityModalOptions;
    title: string;
    constructor(modalsService: ModalsService, errorsExtractor: ErrorsExtractor, translateService: TranslateService, dynamicRepository: DynamicRepository, customEntitiesConfig: IRestProviderOptions<CustomEntity>);
    ngOnInit(): void;
    defaultCreateCreateModal(item?: CustomEntity): Promise<import("@rucken/core").IModalRef<import("@rucken/core").BasePromptFormModalComponent<CustomEntity>>>;
    defaultCreateUpdateModal(item?: CustomEntity): Promise<import("@rucken/core").IModalRef<import("@rucken/core").BasePromptFormModalComponent<CustomEntity>>>;
}
