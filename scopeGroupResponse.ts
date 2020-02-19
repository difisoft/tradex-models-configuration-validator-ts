
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const scopeGroupResponseSchema = {
  "id": "http://tradex.techx.vn/configuration/scopeGroupResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "request for query list of holiday",
  "type": "object",
  "required": [
    "id",
    "scopeGroupName"
  ],
  "properties": {
    "id": {
      "description": "id",
      "type": "integer"
    },
    "scopeGroupName": {
      "description": "normally same with domain",
      "type": "string"
    },
    "scopeIds": {
      "description": "scope group ids belong to this login methods",
      "type": "array",
      "items": {
        "type": "integer"
      }
    }
  }
};
let scopeGroupResponseAjv = null;
export function scopeGroupResponseValidator() {
  if (scopeGroupResponseAjv == null) {
    scopeGroupResponseAjv = new Ajv({validateSchema: false}).compile(scopeGroupResponseSchema);
  }
  return scopeGroupResponseAjv;
}
      