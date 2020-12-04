
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const queryLoginMethodByIdResponseSchema = {
  "id": "http://tradex.techx.vn/configuration/queryLoginMethodByIdResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "request for query list of holiday",
  "type": "array",
  "allOf": [
    {
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
        },
        "steps": {
          "description": "mediate steps",
          "type": "array",
          "items": {
            "id": "http://tradex.techx.vn/configuration/loginMethodStepResponse",
            "$schema": "http://json-schema.org/draft-07/schema#",
            "description": "intermiediate steps of login methods",
            "type": "object",
            "required": [
              "id",
              "loginMethodId",
              "step"
            ],
            "properties": {
              "id": {
                "description": "id",
                "type": "integer"
              },
              "loginMethodId": {
                "description": "loginMethodId",
                "type": "integer"
              },
              "step": {
                "description": "step number",
                "type": "integer"
              },
              "name": {
                "description": "name for the step",
                "type": "string"
              },
              "description": {
                "description": "description",
                "type": "string"
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
    }
  ]
};
let queryLoginMethodByIdResponseAjv = null;
export function queryLoginMethodByIdResponseValidator() {
  if (queryLoginMethodByIdResponseAjv == null) {
    queryLoginMethodByIdResponseAjv = new Ajv({validateSchema: false}).compile(queryLoginMethodByIdResponseSchema);
  }
  return queryLoginMethodByIdResponseAjv;
}
      