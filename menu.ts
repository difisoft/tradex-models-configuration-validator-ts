
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const menuSchema = {
  "id": "http://tradex.techx.vn/configuration/menu",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "request for query list of holiday",
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "id of key"
    },
    "title": {
      "type": "string",
      "description": "menu title"
    },
    "order": {
      "type": "integer",
      "description": "order position"
    },
    "icon": {
      "type": "string",
      "description": "icon image"
    },
    "parent": {
      "type": "integer",
      "description": "id of parent menu"
    },
    "isLeaf": {
      "type": "boolean",
      "description": "if this menu is the smallest room"
    },
    "href": {
      "type": "string",
      "description": "link of menu"
    },
    "screenCode": {
      "type": "string",
      "description": "code of menu"
    }
  },
  "required": [
    "id",
    "icon",
    "title"
  ]
};
let menuAjv = null;
export function menuValidator() {
  if (menuAjv == null) {
    menuAjv = new Ajv({validateSchema: false}).compile(menuSchema);
  }
  return menuAjv;
}
      