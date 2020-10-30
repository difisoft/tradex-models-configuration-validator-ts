
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const postLoginMethodResponseSchema = {
  "id": "http://tradex.techx.vn/configuration/postLoginMethodResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "request for query list of holiday",
  "type": "object"
};
let postLoginMethodResponseAjv = null;
export function postLoginMethodResponseValidator() {
  if (postLoginMethodResponseAjv == null) {
    postLoginMethodResponseAjv = new Ajv({validateSchema: false}).compile(postLoginMethodResponseSchema);
  }
  return postLoginMethodResponseAjv;
}
      