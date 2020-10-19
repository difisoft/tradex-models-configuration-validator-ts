
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const deleteAdminScopeResponseSchema = {
  "id": "http://tradex.techx.vn/configuration/deleteAdminScopeResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "request for query list of holiday",
  "type": "object"
};
let deleteAdminScopeResponseAjv = null;
export function deleteAdminScopeResponseValidator() {
  if (deleteAdminScopeResponseAjv == null) {
    deleteAdminScopeResponseAjv = new Ajv({validateSchema: false}).compile(deleteAdminScopeResponseSchema);
  }
  return deleteAdminScopeResponseAjv;
}
      