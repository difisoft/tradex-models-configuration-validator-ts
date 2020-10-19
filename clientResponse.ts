
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const clientResponseSchema = {
  "id": "http://tradex.techx.vn/configuration/clientResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "request for query list of holiday",
  "type": "object",
  "required": [
    "lastQueriedTime",
    "id",
    "userId",
    "clientId",
    "clientSecret",
    "status",
    "domain",
    "description"
  ],
  "properties": {
    "id": {
      "description": "id",
      "type": "integer"
    },
    "userId": {
      "description": "user id that client belong to",
      "type": "integer"
    },
    "clientId": {
      "description": "clientId",
      "type": "string"
    },
    "clientSecret": {
      "description": "clientSecret",
      "type": "string"
    },
    "description": {
      "description": "description of client for which purpose of this client",
      "type": "string"
    },
    "status": {
      "description": "status of client. active or not. unsed yet",
      "type": "integer"
    },
    "domain": {
      "description": "domain of client",
      "type": "string"
    },
    "loginMethods": {
      "description": "login methods available for client",
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
    }
  }
};
let clientResponseAjv = null;
export function clientResponseValidator() {
  if (clientResponseAjv == null) {
    clientResponseAjv = new Ajv({validateSchema: false}).compile(clientResponseSchema);
  }
  return clientResponseAjv;
}
      