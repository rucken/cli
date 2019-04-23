"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const hashers = require("node-django-hashers");
const typeorm_1 = require("typeorm");
const group_entity_1 = require("../entities/group.entity");
const custom_validation_error_1 = require("../exceptions/custom-validation.error");
let User = class User {
    constructor() {
        this.id = undefined;
        this.password = undefined;
        this.lastLogin = undefined;
        this.isSuperuser = undefined;
        this.username = undefined;
        this.firstName = undefined;
        this.lastName = undefined;
        this.email = undefined;
        this.isStaff = undefined;
        this.isActive = undefined;
        this.dateJoined = undefined;
        this.dateOfBirth = undefined;
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
    createPassword(password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const h = new hashers.PBKDF2PasswordHasher();
            const hash = yield h.encode(password, h.salt());
            return hash;
        });
    }
    validatePassword(password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const h = new hashers.PBKDF2PasswordHasher();
            return h.verify(password, this.password);
        });
    }
    setPassword(password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (password) {
                this.password = yield this.createPassword(password);
            }
            return this;
        });
    }
    checkPermissions(permissions) {
        permissions = permissions.map(permission => permission.toLowerCase());
        return (this.groups.filter(group => group &&
            group.permissions.filter(permission => permissions.indexOf(permission.name.toLowerCase()) !== -1).length > 0).length > 0);
    }
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ length: 128 }),
    class_validator_1.MaxLength(128),
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "password", void 0);
tslib_1.__decorate([
    typeorm_1.UpdateDateColumn({ name: 'last_login', nullable: true }),
    tslib_1.__metadata("design:type", Date)
], User.prototype, "lastLogin", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'is_superuser', default: false }),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "isSuperuser", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ length: 150, unique: true }),
    class_validator_1.MaxLength(150),
    tslib_1.__metadata("design:type", String)
], User.prototype, "username", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'first_name', length: 30, nullable: true }),
    class_validator_1.MaxLength(30),
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "firstName", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'last_name', length: 30, nullable: true }),
    class_validator_1.MaxLength(30),
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "lastName", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ length: 254, unique: true }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEmail(),
    class_validator_1.MaxLength(254),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'is_staff', default: false }),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "isStaff", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'is_active', default: false }),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "isActive", void 0);
tslib_1.__decorate([
    typeorm_1.CreateDateColumn({ name: 'date_joined' }),
    tslib_1.__metadata("design:type", Date)
], User.prototype, "dateJoined", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: Date, name: 'date_of_birth', nullable: true }),
    tslib_1.__metadata("design:type", Date)
], User.prototype, "dateOfBirth", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToMany(type => group_entity_1.Group),
    typeorm_1.JoinTable({
        name: 'user_groups',
        joinColumn: {
            name: 'user_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'group_id',
            referencedColumnName: 'id'
        }
    }),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "groups", void 0);
tslib_1.__decorate([
    typeorm_1.BeforeInsert(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], User.prototype, "doBeforeInsertion", null);
tslib_1.__decorate([
    typeorm_1.BeforeUpdate(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], User.prototype, "doBeforeUpdate", null);
User = tslib_1.__decorate([
    typeorm_1.Entity({ name: 'users' })
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map