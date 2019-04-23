"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const custom_validation_error_1 = require("../../exceptions/custom-validation.error");
const permission_entity_1 = require("./permission.entity");
let ContentType1524199022084 = class ContentType1524199022084 {
    constructor() {
        this.id = undefined;
        this.name = undefined;
        this.title = undefined;
    }
    doBeforeInsertion() {
        const errors = class_validator_1.validateSync(this, { validationError: { target: false } });
        if (errors.length > 0) {
            throw new custom_validation_error_1.CustomValidationError(errors);
        }
    }
    doBeforeUpdate() {
        const errors = class_validator_1.validateSync(this, { validationError: { target: false } });
        if (errors.length > 0) {
            throw new custom_validation_error_1.CustomValidationError(errors);
        }
    }
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], ContentType1524199022084.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ length: 100 }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.MaxLength(100),
    tslib_1.__metadata("design:type", String)
], ContentType1524199022084.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ length: 255 }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.MaxLength(255),
    tslib_1.__metadata("design:type", String)
], ContentType1524199022084.prototype, "title", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(type => permission_entity_1.Permission1524199022084, permission => permission.contentType),
    tslib_1.__metadata("design:type", Array)
], ContentType1524199022084.prototype, "permissions", void 0);
tslib_1.__decorate([
    typeorm_1.BeforeInsert(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], ContentType1524199022084.prototype, "doBeforeInsertion", null);
tslib_1.__decorate([
    typeorm_1.BeforeUpdate(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], ContentType1524199022084.prototype, "doBeforeUpdate", null);
ContentType1524199022084 = tslib_1.__decorate([
    typeorm_1.Entity({ name: 'content_types' })
], ContentType1524199022084);
exports.ContentType1524199022084 = ContentType1524199022084;
//# sourceMappingURL=content-type.entity.js.map