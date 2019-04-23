"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomValidationError extends Error {
    constructor(errors) {
        super();
        this.errors = errors;
    }
}
exports.CustomValidationError = CustomValidationError;
//# sourceMappingURL=custom-validation.error.js.map