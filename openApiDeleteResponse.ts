
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const openApiDeleteResponseSchema = {
  "id": "http://tradex.techx.vn/configuration/openApiDeleteResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "openApiDeleteResponse schema",
  "type": "object"
};
let openApiDeleteResponseAjv = null;
export function openApiDeleteResponseValidator() {
  if (openApiDeleteResponseAjv == null) {
    openApiDeleteResponseAjv = new Ajv({validateSchema: false}).compile(openApiDeleteResponseSchema);
  }
  return openApiDeleteResponseAjv;
}
      