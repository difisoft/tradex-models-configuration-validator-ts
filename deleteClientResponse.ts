
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const deleteClientResponseSchema = {
  "id": "http://tradex.techx.vn/configuration/deleteClientResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "request for query list of holiday",
  "type": "object"
};
let deleteClientResponseAjv = null;
export function deleteClientResponseValidator() {
  if (deleteClientResponseAjv == null) {
    deleteClientResponseAjv = new Ajv({validateSchema: false}).compile(deleteClientResponseSchema);
  }
  return deleteClientResponseAjv;
}
      