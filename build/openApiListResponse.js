"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
exports.openApiListResponseSchema = {
    "id": "http://tradex.techx.vn/market/openApiListResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "openApiListResponse schema",
    "type": "object",
    "properties": {
        "scopeId": {
            "description": "scope Id",
            "type": "number"
        },
        "summary": {
            "description": "summary",
            "type": "object"
        },
        "parameters": {
            "description": "parameters",
            "type": "object"
        },
        "requestBody": {
            "description": "request Body",
            "type": "object"
        },
        "responses": {
            "description": "responses",
            "type": "object"
        },
        "security": {
            "description": "security",
            "type": "object"
        },
        "tag": {
            "description": "tag",
            "type": "string"
        }
    }
};
let openApiListResponseAjv = null;
function openApiListResponseValidator() {
    if (openApiListResponseAjv == null) {
        openApiListResponseAjv = new Ajv({ validateSchema: false }).compile(exports.openApiListResponseSchema);
    }
    return openApiListResponseAjv;
}
exports.openApiListResponseValidator = openApiListResponseValidator;
//# sourceMappingURL=openApiListResponse.js.map