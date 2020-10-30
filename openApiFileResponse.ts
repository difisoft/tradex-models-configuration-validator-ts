
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const openApiFileResponseSchema = {
  "id": "http://tradex.techx.vn/configuration/openApiFileResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "openApiFileResponse schema",
  "type": "object",
  "properties": {
    "url": {
      "description": "upload url",
      "type": "string"
    }
  }
};
let openApiFileResponseAjv = null;
export function openApiFileResponseValidator() {
  if (openApiFileResponseAjv == null) {
    openApiFileResponseAjv = new Ajv({validateSchema: false}).compile(openApiFileResponseSchema);
  }
  return openApiFileResponseAjv;
}
      