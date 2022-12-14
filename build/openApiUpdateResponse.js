"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openApiUpdateResponseValidator = exports.openApiUpdateResponseSchema = void 0;
const Ajv = require("ajv");
exports.openApiUpdateResponseSchema = {
    "id": "http://tradex.techx.vn/configuration/openApiUpdateResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "openApiUpdateResponse schema",
    "type": "object"
};
let openApiUpdateResponseAjv = null;
function openApiUpdateResponseValidator() {
    if (openApiUpdateResponseAjv == null) {
        openApiUpdateResponseAjv = new Ajv({ validateSchema: false }).compile(exports.openApiUpdateResponseSchema);
    }
    return openApiUpdateResponseAjv;
}
exports.openApiUpdateResponseValidator = openApiUpdateResponseValidator;
//# sourceMappingURL=openApiUpdateResponse.js.map