
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const deleteLoginMethodResponseSchema = {
  "id": "http://tradex.techx.vn/configuration/deleteLoginMethodResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "request for query list of holiday",
  "type": "object"
};
let deleteLoginMethodResponseAjv = null;
export function deleteLoginMethodResponseValidator() {
  if (deleteLoginMethodResponseAjv == null) {
    deleteLoginMethodResponseAjv = new Ajv({validateSchema: false}).compile(deleteLoginMethodResponseSchema);
  }
  return deleteLoginMethodResponseAjv;
}
      