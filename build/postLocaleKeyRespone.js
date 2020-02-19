"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
exports.postLocaleKeyResponeSchema = {
    "id": "http://tradex.techx.vn/configuration/postLocaleKeyRespone",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "request for query list of holiday",
    "type": "object",
    "allOf": [
        {
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
    ]
};
let postLocaleKeyResponeAjv = null;
function postLocaleKeyResponeValidator() {
    if (postLocaleKeyResponeAjv == null) {
        postLocaleKeyResponeAjv = new Ajv({ validateSchema: false }).compile(exports.postLocaleKeyResponeSchema);
    }
    return postLocaleKeyResponeAjv;
}
exports.postLocaleKeyResponeValidator = postLocaleKeyResponeValidator;
//# sourceMappingURL=postLocaleKeyRespone.js.map