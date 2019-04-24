"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const validation_pipe_1 = require("../pipes/validation.pipe");
exports.CORE_APP_PIPES = [{ provide: core_1.APP_PIPE, useClass: validation_pipe_1.ValidationPipe, multi: true }];
//# sourceMappingURL=index.js.map