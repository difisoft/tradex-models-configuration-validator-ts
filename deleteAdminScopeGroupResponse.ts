
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const deleteAdminScopeGroupResponseSchema = {
  "id": "http://tradex.techx.vn/configuration/deleteAdminScopeGroupResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "request for query list of holiday",
  "type": "object"
};
let deleteAdminScopeGroupResponseAjv = null;
export function deleteAdminScopeGroupResponseValidator() {
  if (deleteAdminScopeGroupResponseAjv == null) {
    deleteAdminScopeGroupResponseAjv = new Ajv({validateSchema: false}).compile(deleteAdminScopeGroupResponseSchema);
  }
  return deleteAdminScopeGroupResponseAjv;
}
      