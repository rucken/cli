"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const facebook_strategy_1 = require("./facebook.strategy");
const jwt_strategy_1 = require("./jwt.strategy");
const local_strategy_1 = require("./local.strategy");
const google_plus_strategy_1 = require("./google-plus.strategy");
exports.AUTH_PASSPORT_STRATAGIES = [
    local_strategy_1.LocalStrategySignIn,
    local_strategy_1.LocalStrategySignUp,
    jwt_strategy_1.JwtStrategy,
    facebook_strategy_1.FacebookStrategy,
    google_plus_strategy_1.GooglePlusStrategy
];
//# sourceMappingURL=index.js.map