"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
let ParseIntWithDefaultPipe = class ParseIntWithDefaultPipe {
    constructor(defaultValue) {
        this.defaultValue = defaultValue;
    }
    transform(value, metadata) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let val = parseInt(value, 10);
            if (isNaN(val)) {
                val = this.defaultValue;
            }
            return val;
        });
    }
};
ParseIntWithDefaultPipe = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [Number])
], ParseIntWithDefaultPipe);
exports.ParseIntWithDefaultPipe = ParseIntWithDefaultPipe;
//# sourceMappingURL=parse-int-with-default.pipe.js.map