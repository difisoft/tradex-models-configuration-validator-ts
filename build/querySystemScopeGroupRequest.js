"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
exports.querySystemScopeGroupRequestSchema = {
    "id": "http://tradex.techx.vn/configuration/querySystemScopeGroupRequest",
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
let querySystemScopeGroupRequestAjv = null;
function querySystemScopeGroupRequestValidator() {
    if (querySystemScopeGroupRequestAjv == null) {
        querySystemScopeGroupRequestAjv = new Ajv({ validateSchema: false }).compile(exports.querySystemScopeGroupRequestSchema);
    }
    return querySystemScopeGroupRequestAjv;
}
exports.querySystemScopeGroupRequestValidator = querySystemScopeGroupRequestValidator;
//# sourceMappingURL=querySystemScopeGroupRequest.js.map