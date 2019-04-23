"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const custom_validation_error_1 = require("../../exceptions/custom-validation.error");
const permission_entity_1 = require("./permission.entity");
const user_entity_1 = require("./user.entity");
let Group1524199022084 = class Group1524199022084 {
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
], Group1524199022084.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ length: 100, unique: true }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.MaxLength(100),
    tslib_1.__metadata("design:type", String)
], Group1524199022084.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ length: 255, unique: true }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.MaxLength(255),
    tslib_1.__metadata("design:type", String)
], Group1524199022084.prototype, "title", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToMany(type => permission_entity_1.Permission1524199022084, {
        cascade: ['remove']
    }),
    typeorm_1.JoinTable({
        name: 'group_permissions',
        joinColumn: {
            name: 'group_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'permission_id',
            referencedColumnName: 'id'
        }
    }),
    tslib_1.__metadata("design:type", Array)
], Group1524199022084.prototype, "permissions", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToMany(type => user_entity_1.User1524199022084),
    typeorm_1.JoinTable({
        name: 'user_groups',
        joinColumn: {
            name: 'group_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'user_id',
            referencedColumnName: 'id'
        }
    }),
    tslib_1.__metadata("design:type", Array)
], Group1524199022084.prototype, "users", void 0);
tslib_1.__decorate([
    typeorm_1.BeforeInsert(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], Group1524199022084.prototype, "doBeforeInsertion", null);
tslib_1.__decorate([
    typeorm_1.BeforeUpdate(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], Group1524199022084.prototype, "doBeforeUpdate", null);
Group1524199022084 = tslib_1.__decorate([
    typeorm_1.Entity({ name: 'groups' })
], Group1524199022084);
exports.Group1524199022084 = Group1524199022084;
//# sourceMappingURL=group.entity.js.map