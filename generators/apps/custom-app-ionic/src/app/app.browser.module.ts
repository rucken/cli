import { APP_INITIALIZER, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {
  BrowserStorage,
  LangService,
  STORAGE_CONFIG_TOKEN,
  TokenService
} from "@rucken/core";
import {
  GroupsListFiltersModalService,
  UsersListFiltersModalService
} from "@rucken/ionic";
import { AppComponent } from "./app.component";
import { AppModule } from "./app.module";
import { config } from "./config/config";
import { initializeApp } from "./utils/initialize-app";
@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: config.app.id }),
    AppModule
  ],
  providers: [
    { provide: STORAGE_CONFIG_TOKEN, useClass: BrowserStorage },
    { provide: "ORIGIN_URL", useValue: location.origin },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
      deps: [
        TokenService,
        LangService,
        UsersListFiltersModalService,
        GroupsListFiltersModalService
      ]
    }
  ]
})
export class AppBrowserModule {}
