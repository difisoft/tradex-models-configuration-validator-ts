
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const putAdminScopeGroupResponseSchema = {
  "id": "http://tradex.techx.vn/configuration/putAdminScopeGroupResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "request for query list of holiday",
  "type": "object",
  "allOf": [
    {
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
    }
  ]
};
let putAdminScopeGroupResponseAjv = null;
export function putAdminScopeGroupResponseValidator() {
  if (putAdminScopeGroupResponseAjv == null) {
    putAdminScopeGroupResponseAjv = new Ajv({validateSchema: false}).compile(putAdminScopeGroupResponseSchema);
  }
  return putAdminScopeGroupResponseAjv;
}
      