"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
exports.deleteAdminScopeResponseSchema = {
    "id": "http://tradex.techx.vn/configuration/deleteAdminScopeResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "request for query list of holiday",
    "type": "object"
};
let deleteAdminScopeResponseAjv = null;
function deleteAdminScopeResponseValidator() {
    if (deleteAdminScopeResponseAjv == null) {
        deleteAdminScopeResponseAjv = new Ajv({ validateSchema: false }).compile(exports.deleteAdminScopeResponseSchema);
    }
    return deleteAdminScopeResponseAjv;
}
exports.deleteAdminScopeResponseValidator = deleteAdminScopeResponseValidator;
//# sourceMappingURL=deleteAdminScopeResponse.js.map