"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putLocaleKeyTranslateResponseValidator = exports.putLocaleKeyTranslateResponseSchema = void 0;
const Ajv = require("ajv");
exports.putLocaleKeyTranslateResponseSchema = {
    "id": "http://tradex.techx.vn/configuration/putLocaleKeyTranslateResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "request for query list of holiday",
    "type": "object"
};
let putLocaleKeyTranslateResponseAjv = null;
function putLocaleKeyTranslateResponseValidator() {
    if (putLocaleKeyTranslateResponseAjv == null) {
        putLocaleKeyTranslateResponseAjv = new Ajv({ validateSchema: false }).compile(exports.putLocaleKeyTranslateResponseSchema);
    }
    return putLocaleKeyTranslateResponseAjv;
}
exports.putLocaleKeyTranslateResponseValidator = putLocaleKeyTranslateResponseValidator;
//# sourceMappingURL=putLocaleKeyTranslateResponse.js.map