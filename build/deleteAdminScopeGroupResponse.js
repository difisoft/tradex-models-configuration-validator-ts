"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAdminScopeGroupResponseValidator = exports.deleteAdminScopeGroupResponseSchema = void 0;
const Ajv = require("ajv");
exports.deleteAdminScopeGroupResponseSchema = {
    "id": "http://tradex.techx.vn/configuration/deleteAdminScopeGroupResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "request for query list of holiday",
    "type": "object"
};
let deleteAdminScopeGroupResponseAjv = null;
function deleteAdminScopeGroupResponseValidator() {
    if (deleteAdminScopeGroupResponseAjv == null) {
        deleteAdminScopeGroupResponseAjv = new Ajv({ validateSchema: false }).compile(exports.deleteAdminScopeGroupResponseSchema);
    }
    return deleteAdminScopeGroupResponseAjv;
}
exports.deleteAdminScopeGroupResponseValidator = deleteAdminScopeGroupResponseValidator;
//# sourceMappingURL=deleteAdminScopeGroupResponse.js.map