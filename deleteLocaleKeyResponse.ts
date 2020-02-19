
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const deleteLocaleKeyResponseSchema = {
  "id": "http://tradex.techx.vn/configuration/deleteLocaleKeyResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "request for query list of holiday",
  "type": "object"
};
let deleteLocaleKeyResponseAjv = null;
export function deleteLocaleKeyResponseValidator() {
  if (deleteLocaleKeyResponseAjv == null) {
    deleteLocaleKeyResponseAjv = new Ajv({validateSchema: false}).compile(deleteLocaleKeyResponseSchema);
  }
  return deleteLocaleKeyResponseAjv;
}
      