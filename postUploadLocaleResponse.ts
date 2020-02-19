
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const postUploadLocaleResponseSchema = {
  "id": "http://tradex.techx.vn/configuration/postUploadLocaleResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "request for query list of holiday",
  "type": "object"
};
let postUploadLocaleResponseAjv = null;
export function postUploadLocaleResponseValidator() {
  if (postUploadLocaleResponseAjv == null) {
    postUploadLocaleResponseAjv = new Ajv({validateSchema: false}).compile(postUploadLocaleResponseSchema);
  }
  return postUploadLocaleResponseAjv;
}
      