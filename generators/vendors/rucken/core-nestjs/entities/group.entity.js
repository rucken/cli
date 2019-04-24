"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const permission_entity_1 = require("../entities/permission.entity");
const user_entity_1 = require("../entities/user.entity");
const custom_validation_error_1 = require("../exceptions/custom-validation.error");
let Group = class Group {
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
], Group.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ length: 100, unique: true }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.MaxLength(100),
    tslib_1.__metadata("design:type", String)
], Group.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ length: 255, unique: true }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.MaxLength(255),
    tslib_1.__metadata("design:type", String)
], Group.prototype, "title", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToMany(type => permission_entity_1.Permission, {
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
], Group.prototype, "permissions", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToMany(type => user_entity_1.User),
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
], Group.prototype, "users", void 0);
tslib_1.__decorate([
    typeorm_1.BeforeInsert(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], Group.prototype, "doBeforeInsertion", null);
tslib_1.__decorate([
    typeorm_1.BeforeUpdate(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], Group.prototype, "doBeforeUpdate", null);
Group = tslib_1.__decorate([
    typeorm_1.Entity({ name: 'groups' })
], Group);
exports.Group = Group;
//# sourceMappingURL=group.entity.js.map