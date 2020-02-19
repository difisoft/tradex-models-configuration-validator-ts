
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const queryLocaleKeyByNameSpaceResponseSchema = {
  "id": "http://tradex.techx.vn/configuration/queryLocaleKeyByNameSpaceResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "request for query list of holiday",
  "type": "array",
  "items": {
    "id": "http://tradex.techx.vn/configuration/localeKey",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "request for query list of holiday",
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "id of key"
      },
      "key": {
        "type": "string",
        "description": "key name"
      },
      "vi": {
        "type": "string",
        "description": "meaning in vietnamese"
      },
      "en": {
        "type": "string",
        "description": "meaning in english"
      },
      "ko": {
        "type": "string",
        "description": "meaning in korean"
      },
      "cn": {
        "type": "string",
        "description": "meaning in chinese"
      },
      "th": {
        "type": "string",
        "description": "meaning in thai"
      }
    },
    "required": [
      "id",
      "key"
    ]
  }
};
let queryLocaleKeyByNameSpaceResponseAjv = null;
export function queryLocaleKeyByNameSpaceResponseValidator() {
  if (queryLocaleKeyByNameSpaceResponseAjv == null) {
    queryLocaleKeyByNameSpaceResponseAjv = new Ajv({validateSchema: false}).compile(queryLocaleKeyByNameSpaceResponseSchema);
  }
  return queryLocaleKeyByNameSpaceResponseAjv;
}
      