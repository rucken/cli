"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const core_nestjs_1 = require("@rucken/core-nestjs");
const class_transformer_1 = require("class-transformer");
const in_custom_entity_dto_1 = require("../dto/in-custom-entity.dto");
const out_custom_entity_dto_1 = require("../dto/out-custom-entity.dto");
const out_custom_entities_dto_1 = require("../dto/out-custom-entities.dto");
const custom_entity_entity_1 = require("../entities/custom-entity.entity");
const custom_entities_service_1 = require("../services/custom-entities.service");
let CustomEntitiesController = class CustomEntitiesController {
    constructor(coreConfig, service) {
        this.coreConfig = coreConfig;
        this.service = service;
    }
    create(req, dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return class_transformer_1.plainToClass(out_custom_entity_dto_1.OutCustomEntityDto, yield this.service.create({
                    item: class_transformer_1.plainToClass(custom_entity_entity_1.CustomEntity, dto)
                }, req.user));
            }
            catch (error) {
                throw error;
            }
        });
    }
    update(req, id, dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.coreConfig.demo) {
                throw new common_1.MethodNotAllowedException("Not allowed in DEMO mode");
            }
            try {
                return class_transformer_1.plainToClass(out_custom_entity_dto_1.OutCustomEntityDto, yield this.service.update({
                    id,
                    item: class_transformer_1.plainToClass(custom_entity_entity_1.CustomEntity, dto)
                }, req.user));
            }
            catch (error) {
                throw error;
            }
        });
    }
    delete(req, id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.coreConfig.demo) {
                throw new common_1.MethodNotAllowedException("Not allowed in DEMO mode");
            }
            try {
                return class_transformer_1.plainToClass(out_custom_entity_dto_1.OutCustomEntityDto, yield this.service.delete({
                    id
                }, req.user));
            }
            catch (error) {
                throw error;
            }
        });
    }
    load(req, id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return class_transformer_1.plainToClass(out_custom_entity_dto_1.OutCustomEntityDto, yield this.service.findById({
                    id
                }, req.user));
            }
            catch (error) {
                throw error;
            }
        });
    }
    findAll(req, curPage, perPage, q, sort) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return class_transformer_1.plainToClass(out_custom_entities_dto_1.OutCustomEntitiesDto, yield this.service.findAll({
                    curPage,
                    perPage,
                    q,
                    sort
                }, req.user));
            }
            catch (error) {
                throw error;
            }
        });
    }
};
tslib_1.__decorate([
    core_nestjs_1.Roles("isSuperuser"),
    core_nestjs_1.Permissions("add_custom-entity"),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.CREATED,
        type: out_custom_entity_dto_1.OutCustomEntityDto,
        description: "The record has been successfully created."
    }),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.FORBIDDEN, description: "Forbidden." }),
    common_1.Post(),
    tslib_1.__param(0, common_1.Req()), tslib_1.__param(1, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, in_custom_entity_dto_1.InCustomEntityDto]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomEntitiesController.prototype, "create", null);
tslib_1.__decorate([
    core_nestjs_1.Roles("isSuperuser"),
    core_nestjs_1.Permissions("change_custom-entity"),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.OK,
        type: out_custom_entity_dto_1.OutCustomEntityDto,
        description: "The record has been successfully updated."
    }),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.FORBIDDEN, description: "Forbidden." }),
    swagger_1.ApiImplicitParam({ name: "id", type: Number }),
    common_1.Put(":id"),
    tslib_1.__param(0, common_1.Req()),
    tslib_1.__param(1, common_1.Param("id", new common_1.ParseIntPipe())),
    tslib_1.__param(2, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, in_custom_entity_dto_1.InCustomEntityDto]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomEntitiesController.prototype, "update", null);
tslib_1.__decorate([
    core_nestjs_1.Roles("isSuperuser"),
    core_nestjs_1.Permissions("delete_custom-entity"),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.NO_CONTENT,
        description: "The record has been successfully deleted."
    }),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.FORBIDDEN, description: "Forbidden." }),
    swagger_1.ApiImplicitParam({ name: "id", type: Number }),
    common_1.Delete(":id"),
    tslib_1.__param(0, common_1.Req()), tslib_1.__param(1, common_1.Param("id", new common_1.ParseIntPipe())),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomEntitiesController.prototype, "delete", null);
tslib_1.__decorate([
    core_nestjs_1.Roles("isSuperuser"),
    core_nestjs_1.Permissions("read_custom-entity"),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.OK,
        type: out_custom_entity_dto_1.OutCustomEntityDto,
        description: ""
    }),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.FORBIDDEN, description: "Forbidden." }),
    swagger_1.ApiImplicitParam({ name: "id", type: Number }),
    common_1.Get(":id"),
    tslib_1.__param(0, common_1.Req()), tslib_1.__param(1, common_1.Param("id", new common_1.ParseIntPipe())),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomEntitiesController.prototype, "load", null);
tslib_1.__decorate([
    core_nestjs_1.Roles("isSuperuser"),
    core_nestjs_1.Permissions("read_custom-entity"),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.OK,
        type: out_custom_entities_dto_1.OutCustomEntitiesDto,
        description: ""
    }),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.FORBIDDEN, description: "Forbidden." }),
    swagger_1.ApiImplicitQuery({
        name: "q",
        required: false,
        type: String,
        description: "Text for search (default: empty)"
    }),
    swagger_1.ApiImplicitQuery({
        name: "sort",
        required: false,
        type: String,
        description: "Column name for sort (default: -id)"
    }),
    swagger_1.ApiImplicitQuery({
        name: "per_page",
        required: false,
        type: Number,
        description: "Number of results to return per page. (default: 10)"
    }),
    swagger_1.ApiImplicitQuery({
        name: "cur_page",
        required: false,
        type: Number,
        description: "A page number within the paginated result set. (default: 1)"
    }),
    common_1.Get(),
    tslib_1.__param(0, common_1.Req()),
    tslib_1.__param(1, common_1.Query("cur_page", new core_nestjs_1.ParseIntWithDefaultPipe(1))),
    tslib_1.__param(2, common_1.Query("per_page", new core_nestjs_1.ParseIntWithDefaultPipe(10))),
    tslib_1.__param(3, common_1.Query("q")),
    tslib_1.__param(4, common_1.Query("sort")),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomEntitiesController.prototype, "findAll", null);
CustomEntitiesController = tslib_1.__decorate([
    swagger_1.ApiUseTags("custom-entities"),
    swagger_1.ApiBearerAuth(),
    common_1.Controller("/api/custom_entities"),
    tslib_1.__param(0, common_1.Inject(core_nestjs_1.CORE_CONFIG_TOKEN)),
    tslib_1.__metadata("design:paramtypes", [Object, custom_entities_service_1.CustomEntitiesService])
], CustomEntitiesController);
exports.CustomEntitiesController = CustomEntitiesController;
//# sourceMappingURL=custom-entities.controller.js.map