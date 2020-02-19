
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const openApiListResponseSchema = {
  "id": "http://tradex.techx.vn/market/openApiListResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "openApiListResponse schema",
  "type": "object",
  "properties": {
    "scopeId": {
      "description": "scope Id",
      "type": "number"
    },
    "summary": {
      "description": "summary",
      "type": "object"
    },
    "parameters": {
      "description": "parameters",
      "type": "object"
    },
    "requestBody": {
      "description": "request Body",
      "type": "object"
    },
    "responses": {
      "description": "responses",
      "type": "object"
    },
    "security": {
      "description": "security",
      "type": "object"
    },
    "tag": {
      "description": "tag",
      "type": "string"
    }
  }
};
let openApiListResponseAjv = null;
export function openApiListResponseValidator() {
  if (openApiListResponseAjv == null) {
    openApiListResponseAjv = new Ajv({validateSchema: false}).compile(openApiListResponseSchema);
  }
  return openApiListResponseAjv;
}
      