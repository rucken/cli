import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { HTTP } from "@ionic-native/http/ngx";
import { Platform } from "@ionic/angular";
import {
  INgxRemoteConfig,
  NgxRemoteConfigService,
  NGX_REMOTE_CONFIG
} from "ngx-remote-config";

@Injectable()
export class NgxRemoteConfigIonicService<
  T = any
> extends NgxRemoteConfigService {
  constructor(
    private http: HTTP,
    private platform: Platform,
    @Inject(NGX_REMOTE_CONFIG) private options: INgxRemoteConfig,
    private httpClient: HttpClient
  ) {
    super(options, httpClient);
  }
  initConfigAsync() {
    if (this.platform.is("cordova")) {
      return new Promise(resolve =>
        this.http.disableRedirect(false).then(result =>
          this.http.get(this.options.url, {}, {}).then(
            response => {
              let config: T;
              try {
                config = JSON.parse(response.data);
              } catch (error) {
                config = response.data;
              }
              this.config$.next(config || {});
              resolve(config);
            },
            response => {
              const config: T = this.options.default || {};
              this.config$.next(config);
              resolve(config);
            }
          )
        )
      );
    }
    return super.initConfigAsync();
  }
}
