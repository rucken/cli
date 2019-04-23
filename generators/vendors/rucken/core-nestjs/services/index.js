"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const account_service_1 = require("../services/account.service");
const content_types_service_1 = require("../services/content-types.service");
const groups_service_1 = require("../services/groups.service");
const permissions_service_1 = require("../services/permissions.service");
const users_service_1 = require("../services/users.service");
exports.CORE_SERVICES = [account_service_1.AccountService, groups_service_1.GroupsService, users_service_1.UsersService, content_types_service_1.ContentTypesService, permissions_service_1.PermissionsService];
//# sourceMappingURL=index.js.map