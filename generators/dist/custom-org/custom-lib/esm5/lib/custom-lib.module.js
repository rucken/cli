/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LANGUAGES_ITEM_CONFIG_TOKEN, translate } from "@rucken/core";
import { RuI18n } from "../i18n/ru.i18n";
import { ENTITIES_PROVIDERS } from "./configs/providers";
var ɵ0 = {
    title: translate("Russian"),
    code: "ru",
    translations: [RuI18n]
}, ɵ1 = {
    title: translate("English"),
    code: "en",
    translations: []
};
var CustomOrgCustomLibModule = /** @class */ (function () {
    function CustomOrgCustomLibModule() {
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
    return CustomOrgCustomLibModule;
}());
export { CustomOrgCustomLibModule };
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3VzdG9tLW9yZy9jdXN0b20tbGliLyIsInNvdXJjZXMiOlsibGliL2N1c3RvbS1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztTQU96QztJQUNSLEtBQUssRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDO0lBQzNCLElBQUksRUFBRSxJQUFJO0lBQ1YsWUFBWSxFQUFFLENBQUMsTUFBTSxDQUFDO0NBQ3ZCLE9BS1M7SUFDUixLQUFLLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQztJQUMzQixJQUFJLEVBQUUsSUFBSTtJQUNWLFlBQVksRUFBRSxFQUFFO0NBQ2pCO0FBbEJQO0lBQUE7SUF3QnVDLENBQUM7O2dCQXhCdkMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSwyQkFBMkI7NEJBQ3BDLFFBQVEsSUFJUDs0QkFDRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsMkJBQTJCOzRCQUNwQyxRQUFRLElBSVA7NEJBQ0QsS0FBSyxFQUFFLElBQUk7eUJBQ1o7d0JBQ0Qsa0JBQWtCO3FCQUNuQjtpQkFDRjs7SUFDc0MsK0JBQUM7Q0FBQSxBQXhCeEMsSUF3QndDO1NBQTNCLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IExBTkdVQUdFU19JVEVNX0NPTkZJR19UT0tFTiwgdHJhbnNsYXRlIH0gZnJvbSBcIkBydWNrZW4vY29yZVwiO1xuaW1wb3J0IHsgUnVJMThuIH0gZnJvbSBcIi4uL2kxOG4vcnUuaTE4blwiO1xuaW1wb3J0IHsgRU5USVRJRVNfUFJPVklERVJTIH0gZnJvbSBcIi4vY29uZmlncy9wcm92aWRlcnNcIjtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IExBTkdVQUdFU19JVEVNX0NPTkZJR19UT0tFTixcbiAgICAgIHVzZVZhbHVlOiB7XG4gICAgICAgIHRpdGxlOiB0cmFuc2xhdGUoXCJSdXNzaWFuXCIpLFxuICAgICAgICBjb2RlOiBcInJ1XCIsXG4gICAgICAgIHRyYW5zbGF0aW9uczogW1J1STE4bl1cbiAgICAgIH0sXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogTEFOR1VBR0VTX0lURU1fQ09ORklHX1RPS0VOLFxuICAgICAgdXNlVmFsdWU6IHtcbiAgICAgICAgdGl0bGU6IHRyYW5zbGF0ZShcIkVuZ2xpc2hcIiksXG4gICAgICAgIGNvZGU6IFwiZW5cIixcbiAgICAgICAgdHJhbnNsYXRpb25zOiBbXVxuICAgICAgfSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfSxcbiAgICBFTlRJVElFU19QUk9WSURFUlNcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21PcmdDdXN0b21MaWJNb2R1bGUge31cbiJdfQ==