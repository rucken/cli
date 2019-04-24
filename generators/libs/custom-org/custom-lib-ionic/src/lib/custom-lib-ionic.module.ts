import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LANGUAGES_ITEM_CONFIG_TOKEN, translate } from "@rucken/core";
import { RuI18n } from "../i18n/ru.i18n";

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: LANGUAGES_ITEM_CONFIG_TOKEN,
      useValue: {
        title: translate("Russian"),
        code: "ru",
        translations: [RuI18n]
      },
      multi: true
    },
    {
      provide: LANGUAGES_ITEM_CONFIG_TOKEN,
      useValue: {
        title: translate("English"),
        code: "en",
        translations: []
      },
      multi: true
    }
  ]
})
export class CustomOrgCustomLibIonicModule {}
