
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const holidayListResponseSchema = {
  "id": "http://tradex.techx.vn/configuration/holidayListResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "holiday list response",
  "type": "object",
  "properties": {
    "id": {
      "description": "id of holiday ",
      "type": "integer"
    },
    "date": {
      "description": "holiday (YYMMDD)",
      "type": "string"
    },
    "description": {
      "description": "description",
      "type": "string"
    }
  }
};
let holidayListResponseAjv = null;
export function holidayListResponseValidator() {
  if (holidayListResponseAjv == null) {
    holidayListResponseAjv = new Ajv({validateSchema: false}).compile(holidayListResponseSchema);
  }
  return holidayListResponseAjv;
}
      