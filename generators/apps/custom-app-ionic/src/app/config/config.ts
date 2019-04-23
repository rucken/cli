import { translate } from "@rucken/core";
import { RuI18n } from "../i18n/ru.i18n";
import { ICoreConfig } from "./config.interface";

export const config: ICoreConfig = {
  app: {
    id: "custom-app-ionic",
    title: translate("Custom app ionic"),
    description: translate(
      "Admin UI for Ionic4 with Angular7+ mobile custom-app-ionic application based on Rucken template"
    ),
    languages: [
      {
        title: translate("Russian"),
        code: "ru",
        translations: [RuI18n]
      }
    ]
  },
  authModal: {
    signInInfoMessage: {
      text: `
<ion-list>
  <ion-item>
    <ion-label text-wrap>
    <small>{{user1}}</small>
    </ion-label>
  </ion-item>
  <ion-item>
    <ion-label text-wrap>
    <small>{{user2}}</small>
    </ion-label>
  </ion-item>
  <ion-item>
    <ion-label text-wrap>
    <small>{{user3}}</small>
    </ion-label>
  </ion-item>
</ion-list>
`,
      data: {
        title: translate("Demo users:"),
        user1: translate("Admin: admin@admin.com<br/>Password: 12345678"),
        user2: translate("User 1: user1@user1.com<br/>Password: 12345678"),
        user3: translate("User 2: user2@user2.com<br/>Password: 12345678")
      }
    },
    signUpInfoMessage: ""
  },
  oauth: [
    {
      name: "facebook",
      icon: ["fab", "facebook-square"],
      signInTitle: translate("Sign in with Facebook")
    },
    {
      name: "google-plus",
      icon: ["fab", "google-plus"],
      signInTitle: translate("Sign in with Google+")
    }
  ]
};
