"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
require("reflect-metadata");
const tsconfig_paths_1 = require("tsconfig-paths");
const app_module_1 = require("./app/app.module");
const config_1 = require("./app/config/config");
/* hmr
declare const module: any;
*/
/**
 * Link tsconfig paths
 */
if (config_1.config.env.name !== "develop") {
    tsconfig_paths_1.register({
        baseUrl: config_1.config.project.path,
        paths: config_1.config.project.tsconfig.compilerOptions.paths
    });
}
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        /**
         * Create nest application
         */
        const app = yield core_1.NestFactory.create(app_module_1.AppModule.forRoot({
            providers: [...config_1.config.core.providers(), ...config_1.config.auth.providers()],
            passportProviders: config_1.config.auth.passportProviders()
        }), { cors: true });
        /**
         * Add static folders
         */
        config_1.config.project.staticFolders.forEach(folder => {
            app.useStaticAssets(folder);
        });
        /**
         * Init swagger
         */
        let documentBuilder = new swagger_1.DocumentBuilder()
            .setTitle(config_1.config.project.package.name)
            .setDescription(config_1.config.project.package.description)
            .setContactEmail(config_1.config.project.package.author.email)
            .setExternalDoc("Project on Github", config_1.config.project.package.homepage)
            .setLicense(config_1.config.project.package.license, "")
            .setVersion(config_1.config.project.package.version)
            .addBearerAuth("Authorization", "header");
        documentBuilder = documentBuilder.setSchemes(config_1.config.env.protocol === "https" ? "https" : "http", config_1.config.env.protocol === "https" ? "http" : "https");
        swagger_1.SwaggerModule.setup("/swagger", app, swagger_1.SwaggerModule.createDocument(app, documentBuilder.build()));
        /**
         * Start nest application
         */
        yield app.listen(config_1.config.env.port);
        /* hmr
        if (module.hot) {
          module.hot.accept();
          module.hot.dispose(() => app.close());
        }
        */
    });
}
bootstrap();
//# sourceMappingURL=main.js.map