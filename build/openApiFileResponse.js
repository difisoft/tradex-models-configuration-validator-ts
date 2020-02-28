"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
exports.openApiFileResponseSchema = {
    "id": "http://tradex.techx.vn/configuration/openApiFileResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "openApiFileResponse schema",
    "type": "object",
    "properties": {
        "url": {
            "description": "upload url",
            "type": "string"
        }
    }
};
let openApiFileResponseAjv = null;
function openApiFileResponseValidator() {
    if (openApiFileResponseAjv == null) {
        openApiFileResponseAjv = new Ajv({ validateSchema: false }).compile(exports.openApiFileResponseSchema);
    }
    return openApiFileResponseAjv;
}
exports.openApiFileResponseValidator = openApiFileResponseValidator;
//# sourceMappingURL=openApiFileResponse.js.map