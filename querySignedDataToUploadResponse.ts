
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const querySignedDataToUploadResponseSchema = {
  "id": "http://tradex.techx.vn/configuration/querySignedDataToUploadResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "request for query list of holiday",
  "type": "object"
};
let querySignedDataToUploadResponseAjv = null;
export function querySignedDataToUploadResponseValidator() {
  if (querySignedDataToUploadResponseAjv == null) {
    querySignedDataToUploadResponseAjv = new Ajv({validateSchema: false}).compile(querySignedDataToUploadResponseSchema);
  }
  return querySignedDataToUploadResponseAjv;
}
      