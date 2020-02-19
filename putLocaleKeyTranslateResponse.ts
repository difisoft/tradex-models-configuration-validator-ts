
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const putLocaleKeyTranslateResponseSchema = {
  "id": "http://tradex.techx.vn/configuration/putLocaleKeyTranslateResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "request for query list of holiday",
  "type": "object"
};
let putLocaleKeyTranslateResponseAjv = null;
export function putLocaleKeyTranslateResponseValidator() {
  if (putLocaleKeyTranslateResponseAjv == null) {
    putLocaleKeyTranslateResponseAjv = new Ajv({validateSchema: false}).compile(putLocaleKeyTranslateResponseSchema);
  }
  return putLocaleKeyTranslateResponseAjv;
}
      