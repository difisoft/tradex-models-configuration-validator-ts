"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLocaleKeyResponseValidator = exports.deleteLocaleKeyResponseSchema = void 0;
const Ajv = require("ajv");
exports.deleteLocaleKeyResponseSchema = {
    "id": "http://tradex.techx.vn/configuration/deleteLocaleKeyResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "request for query list of holiday",
    "type": "object"
};
let deleteLocaleKeyResponseAjv = null;
function deleteLocaleKeyResponseValidator() {
    if (deleteLocaleKeyResponseAjv == null) {
        deleteLocaleKeyResponseAjv = new Ajv({ validateSchema: false }).compile(exports.deleteLocaleKeyResponseSchema);
    }
    return deleteLocaleKeyResponseAjv;
}
exports.deleteLocaleKeyResponseValidator = deleteLocaleKeyResponseValidator;
//# sourceMappingURL=deleteLocaleKeyResponse.js.map