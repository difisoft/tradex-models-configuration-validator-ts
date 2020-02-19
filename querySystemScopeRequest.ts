
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const querySystemScopeRequestSchema = {
  "id": "http://tradex.techx.vn/configuration/querySystemScopeRequest",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "request for query list of holiday",
  "type": "object",
  "properties": {
    "lastQueriedTime": {
      "description": "last queried time. result will sho only client inserted or updated after this time",
      "type": "string"
    }
  }
};
let querySystemScopeRequestAjv = null;
export function querySystemScopeRequestValidator() {
  if (querySystemScopeRequestAjv == null) {
    querySystemScopeRequestAjv = new Ajv({validateSchema: false}).compile(querySystemScopeRequestSchema);
  }
  return querySystemScopeRequestAjv;
}
      