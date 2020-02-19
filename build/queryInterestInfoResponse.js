"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
exports.queryInterestInfoResponseSchema = {
    "id": "http://tradex.techx.vn/configuration/queryInterestInfoResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "request for query list of holiday",
    "type": "array",
    "items": {
        "type": "object",
        "properties": {
            "id": {
                "type": "integer"
            },
            "startDate": {
                "type": "string",
                "description": "yyyyMMdd"
            },
            "endDate": {
                "type": "string",
                "description": "yyyyMMdd"
            },
            "value": {
                "type": "number"
            }
        },
        "required": [
            "id",
            "startDate",
            "endDate",
            "value"
        ]
    }
};
let queryInterestInfoResponseAjv = null;
function queryInterestInfoResponseValidator() {
    if (queryInterestInfoResponseAjv == null) {
        queryInterestInfoResponseAjv = new Ajv({ validateSchema: false }).compile(exports.queryInterestInfoResponseSchema);
    }
    return queryInterestInfoResponseAjv;
}
exports.queryInterestInfoResponseValidator = queryInterestInfoResponseValidator;
//# sourceMappingURL=queryInterestInfoResponse.js.map