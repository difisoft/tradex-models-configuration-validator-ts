"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
exports.deleteClientResponseSchema = {
    "id": "http://tradex.techx.vn/configuration/deleteClientResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "request for query list of holiday",
    "type": "object"
};
let deleteClientResponseAjv = null;
function deleteClientResponseValidator() {
    if (deleteClientResponseAjv == null) {
        deleteClientResponseAjv = new Ajv({ validateSchema: false }).compile(exports.deleteClientResponseSchema);
    }
    return deleteClientResponseAjv;
}
exports.deleteClientResponseValidator = deleteClientResponseValidator;
//# sourceMappingURL=deleteClientResponse.js.map