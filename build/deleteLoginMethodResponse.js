"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLoginMethodResponseValidator = exports.deleteLoginMethodResponseSchema = void 0;
const Ajv = require("ajv");
exports.deleteLoginMethodResponseSchema = {
    "id": "http://tradex.techx.vn/configuration/deleteLoginMethodResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "request for query list of holiday",
    "type": "object"
};
let deleteLoginMethodResponseAjv = null;
function deleteLoginMethodResponseValidator() {
    if (deleteLoginMethodResponseAjv == null) {
        deleteLoginMethodResponseAjv = new Ajv({ validateSchema: false }).compile(exports.deleteLoginMethodResponseSchema);
    }
    return deleteLoginMethodResponseAjv;
}
exports.deleteLoginMethodResponseValidator = deleteLoginMethodResponseValidator;
//# sourceMappingURL=deleteLoginMethodResponse.js.map