
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const postUploadLocaleRequestSchema = {
  "id": "http://tradex.techx.vn/configuration/postUploadLocaleRequest",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "request for query list of holiday",
  "type": "object",
  "allOf": [
    {
      "id": "http://tradex.techx.vn/common/baseRequest",
      "$schema": "http://json-schema.org/draft-07/schema#",
      "description": "base request for all other",
      "type": "object",
      "properties": {
        "headers": {
          "id": "http://tradex.techx.vn/common/requestHeader",
          "$schema": "http://json-schema.org/draft-07/schema#",
          "description": "header for each request",
          "type": "object",
          "properties": {
            "token": {
              "oneOf": [
                {
                  "type": "null"
                },
                {
                  "id": "http://tradex.techx.vn/common/token",
                  "$schema": "http://json-schema.org/draft-07/schema#",
                  "description": "A geographical coordinate",
                  "type": "object",
                  "properties": {
                    "domain": {
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "userId": {
                      "type": [
                        "null",
                        "number"
                      ]
                    },
                    "serviceCode": {
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "connectionId": {
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "serviceId": {
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "serviceName": {
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "clientId": {
                      "type": [
                        "null",
                        "number"
                      ]
                    },
                    "serviceUserId": {
                      "type": [
                        "null",
                        "number"
                      ]
                    },
                    "loginMethod": {
                      "type": [
                        "null",
                        "number"
                      ]
                    },
                    "refreshTokenId": {
                      "type": "number"
                    },
                    "scopeGroupIds": {
                      "type": "array",
                      "items": {
                        "type": "number"
                      }
                    },
                    "serviceUsername": {
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "userData": {
                      "id": "http://tradex.techx.vn/common/userData",
                      "$schema": "http://json-schema.org/draft-07/schema#",
                      "description": "An user data in token",
                      "type": "object",
                      "properties": {
                        "username": {
                          "type": "string"
                        },
                        "orderKeys": {
                          "type": [
                            "null",
                            "number"
                          ]
                        },
                        "identifierNumber": {
                          "type": "string"
                        },
                        "branchCode": {
                          "type": "string"
                        },
                        "mngDeptCode": {
                          "type": "string"
                        },
                        "deptCode": {
                          "type": "string"
                        },
                        "agencyNumber": {
                          "type": "string"
                        },
                        "accountNumbers": {
                          "type": "array",
                          "items": {
                            "type": "string"
                          }
                        },
                        "fssTokenId": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              ]
            },
            "secToken": {
              "oneOf": [
                {
                  "type": "null"
                },
                {
                  "id": "http://tradex.techx.vn/common/token",
                  "$schema": "http://json-schema.org/draft-07/schema#",
                  "description": "A geographical coordinate",
                  "type": "object",
                  "properties": {
                    "domain": {
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "userId": {
                      "type": [
                        "null",
                        "number"
                      ]
                    },
                    "serviceCode": {
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "connectionId": {
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "serviceId": {
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "serviceName": {
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "clientId": {
                      "type": [
                        "null",
                        "number"
                      ]
                    },
                    "serviceUserId": {
                      "type": [
                        "null",
                        "number"
                      ]
                    },
                    "loginMethod": {
                      "type": [
                        "null",
                        "number"
                      ]
                    },
                    "refreshTokenId": {
                      "type": "number"
                    },
                    "scopeGroupIds": {
                      "type": "array",
                      "items": {
                        "type": "number"
                      }
                    },
                    "serviceUsername": {
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "userData": {
                      "id": "http://tradex.techx.vn/common/userData",
                      "$schema": "http://json-schema.org/draft-07/schema#",
                      "description": "An user data in token",
                      "type": "object",
                      "properties": {
                        "username": {
                          "type": "string"
                        },
                        "orderKeys": {
                          "type": [
                            "null",
                            "number"
                          ]
                        },
                        "identifierNumber": {
                          "type": "string"
                        },
                        "branchCode": {
                          "type": "string"
                        },
                        "mngDeptCode": {
                          "type": "string"
                        },
                        "deptCode": {
                          "type": "string"
                        },
                        "agencyNumber": {
                          "type": "string"
                        },
                        "accountNumbers": {
                          "type": "array",
                          "items": {
                            "type": "string"
                          }
                        },
                        "fssTokenId": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              ]
            },
            "accept-language": {
              "type": [
                "null",
                "string"
              ]
            }
          }
        },
        "sourceIp": {
          "type": "string"
        },
        "deviceType": {
          "type": [
            "null",
            "string"
          ]
        }
      }
    },
    {
      "properties": {
        "namespaceId": {
          "type": "integer",
          "description": "name space id"
        },
        "lang": {
          "id": "http://tradex.techx.vn/common/language",
          "$schema": "http://json-schema.org/draft-07/schema#",
          "description": "base request for all other",
          "type": "string",
          "enum": [
            "vi",
            "en",
            "kr",
            "cn",
            "th"
          ]
        },
        "version": {
          "type": "string",
          "description": "versionning"
        }
      },
      "required": [
        "namespaceId",
        "lang"
      ]
    }
  ]
};
let postUploadLocaleRequestAjv = null;
export function postUploadLocaleRequestValidator() {
  if (postUploadLocaleRequestAjv == null) {
    postUploadLocaleRequestAjv = new Ajv({validateSchema: false}).compile(postUploadLocaleRequestSchema);
  }
  return postUploadLocaleRequestAjv;
}
      