"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const custom_validation_error_1 = require("../../exceptions/custom-validation.error");
const content_type_entity_1 = require("./content-type.entity");
const group_entity_1 = require("./group.entity");
let Permission1524199022084 = class Permission1524199022084 {
    constructor() {
        this.id = undefined;
        this.name = undefined;
        this.title = undefined;
        this.contentType = undefined;
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
], Permission1524199022084.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ length: 100 }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.MaxLength(100),
    tslib_1.__metadata("design:type", String)
], Permission1524199022084.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ length: 255 }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.MaxLength(255),
    tslib_1.__metadata("design:type", String)
], Permission1524199022084.prototype, "title", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(type => content_type_entity_1.ContentType1524199022084, { eager: true, nullable: true }),
    typeorm_1.JoinColumn({ name: 'content_type_id' }),
    tslib_1.__metadata("design:type", content_type_entity_1.ContentType1524199022084)
], Permission1524199022084.prototype, "contentType", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToMany(type => group_entity_1.Group1524199022084),
    typeorm_1.JoinTable({
        name: 'group_permissions',
        joinColumn: {
            name: 'permission_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'group_id',
            referencedColumnName: 'id'
        }
    }),
    tslib_1.__metadata("design:type", Array)
], Permission1524199022084.prototype, "groups", void 0);
tslib_1.__decorate([
    typeorm_1.BeforeInsert(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], Permission1524199022084.prototype, "doBeforeInsertion", null);
tslib_1.__decorate([
    typeorm_1.BeforeUpdate(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], Permission1524199022084.prototype, "doBeforeUpdate", null);
Permission1524199022084 = tslib_1.__decorate([
    typeorm_1.Entity({ name: 'permissions' })
], Permission1524199022084);
exports.Permission1524199022084 = Permission1524199022084;
//# sourceMappingURL=permission.entity.js.map