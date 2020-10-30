"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryLocaleKeyByNameSpaceResponseValidator = exports.queryLocaleKeyByNameSpaceResponseSchema = void 0;
const Ajv = require("ajv");
exports.queryLocaleKeyByNameSpaceResponseSchema = {
    "id": "http://tradex.techx.vn/configuration/queryLocaleKeyByNameSpaceResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "request for query list of holiday",
    "type": "array",
    "items": {
        "id": "http://tradex.techx.vn/configuration/localeKey",
        "$schema": "http://json-schema.org/draft-07/schema#",
        "description": "request for query list of holiday",
        "type": "object",
        "properties": {
            "id": {
                "type": "integer",
                "description": "id of key"
            },
            "key": {
                "type": "string",
                "description": "key name"
            },
            "vi": {
                "type": "string",
                "description": "meaning in vietnamese"
            },
            "en": {
                "type": "string",
                "description": "meaning in english"
            },
            "ko": {
                "type": "string",
                "description": "meaning in korean"
            },
            "cn": {
                "type": "string",
                "description": "meaning in chinese"
            },
            "th": {
                "type": "string",
                "description": "meaning in thai"
            }
        },
        "required": [
            "id",
            "key"
        ]
    }
};
let queryLocaleKeyByNameSpaceResponseAjv = null;
function queryLocaleKeyByNameSpaceResponseValidator() {
    if (queryLocaleKeyByNameSpaceResponseAjv == null) {
        queryLocaleKeyByNameSpaceResponseAjv = new Ajv({ validateSchema: false }).compile(exports.queryLocaleKeyByNameSpaceResponseSchema);
    }
    return queryLocaleKeyByNameSpaceResponseAjv;
}
exports.queryLocaleKeyByNameSpaceResponseValidator = queryLocaleKeyByNameSpaceResponseValidator;
//# sourceMappingURL=queryLocaleKeyByNameSpaceResponse.js.map