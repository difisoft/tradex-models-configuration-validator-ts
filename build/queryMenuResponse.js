"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
exports.queryMenuResponseSchema = {
    "id": "http://tradex.techx.vn/configuration/queryMenuResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "request for query list of holiday",
    "type": "array",
    "items": {
        "type": "object",
        "properties": {
            "id": {
                "type": "integer",
                "description": "menu id"
            },
            "groupName": {
                "type": "string",
                "description": "menu name"
            },
            "menus": {
                "description": "sub menu",
                "type": "array",
                "items": {
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
                }
            }
        }
    }
};
let queryMenuResponseAjv = null;
function queryMenuResponseValidator() {
    if (queryMenuResponseAjv == null) {
        queryMenuResponseAjv = new Ajv({ validateSchema: false }).compile(exports.queryMenuResponseSchema);
    }
    return queryMenuResponseAjv;
}
exports.queryMenuResponseValidator = queryMenuResponseValidator;
//# sourceMappingURL=queryMenuResponse.js.map