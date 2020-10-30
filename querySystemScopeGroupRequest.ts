
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const querySystemScopeGroupRequestSchema = {
  "id": "http://tradex.techx.vn/configuration/querySystemScopeGroupRequest",
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
let querySystemScopeGroupRequestAjv = null;
export function querySystemScopeGroupRequestValidator() {
  if (querySystemScopeGroupRequestAjv == null) {
    querySystemScopeGroupRequestAjv = new Ajv({validateSchema: false}).compile(querySystemScopeGroupRequestSchema);
  }
  return querySystemScopeGroupRequestAjv;
}
      