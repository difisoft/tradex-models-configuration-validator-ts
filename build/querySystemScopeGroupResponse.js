"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.querySystemScopeGroupResponseValidator = exports.querySystemScopeGroupResponseSchema = void 0;
const Ajv = require("ajv");
exports.querySystemScopeGroupResponseSchema = {
    "id": "http://tradex.techx.vn/configuration/querySystemScopeGroupResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "request for query list of holiday",
    "type": "array",
    "items": {
        "id": "http://tradex.techx.vn/configuration/scopeGroupResponse",
        "$schema": "http://json-schema.org/draft-07/schema#",
        "description": "request for query list of holiday",
        "type": "object",
        "required": [
            "id",
            "scopeGroupName"
        ],
        "properties": {
            "id": {
                "description": "id",
                "type": "integer"
            },
            "scopeGroupName": {
                "description": "normally same with domain",
                "type": "string"
            },
            "scopeIds": {
                "description": "scope group ids belong to this login methods",
                "type": "array",
                "items": {
                    "type": "integer"
                }
            }
        }
    }
};
let querySystemScopeGroupResponseAjv = null;
function querySystemScopeGroupResponseValidator() {
    if (querySystemScopeGroupResponseAjv == null) {
        querySystemScopeGroupResponseAjv = new Ajv({ validateSchema: false }).compile(exports.querySystemScopeGroupResponseSchema);
    }
    return querySystemScopeGroupResponseAjv;
}
exports.querySystemScopeGroupResponseValidator = querySystemScopeGroupResponseValidator;
//# sourceMappingURL=querySystemScopeGroupResponse.js.map