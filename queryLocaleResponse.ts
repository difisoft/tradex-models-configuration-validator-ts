
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const queryLocaleResponseSchema = {
  "id": "http://tradex.techx.vn/configuration/queryLocaleResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "request for query list of holiday",
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "id": {
        "description": "id",
        "type": "integer"
      },
      "msName": {
        "description": "service name",
        "type": "string"
      },
      "namespaces": {
        "description": "service name",
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "namespace": {
              "type": "string"
            }
          }
        }
      }
    }
  }
};
let queryLocaleResponseAjv = null;
export function queryLocaleResponseValidator() {
  if (queryLocaleResponseAjv == null) {
    queryLocaleResponseAjv = new Ajv({validateSchema: false}).compile(queryLocaleResponseSchema);
  }
  return queryLocaleResponseAjv;
}
      