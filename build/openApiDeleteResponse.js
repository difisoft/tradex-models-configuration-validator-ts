"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openApiDeleteResponseValidator = exports.openApiDeleteResponseSchema = void 0;
const Ajv = require("ajv");
exports.openApiDeleteResponseSchema = {
    "id": "http://tradex.techx.vn/configuration/openApiDeleteResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "openApiDeleteResponse schema",
    "type": "object"
};
let openApiDeleteResponseAjv = null;
function openApiDeleteResponseValidator() {
    if (openApiDeleteResponseAjv == null) {
        openApiDeleteResponseAjv = new Ajv({ validateSchema: false }).compile(exports.openApiDeleteResponseSchema);
    }
    return openApiDeleteResponseAjv;
}
exports.openApiDeleteResponseValidator = openApiDeleteResponseValidator;
//# sourceMappingURL=openApiDeleteResponse.js.map