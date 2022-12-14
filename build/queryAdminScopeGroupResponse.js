"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryAdminScopeGroupResponseValidator = exports.queryAdminScopeGroupResponseSchema = void 0;
const Ajv = require("ajv");
exports.queryAdminScopeGroupResponseSchema = {
    "id": "http://tradex.techx.vn/configuration/queryAdminScopeGroupResponse",
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
let queryAdminScopeGroupResponseAjv = null;
function queryAdminScopeGroupResponseValidator() {
    if (queryAdminScopeGroupResponseAjv == null) {
        queryAdminScopeGroupResponseAjv = new Ajv({ validateSchema: false }).compile(exports.queryAdminScopeGroupResponseSchema);
    }
    return queryAdminScopeGroupResponseAjv;
}
exports.queryAdminScopeGroupResponseValidator = queryAdminScopeGroupResponseValidator;
//# sourceMappingURL=queryAdminScopeGroupResponse.js.map