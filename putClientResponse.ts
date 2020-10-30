
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const putClientResponseSchema = {
  "id": "http://tradex.techx.vn/configuration/putClientResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "request for query list of holiday",
  "type": "object"
};
let putClientResponseAjv = null;
export function putClientResponseValidator() {
  if (putClientResponseAjv == null) {
    putClientResponseAjv = new Ajv({validateSchema: false}).compile(putClientResponseSchema);
  }
  return putClientResponseAjv;
}
      