/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LANGUAGES_ITEM_CONFIG_TOKEN, translate } from "@rucken/core";
import { RuI18n } from "../i18n/ru.i18n";
import { ENTITIES_PROVIDERS } from "./configs/providers";
const ɵ0 = {
    title: translate("Russian"),
    code: "ru",
    translations: [RuI18n]
}, ɵ1 = {
    title: translate("English"),
    code: "en",
    translations: []
};
export class CustomOrgCustomLibModule {
}
CustomOrgCustomLibModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                providers: [
                    {
                        provide: LANGUAGES_ITEM_CONFIG_TOKEN,
                        useValue: ɵ0,
                        multi: true
                    },
                    {
                        provide: LANGUAGES_ITEM_CONFIG_TOKEN,
                        useValue: ɵ1,
                        multi: true
                    },
                    ENTITIES_PROVIDERS
                ]
            },] }
];
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3VzdG9tLW9yZy9jdXN0b20tbGliLyIsInNvdXJjZXMiOlsibGliL2N1c3RvbS1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztXQU96QztJQUNSLEtBQUssRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDO0lBQzNCLElBQUksRUFBRSxJQUFJO0lBQ1YsWUFBWSxFQUFFLENBQUMsTUFBTSxDQUFDO0NBQ3ZCLE9BS1M7SUFDUixLQUFLLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQztJQUMzQixJQUFJLEVBQUUsSUFBSTtJQUNWLFlBQVksRUFBRSxFQUFFO0NBQ2pCO0FBTVAsTUFBTSxPQUFPLHdCQUF3Qjs7O1lBeEJwQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLDJCQUEyQjt3QkFDcEMsUUFBUSxJQUlQO3dCQUNELEtBQUssRUFBRSxJQUFJO3FCQUNaO29CQUNEO3dCQUNFLE9BQU8sRUFBRSwyQkFBMkI7d0JBQ3BDLFFBQVEsSUFJUDt3QkFDRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtvQkFDRCxrQkFBa0I7aUJBQ25CO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBMQU5HVUFHRVNfSVRFTV9DT05GSUdfVE9LRU4sIHRyYW5zbGF0ZSB9IGZyb20gXCJAcnVja2VuL2NvcmVcIjtcbmltcG9ydCB7IFJ1STE4biB9IGZyb20gXCIuLi9pMThuL3J1LmkxOG5cIjtcbmltcG9ydCB7IEVOVElUSUVTX1BST1ZJREVSUyB9IGZyb20gXCIuL2NvbmZpZ3MvcHJvdmlkZXJzXCI7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBMQU5HVUFHRVNfSVRFTV9DT05GSUdfVE9LRU4sXG4gICAgICB1c2VWYWx1ZToge1xuICAgICAgICB0aXRsZTogdHJhbnNsYXRlKFwiUnVzc2lhblwiKSxcbiAgICAgICAgY29kZTogXCJydVwiLFxuICAgICAgICB0cmFuc2xhdGlvbnM6IFtSdUkxOG5dXG4gICAgICB9LFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IExBTkdVQUdFU19JVEVNX0NPTkZJR19UT0tFTixcbiAgICAgIHVzZVZhbHVlOiB7XG4gICAgICAgIHRpdGxlOiB0cmFuc2xhdGUoXCJFbmdsaXNoXCIpLFxuICAgICAgICBjb2RlOiBcImVuXCIsXG4gICAgICAgIHRyYW5zbGF0aW9uczogW11cbiAgICAgIH0sXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAgRU5USVRJRVNfUFJPVklERVJTXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tT3JnQ3VzdG9tTGliTW9kdWxlIHt9XG4iXX0=