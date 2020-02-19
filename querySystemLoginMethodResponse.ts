
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const querySystemLoginMethodResponseSchema = {
  "id": "http://tradex.techx.vn/configuration/querySystemLoginMethodResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "request for query list of holiday",
  "type": "array",
  "items": {
    "id": "http://tradex.techx.vn/configuration/loginMethodResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "request for query list of holiday",
    "type": "object",
    "required": [
      "id",
      "grantType",
      "msName",
      "msUri",
      "serviceCode"
    ],
    "properties": {
      "id": {
        "description": "id",
        "type": "integer"
      },
      "serviceCode": {
        "description": "normally same with domain",
        "type": "string"
      },
      "grantType": {
        "description": "the flow of login: password, Password_otp, password_tradex ...",
        "type": "string"
      },
      "msName": {
        "description": "the microservice name that can handle logged in request",
        "type": "string"
      },
      "msUri": {
        "description": "the uri that the logged in request should have",
        "type": "string"
      },
      "isDefault": {
        "description": "is this login method is selected as default",
        "type": "boolean"
      },
      "scopeGroupIds": {
        "description": "scope group ids belong to this login methods",
        "type": "array",
        "items": {
          "type": "integer"
        }
      }
    }
  }
};
let querySystemLoginMethodResponseAjv = null;
export function querySystemLoginMethodResponseValidator() {
  if (querySystemLoginMethodResponseAjv == null) {
    querySystemLoginMethodResponseAjv = new Ajv({validateSchema: false}).compile(querySystemLoginMethodResponseSchema);
  }
  return querySystemLoginMethodResponseAjv;
}
      