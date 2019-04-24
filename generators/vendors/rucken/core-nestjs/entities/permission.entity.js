"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const content_type_entity_1 = require("../entities/content-type.entity");
const group_entity_1 = require("../entities/group.entity");
const custom_validation_error_1 = require("../exceptions/custom-validation.error");
let Permission = class Permission {
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
], Permission.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ length: 100 }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.MaxLength(100),
    tslib_1.__metadata("design:type", String)
], Permission.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ length: 255 }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.MaxLength(255),
    tslib_1.__metadata("design:type", String)
], Permission.prototype, "title", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(type => content_type_entity_1.ContentType, { eager: true, nullable: true }),
    typeorm_1.JoinColumn({ name: 'content_type_id' }),
    tslib_1.__metadata("design:type", content_type_entity_1.ContentType)
], Permission.prototype, "contentType", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToMany(type => group_entity_1.Group),
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
], Permission.prototype, "groups", void 0);
tslib_1.__decorate([
    typeorm_1.BeforeInsert(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], Permission.prototype, "doBeforeInsertion", null);
tslib_1.__decorate([
    typeorm_1.BeforeUpdate(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], Permission.prototype, "doBeforeUpdate", null);
Permission = tslib_1.__decorate([
    typeorm_1.Entity({ name: 'permissions' })
], Permission);
exports.Permission = Permission;
//# sourceMappingURL=permission.entity.js.map