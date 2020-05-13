"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuValidator = exports.menuSchema = void 0;
const Ajv = require("ajv");
exports.menuSchema = {
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
function menuValidator() {
    if (menuAjv == null) {
        menuAjv = new Ajv({ validateSchema: false }).compile(exports.menuSchema);
    }
    return menuAjv;
}
exports.menuValidator = menuValidator;
//# sourceMappingURL=menu.js.map