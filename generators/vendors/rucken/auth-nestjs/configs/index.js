"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const facebook_config_1 = require("../configs/facebook.config");
const google_plus_config_1 = require("../configs/google-plus.config");
const jwt_config_1 = require("../configs/jwt.config");
exports.AUTH_CONFIGS = [
    {
        provide: jwt_config_1.JWT_CONFIG_TOKEN,
        useValue: jwt_config_1.DEFAULT_JWT_CONFIG
    },
    {
        provide: facebook_config_1.FACEBOOK_CONFIG_TOKEN,
        useValue: facebook_config_1.DEFAULT_FACEBOOK_CONFIG
    },
    {
        provide: google_plus_config_1.GOOGLE_PLUS_CONFIG_TOKEN,
        useValue: google_plus_config_1.DEFAULT_GOOGLE_PLUS_CONFIG
    }
];
//# sourceMappingURL=index.js.map