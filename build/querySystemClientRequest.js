"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
exports.querySystemClientRequestSchema = {
    "id": "http://tradex.techx.vn/configuration/querySystemClientRequest",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "request for query list of holiday",
    "type": "object",
    "properties": {
        "lastQueriedTime": {
            "description": "last queried time. result will sho only client inserted or updated after this time",
            "type": "string"
        },
        "domain": {
            "description": "which domain of clients",
            "type": "string"
        }
    },
    "required": [
        "domain"
    ]
};
let querySystemClientRequestAjv = null;
function querySystemClientRequestValidator() {
    if (querySystemClientRequestAjv == null) {
        querySystemClientRequestAjv = new Ajv({ validateSchema: false }).compile(exports.querySystemClientRequestSchema);
    }
    return querySystemClientRequestAjv;
}
exports.querySystemClientRequestValidator = querySystemClientRequestValidator;
//# sourceMappingURL=querySystemClientRequest.js.map