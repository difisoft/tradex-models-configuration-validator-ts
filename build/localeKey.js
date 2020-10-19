"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localeKeyValidator = exports.localeKeySchema = void 0;
const Ajv = require("ajv");
exports.localeKeySchema = {
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
};
let localeKeyAjv = null;
function localeKeyValidator() {
    if (localeKeyAjv == null) {
        localeKeyAjv = new Ajv({ validateSchema: false }).compile(exports.localeKeySchema);
    }
    return localeKeyAjv;
}
exports.localeKeyValidator = localeKeyValidator;
//# sourceMappingURL=localeKey.js.map