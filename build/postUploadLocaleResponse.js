"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
exports.postUploadLocaleResponseSchema = {
    "id": "http://tradex.techx.vn/configuration/postUploadLocaleResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "request for query list of holiday",
    "type": "object"
};
let postUploadLocaleResponseAjv = null;
function postUploadLocaleResponseValidator() {
    if (postUploadLocaleResponseAjv == null) {
        postUploadLocaleResponseAjv = new Ajv({ validateSchema: false }).compile(exports.postUploadLocaleResponseSchema);
    }
    return postUploadLocaleResponseAjv;
}
exports.postUploadLocaleResponseValidator = postUploadLocaleResponseValidator;
//# sourceMappingURL=postUploadLocaleResponse.js.map