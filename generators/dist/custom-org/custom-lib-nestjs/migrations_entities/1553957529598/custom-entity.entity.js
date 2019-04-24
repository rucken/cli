"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_nestjs_1 = require("@rucken/core-nestjs");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
let CustomEntity1553957529598 = class CustomEntity1553957529598 {
    constructor() {
        this.id = undefined;
        this.name = undefined;
        this.title = undefined;
        this.createdAt = undefined;
        this.updatedAt = undefined;
    }
    doBeforeInsertion() {
        const errors = class_validator_1.validateSync(this, { validationError: { target: false } });
        if (errors.length > 0) {
            throw new core_nestjs_1.CustomValidationError(errors);
        }
    }
    doBeforeUpdate() {
        const errors = class_validator_1.validateSync(this, { validationError: { target: false } });
        if (errors.length > 0) {
            throw new core_nestjs_1.CustomValidationError(errors);
        }
    }
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], CustomEntity1553957529598.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ length: 100 }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.MaxLength(100),
    tslib_1.__metadata("design:type", String)
], CustomEntity1553957529598.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ length: 255 }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.MaxLength(255),
    tslib_1.__metadata("design:type", String)
], CustomEntity1553957529598.prototype, "title", void 0);
tslib_1.__decorate([
    typeorm_1.CreateDateColumn({ name: "created_at", nullable: true }),
    tslib_1.__metadata("design:type", Date)
], CustomEntity1553957529598.prototype, "createdAt", void 0);
tslib_1.__decorate([
    typeorm_1.UpdateDateColumn({ name: "updated_at", nullable: true }),
    tslib_1.__metadata("design:type", Date)
], CustomEntity1553957529598.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    typeorm_1.BeforeInsert(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], CustomEntity1553957529598.prototype, "doBeforeInsertion", null);
tslib_1.__decorate([
    typeorm_1.BeforeUpdate(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], CustomEntity1553957529598.prototype, "doBeforeUpdate", null);
CustomEntity1553957529598 = tslib_1.__decorate([
    typeorm_1.Entity({ name: "custom-entities" })
], CustomEntity1553957529598);
exports.CustomEntity1553957529598 = CustomEntity1553957529598;
//# sourceMappingURL=custom-entity.entity.js.map