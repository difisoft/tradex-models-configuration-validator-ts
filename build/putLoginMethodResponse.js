"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putLoginMethodResponseValidator = exports.putLoginMethodResponseSchema = void 0;
const Ajv = require("ajv");
exports.putLoginMethodResponseSchema = {
    "id": "http://tradex.techx.vn/configuration/putLoginMethodResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "request for query list of holiday",
    "type": "object"
};
let putLoginMethodResponseAjv = null;
function putLoginMethodResponseValidator() {
    if (putLoginMethodResponseAjv == null) {
        putLoginMethodResponseAjv = new Ajv({ validateSchema: false }).compile(exports.putLoginMethodResponseSchema);
    }
    return putLoginMethodResponseAjv;
}
exports.putLoginMethodResponseValidator = putLoginMethodResponseValidator;
//# sourceMappingURL=putLoginMethodResponse.js.map