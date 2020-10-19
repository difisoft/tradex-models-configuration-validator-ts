
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const querySystemClientRequestSchema = {
  "id": "http://tradex.techx.vn/configuration/querySystemClientRequest",
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
let querySystemClientRequestAjv = null;
export function querySystemClientRequestValidator() {
  if (querySystemClientRequestAjv == null) {
    querySystemClientRequestAjv = new Ajv({validateSchema: false}).compile(querySystemClientRequestSchema);
  }
  return querySystemClientRequestAjv;
}
      