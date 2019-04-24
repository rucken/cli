import { INgxRemoteConfig } from "ngx-remote-config";

export interface IEnvironment {
  server: boolean;
  type: "prod" | "development";
  production: boolean;
  apiUrl: string;
  remoteConfig?: INgxRemoteConfig;
}
