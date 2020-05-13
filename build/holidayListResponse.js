"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.holidayListResponseValidator = exports.holidayListResponseSchema = void 0;
const Ajv = require("ajv");
exports.holidayListResponseSchema = {
    "id": "http://tradex.techx.vn/configuration/holidayListResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "holiday list response",
    "type": "object",
    "properties": {
        "id": {
            "description": "id of holiday ",
            "type": "integer"
        },
        "date": {
            "description": "holiday (YYMMDD)",
            "type": "string"
        },
        "description": {
            "description": "description",
            "type": "string"
        }
    }
};
let holidayListResponseAjv = null;
function holidayListResponseValidator() {
    if (holidayListResponseAjv == null) {
        holidayListResponseAjv = new Ajv({ validateSchema: false }).compile(exports.holidayListResponseSchema);
    }
    return holidayListResponseAjv;
}
exports.holidayListResponseValidator = holidayListResponseValidator;
//# sourceMappingURL=holidayListResponse.js.map