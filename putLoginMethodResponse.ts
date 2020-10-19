
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const putLoginMethodResponseSchema = {
  "id": "http://tradex.techx.vn/configuration/putLoginMethodResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "request for query list of holiday",
  "type": "object"
};
let putLoginMethodResponseAjv = null;
export function putLoginMethodResponseValidator() {
  if (putLoginMethodResponseAjv == null) {
    putLoginMethodResponseAjv = new Ajv({validateSchema: false}).compile(putLoginMethodResponseSchema);
  }
  return putLoginMethodResponseAjv;
}
      