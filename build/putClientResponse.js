"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
exports.putClientResponseSchema = {
    "id": "http://tradex.techx.vn/configuration/putClientResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "request for query list of holiday",
    "type": "object"
};
let putClientResponseAjv = null;
function putClientResponseValidator() {
    if (putClientResponseAjv == null) {
        putClientResponseAjv = new Ajv({ validateSchema: false }).compile(exports.putClientResponseSchema);
    }
    return putClientResponseAjv;
}
exports.putClientResponseValidator = putClientResponseValidator;
//# sourceMappingURL=putClientResponse.js.map