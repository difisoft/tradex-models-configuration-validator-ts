
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const querySystemLoginMethodRequestSchema = {
  "id": "http://tradex.techx.vn/configuration/querySystemLoginMethodRequest",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "request for query list of holiday",
  "type": "object",
  "properties": {
    "lastQueriedTime": {
      "description": "last queried time. result will sho only client inserted or updated after this time",
      "type": "string"
    },
    "domain": {
      "description": "which domain of clients",
      "type": "string"
    }
  },
  "required": [
    "domain"
  ]
};
let querySystemLoginMethodRequestAjv = null;
export function querySystemLoginMethodRequestValidator() {
  if (querySystemLoginMethodRequestAjv == null) {
    querySystemLoginMethodRequestAjv = new Ajv({validateSchema: false}).compile(querySystemLoginMethodRequestSchema);
  }
  return querySystemLoginMethodRequestAjv;
}
      