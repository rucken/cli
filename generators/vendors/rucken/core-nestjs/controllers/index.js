"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const account_controller_1 = require("../controllers/account.controller");
const content_types_controller_1 = require("../controllers/content-types.controller");
const groups_controller_1 = require("../controllers/groups.controller");
const permissions_controller_1 = require("../controllers/permissions.controller");
const users_controller_1 = require("../controllers/users.controller");
exports.CORE_CONTROLLERS = [
    account_controller_1.AccountController,
    content_types_controller_1.ContentTypesController,
    permissions_controller_1.PermissionsController,
    users_controller_1.UsersController,
    groups_controller_1.GroupsController
];
//# sourceMappingURL=index.js.map