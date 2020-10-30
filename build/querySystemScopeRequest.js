"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.querySystemScopeRequestValidator = exports.querySystemScopeRequestSchema = void 0;
const Ajv = require("ajv");
exports.querySystemScopeRequestSchema = {
    "id": "http://tradex.techx.vn/configuration/querySystemScopeRequest",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "request for query list of holiday",
    "type": "object",
    "properties": {
        "lastQueriedTime": {
            "description": "last queried time. result will sho only client inserted or updated after this time",
            "type": "string"
        }
    }
};
let querySystemScopeRequestAjv = null;
function querySystemScopeRequestValidator() {
    if (querySystemScopeRequestAjv == null) {
        querySystemScopeRequestAjv = new Ajv({ validateSchema: false }).compile(exports.querySystemScopeRequestSchema);
    }
    return querySystemScopeRequestAjv;
}
exports.querySystemScopeRequestValidator = querySystemScopeRequestValidator;
//# sourceMappingURL=querySystemScopeRequest.js.map