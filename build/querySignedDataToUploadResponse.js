"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.querySignedDataToUploadResponseValidator = exports.querySignedDataToUploadResponseSchema = void 0;
const Ajv = require("ajv");
exports.querySignedDataToUploadResponseSchema = {
    "id": "http://tradex.techx.vn/configuration/querySignedDataToUploadResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "request for query list of holiday",
    "type": "object"
};
let querySignedDataToUploadResponseAjv = null;
function querySignedDataToUploadResponseValidator() {
    if (querySignedDataToUploadResponseAjv == null) {
        querySignedDataToUploadResponseAjv = new Ajv({ validateSchema: false }).compile(exports.querySignedDataToUploadResponseSchema);
    }
    return querySignedDataToUploadResponseAjv;
}
exports.querySignedDataToUploadResponseValidator = querySignedDataToUploadResponseValidator;
//# sourceMappingURL=querySignedDataToUploadResponse.js.map