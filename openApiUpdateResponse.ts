
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const openApiUpdateResponseSchema = {
  "id": "http://tradex.techx.vn/configuration/openApiUpdateResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "openApiUpdateResponse schema",
  "type": "object"
};
let openApiUpdateResponseAjv = null;
export function openApiUpdateResponseValidator() {
  if (openApiUpdateResponseAjv == null) {
    openApiUpdateResponseAjv = new Ajv({validateSchema: false}).compile(openApiUpdateResponseSchema);
  }
  return openApiUpdateResponseAjv;
}
      