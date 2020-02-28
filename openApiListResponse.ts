
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const openApiListResponseSchema = {
  "id": "http://tradex.techx.vn/configuration/openApiListResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "openApiListResponse schema",
  "type": "object",
  "properties": {
    "id": {
      "description": "scope Id",
      "type": "number"
    },
    "summary": {
      "description": "summary",
      "type": "string"
    },
    "parameters": {
      "description": "parameters",
      "type": "array",
      "items": {
        "type": "object"
      }
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
      "type": "array",
      "items": {
        "type": "object"
      }
    },
    "tags": {
      "description": "tags",
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "description": {
      "description": "description",
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
      