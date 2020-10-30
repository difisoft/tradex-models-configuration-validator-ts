"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postLoginMethodResponseValidator = exports.postLoginMethodResponseSchema = void 0;
const Ajv = require("ajv");
exports.postLoginMethodResponseSchema = {
    "id": "http://tradex.techx.vn/configuration/postLoginMethodResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "request for query list of holiday",
    "type": "object"
};
let postLoginMethodResponseAjv = null;
function postLoginMethodResponseValidator() {
    if (postLoginMethodResponseAjv == null) {
        postLoginMethodResponseAjv = new Ajv({ validateSchema: false }).compile(exports.postLoginMethodResponseSchema);
    }
    return postLoginMethodResponseAjv;
}
exports.postLoginMethodResponseValidator = postLoginMethodResponseValidator;
//# sourceMappingURL=postLoginMethodResponse.js.map