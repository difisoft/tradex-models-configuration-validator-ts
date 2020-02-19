"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
exports.scopeGroupResponseSchema = {
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
};
let scopeGroupResponseAjv = null;
function scopeGroupResponseValidator() {
    if (scopeGroupResponseAjv == null) {
        scopeGroupResponseAjv = new Ajv({ validateSchema: false }).compile(exports.scopeGroupResponseSchema);
    }
    return scopeGroupResponseAjv;
}
exports.scopeGroupResponseValidator = scopeGroupResponseValidator;
//# sourceMappingURL=scopeGroupResponse.js.map