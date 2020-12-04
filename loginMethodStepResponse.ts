
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const loginMethodStepResponseSchema = {
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
};
let loginMethodStepResponseAjv = null;
export function loginMethodStepResponseValidator() {
  if (loginMethodStepResponseAjv == null) {
    loginMethodStepResponseAjv = new Ajv({validateSchema: false}).compile(loginMethodStepResponseSchema);
  }
  return loginMethodStepResponseAjv;
}
      