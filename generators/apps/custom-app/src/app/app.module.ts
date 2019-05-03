import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { PreloadAllModules, RouterModule } from "@angular/router";
import { MetaLoader, MetaModule } from "@ngx-meta/core";
import { TranslateService } from "@ngx-translate/core";
import {
  AccountModule,
  AuthModalModule,
  AuthModule,
  LangModule,
  RuckenCoreModule,
  TransferHttpCacheModule
} from "@rucken/core";
import { RuckenWebModule, ThemesModule } from "@rucken/web";
import { NgxBindIOModule } from "ngx-bind-io";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { NgxPermissionsModule } from "ngx-permissions";
import { environment } from "../environments/environment";
import { AppComponent } from "./app.component";
import { APP_ROUTES } from "./app.routes";
import { config } from "./config/config";
import { SharedModule } from "./shared/shared.module";
import { metaFactory } from "./utils/meta-factory";
import { CustomOrgCustomLibModule } from "@custom-org/custom-lib";
import { CustomOrgCustomLibWebModule } from "@custom-org/custom-lib-web";

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule,
    SharedModule,
    HttpClientModule,
    BrowserModule.withServerTransition({
      appId: config.app.id
    }),
    TransferHttpCacheModule.forRoot(),
    NgxPermissionsModule.forRoot(),
    AuthModule.forRoot({
      apiUrl: environment.apiUrl,
      oauth: {
        providers: config.oauth
      }
    }),
    AccountModule.forRoot({
      apiUrl: environment.apiUrl
    }),
    LangModule.forRoot({
      languages: config.app.languages
    }),
    ThemesModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES, {
      preloadingStrategy: PreloadAllModules,
      initialNavigation: "enabled"
    }),
    MetaModule.forRoot({
      provide: MetaLoader,
      useFactory: metaFactory,
      deps: [TranslateService]
    }),
    AuthModalModule.forRoot({
      oauth: {
        providers: config.oauth
      }
    }),
    BsDatepickerModule.forRoot(),
    NgxBindIOModule.forRoot(),
    RuckenCoreModule,
    RuckenWebModule,
    CustomOrgCustomLibModule,
    CustomOrgCustomLibWebModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
