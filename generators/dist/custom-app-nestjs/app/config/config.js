"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const auth_nestjs_1 = require("@rucken/auth-nestjs");
const core_nestjs_1 = require("@rucken/core-nestjs");
const connection_string_1 = require("connection-string");
const dotenv_1 = require("dotenv");
const fs_1 = require("fs");
const path = require("path");
const NODE_ENV = process.env.NODE_ENV || "develop";
const envFile = resolveRootFile(`${NODE_ENV}.env`);
const connectionString = new connection_string_1.ConnectionString(process.env.DATABASE_URL || "sqlite://database/sqlitedb.db");
const dbFile = connectionString.protocol === "sqlite"
    ? "./" +
        (connectionString.hosts ? connectionString.hosts[0].name : "") +
        (connectionString.path ? "/" + connectionString.path[0] : "")
    : "";
try {
    fs_1.accessSync(envFile);
    dotenv_1.load({ path: envFile });
    common_1.Logger.log(`env file: ${envFile}`, "Main");
}
catch (error) {
    common_1.Logger.log(`error on get env file: ${envFile}`, "Main");
    try {
        fs_1.accessSync(`.env`);
        dotenv_1.load();
        common_1.Logger.log(`env file: .env`, "Main");
    }
    catch (error) {
        common_1.Logger.log(`error on get env file: .env`, "Main");
    }
}
exports.config = {
    env: {
        name: NODE_ENV,
        port: process.env.PORT ? +process.env.PORT : 3000,
        protocol: process.env.PROTOCOL === "https" ? "https" : "http"
    },
    project: {
        path: getRootPath(),
        tsconfig: loadRootJson("tsconfig.json"),
        package: loadRootJson("package.json"),
        staticFolders: [resolveRootFile("client")]
    },
    db: {
        connectionString: connectionString,
        file: dbFile
    },
    core: {
        providers: () => [
            {
                provide: core_nestjs_1.CORE_CONFIG_TOKEN,
                useValue: Object.assign({}, core_nestjs_1.DEFAULT_CORE_CONFIG, { demo: process.env.DEMO === "true", port: process.env.PORT ? +process.env.PORT : 3000, protocol: process.env.PROTOCOL === "https" ? "https" : "http", externalPort: process.env.EXTERNAL_PORT
                        ? +process.env.EXTERNAL_PORT
                        : undefined, domain: process.env.DOMAIN || "" })
            },
            ...core_nestjs_1.CORE_APP_FILTERS,
            ...core_nestjs_1.CORE_APP_PIPES
        ]
    },
    auth: {
        providers: () => [
            {
                provide: auth_nestjs_1.JWT_CONFIG_TOKEN,
                useValue: Object.assign({}, auth_nestjs_1.DEFAULT_JWT_CONFIG, { authHeaderPrefix: process.env.JWT_AUTH_HEADER_PREFIX || "JWT", expirationDelta: process.env.JWT_EXPIRATION_DELTA || "7 days", secretKey: process.env.JWT_SECRET_KEY || "secret_key" })
            },
            {
                provide: auth_nestjs_1.FACEBOOK_CONFIG_TOKEN,
                useValue: Object.assign({}, auth_nestjs_1.DEFAULT_FACEBOOK_CONFIG, { client_id: process.env.FACEBOOK_CLIENT_ID || "none", client_secret: process.env.FACEBOOK_CLIENT_SECRET || "none", oauth_redirect_uri: process.env.FACEBOOK_OAUTH_REDIRECT_URI || "none" })
            },
            {
                provide: auth_nestjs_1.GOOGLE_PLUS_CONFIG_TOKEN,
                useValue: Object.assign({}, auth_nestjs_1.DEFAULT_GOOGLE_PLUS_CONFIG, { client_id: process.env.GOOGLE_CLIENT_ID || "none", client_secret: process.env.GOOGLE_CLIENT_SECRET || "none", oauth_redirect_uri: process.env.GOOGLE_OAUTH_REDIRECT_URI || "none" })
            },
            ...auth_nestjs_1.AUTH_APP_GUARDS,
            ...auth_nestjs_1.AUTH_APP_FILTERS
        ],
        passportProviders: () => auth_nestjs_1.AUTH_PASSPORT_STRATAGIES
    }
};
function getRootPath() {
    return NODE_ENV === "develop" ? "../../../../../" : "../../../../";
}
exports.getRootPath = getRootPath;
function resolveRootFile(fileName) {
    return path.resolve(__dirname, getRootPath(), fileName);
}
exports.resolveRootFile = resolveRootFile;
function loadRootJson(fileName) {
    return JSON.parse(fs_1.readFileSync(resolveRootFile(fileName)).toString());
}
exports.loadRootJson = loadRootJson;
//# sourceMappingURL=config.js.map