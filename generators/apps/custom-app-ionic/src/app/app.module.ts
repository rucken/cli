import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {
  PreloadAllModules,
  RouteReuseStrategy,
  RouterModule
} from "@angular/router";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { IonicStorageModule } from "@ionic/storage";
import { MetaLoader, MetaModule } from "@ngx-meta/core";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import {
  AccountModule,
  AuthModalModule,
  AuthModule,
  CONTENT_TYPES_CONFIG_TOKEN,
  DEFAULT_CONTENT_TYPES_CONFIG,
  DEFAULT_GROUPS_CONFIG,
  DEFAULT_PERMISSIONS_CONFIG,
  GROUPS_CONFIG_TOKEN,
  LangModule,
  PERMISSIONS_CONFIG_TOKEN,
  RuckenCoreModule,
  TransferHttpCacheModule,
  USERS_CONFIG_TOKEN
} from "@rucken/core";
import {
  GroupsListFiltersModalModule,
  IONIC_DEFAULT_USERS_CONFIG,
  RuckenIonicModule,
  UsersListFiltersModalModule
} from "@rucken/ionic";
import { NgxBindIOModule } from "ngx-bind-io";
import { NgxPermissionsModule } from "ngx-permissions";
import { NgxRemoteConfigModule } from "ngx-remote-config";
import { environment } from "../environments/environment";
import { AppComponent } from "./app.component";
import { APP_ROUTES } from "./app.routes";
import { config } from "./config/config";
import { SharedModule } from "./shared/shared.module";
import { metaFactory } from "./utils/meta-factory";
import { CustomOrgCustomLibModule } from "@custom-org/custom-lib";
import {
  CustomOrgCustomLibIonicModule,
  CustomEntitiesListFiltersModalModule
} from "@custom-org/custom-lib-ionic";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    NgxRemoteConfigModule.forRoot({
      withoutIterceptor: !environment.production,
      url: !environment.production ? undefined : environment.remoteConfig.url,
      default: !environment.production
        ? undefined
        : environment.remoteConfig.default
    }),
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot(),
    BrowserModule.withServerTransition({ appId: "custom-app-ionic" }),
    TransferHttpCacheModule.forRoot(),
    NgxPermissionsModule.forRoot(),
    IonicModule.forRoot(),
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
    NgxBindIOModule.forRoot(),
    UsersListFiltersModalModule.forRoot(),
    GroupsListFiltersModalModule.forRoot(),
    RuckenCoreModule,
    RuckenIonicModule,
    CustomOrgCustomLibModule,
    CustomOrgCustomLibIonicModule,
    CustomEntitiesListFiltersModalModule.forRoot()
  ],
  providers: [
    {
      provide: CONTENT_TYPES_CONFIG_TOKEN,
      useValue: {
        ...DEFAULT_CONTENT_TYPES_CONFIG,
        apiUrl: environment.apiUrl
      }
    },
    {
      provide: PERMISSIONS_CONFIG_TOKEN,
      useValue: {
        ...DEFAULT_PERMISSIONS_CONFIG,
        apiUrl: environment.apiUrl
      }
    },
    {
      provide: USERS_CONFIG_TOKEN,
      useValue: {
        ...IONIC_DEFAULT_USERS_CONFIG,
        apiUrl: environment.apiUrl
      }
    },
    {
      provide: GROUPS_CONFIG_TOKEN,
      useValue: {
        ...DEFAULT_GROUPS_CONFIG,
        apiUrl: environment.apiUrl
      }
    },
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
