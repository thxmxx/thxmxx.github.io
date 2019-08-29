define({ "api": [
  {
    "type": "post",
    "url": "/auth/local",
    "title": "Authenticate",
    "name": "Authenticate",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuário.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha do usuário.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X POST \\\nhttp://localhost:9000/api/auth/local \\\n-H 'Content-Type: application/json' \\\n-d '{\n\"username\": \"contato@motoratech.com\",\n\"password\": \"admin123\"\n}'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JWT token</p>"
          },
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User data</p>"
          },
          {
            "group": "Success 201",
            "type": "timestamp",
            "optional": false,
            "field": "timestamp",
            "description": "<p>Timestamp response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n   \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNjdlMjEwMWI5MGYzMzY0MjEwNmRhYSIsIm5hbWUiOiJEZXYiLCJjb21wYW55Ijp7InVwZGF0ZWRBdCI6IjIwMTktMDgtMjlUMTQ6MzE6NDguMjQ0WiIsImNyZWF0ZWRBdCI6IjIwMTktMDgtMjlUMTQ6MzE6NDguMjQ0WiIsIm5hbWUiOiJWYWIgTW9iaWxlIiwiZGVzYyI6IlZhYiBNb2JpbGUiLCJpbml0aWFscyI6IlZBQk0iLCJjb25maWciOiI1ZDY3ZTFkNDFiOTBmMzM2NDIxMDZkNzQiLCJfX3YiOjAsImtleXdvcmRzIjpbInZhYiBtb2JpbGUiXSwiYWN0aXZlIjp0cnVlLCJpZCI6IjVkNjdlMWQ0MWI5MGYzMzY0MjEwNmQ3NSJ9LCJyb2xlIjoibWFuYWdlciIsInRoZW1lIjoiZGlhIiwiaWF0IjoxNTY3MDkxNDUwfQ.nHxgfer6hD9RcxIy66eDSNVsBMtzaE86ZrHVddTSFC4\",\n   \"user\": {\n       \"id\": \"5d67e2101b90f33642106daa\",\n       \"email\": \"vabmobiledev@motoratech.com\",\n       \"name\": \"Dev\",\n       \"company\": {\n           \"id\": \"5d67e1d41b90f33642106d75\",\n           \"name\": \"Vab Mobile\",\n           \"desc\": \"Vab Mobile\",\n           \"initials\": \"VABM\",\n           \"config\": \"5d67e1d41b90f33642106d74\",\n           \"createdAt\": \"2019-08-29T14:31:48.244Z\",\n           \"updatedAt\": \"2019-08-29T14:31:48.244Z\",\n           \"active\": true\n       },\n       \"role\": \"manager\",\n       \"receiveEmail\": true\n   },\n   \"timestamp\": 1567091450693\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>invalid credentials.</p>"
          }
        ]
      }
    },
    "contentType": "application/json",
    "version": "0.0.0",
    "filename": "src/api/auth/index.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/drivers",
    "title": "Create driver",
    "name": "CreateDriver",
    "group": "Driver",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass Bearer <code>token</code> authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "nome",
            "description": "<p>Driver's nome.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "matricula",
            "description": "<p>Driver's matricula.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "cnh",
            "description": "<p>Driver's cnh.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "driver",
            "description": "<p>Driver's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Driver not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/driver/index.js",
    "groupTitle": "Driver"
  },
  {
    "type": "delete",
    "url": "/drivers/:id",
    "title": "Delete driver",
    "name": "DeleteDriver",
    "group": "Driver",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass Bearer <code>token</code> authorization header to access this endpoint.</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Driver not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/driver/index.js",
    "groupTitle": "Driver"
  },
  {
    "type": "get",
    "url": "/drivers/:id",
    "title": "Retrieve driver",
    "name": "RetrieveDriver",
    "group": "Driver",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass Bearer <code>token</code> authorization header to access this endpoint.</p>"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X GET \\\n  https://driveranalytics.com.br/api/drivers/5d67e7311b90f336421072a1 \\\n  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNjdlMjEwMWI5MGYzMzY0MjEwNmRhYSIsIm5hbWUiOiJEZXYiLCJjb21wYW55Ijp7InVwZGF0ZWRBdCI6IjIwMTktMDgtMjlUMTQ6MzE6NDguMjQ0WiIsImNyZWF0ZWRBdCI6IjIwMTktMDgtMjlUMTQ6MzE6NDguMjQ0WiIsIm5hbWUiOiJWYWIgTW9iaWxlIiwiZGVzYyI6IlZhYiBNb2JpbGUiLCJpbml0aWFscyI6IlZBQk0iLCJjb25maWciOiI1ZDY3ZTFkNDFiOTBmMzM2NDIxMDZkNzQiLCJfX3YiOjAsImtleXdvcmRzIjpbInZhYiBtb2JpbGUiXSwiYWN0aXZlIjp0cnVlLCJpZCI6IjVkNjdlMWQ0MWI5MGYzMzY0MjEwNmQ3NSJ9LCJyb2xlIjoibWFuYWdlciIsInRoZW1lIjoiZGlhIiwiaWF0IjoxNTY3MDkzNjg4fQ.foxGxKbHWm75Jt34NFJw7our9-sWpy2XpQU7-o_R2Gk' \\\n  -H 'Content-Type: application/json'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "driver",
            "description": "<p>Driver's data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n    \"id\": \"5d67e7311b90f336421072a1\",\n    \"user\": {\n        \"id\": \"5d67e2101b90f33642106daa\",\n        \"email\": \"vabmobiledev@motoratech.com\",\n        \"name\": \"Dev\",\n        \"company\": {\n            \"id\": \"5d67e1d41b90f33642106d75\"\n        },\n        \"role\": \"manager\",\n        \"receiveEmail\": true\n    },\n    \"nome\": \"Teste\",\n    \"matricula\": \"0001\",\n    \"base_de_operacao\": {\n        \"id\": \"5d67e61a1b90f3364210715f\"\n    },\n    \"cnh\": \"0000\",\n    \"createdAt\": \"2019-08-29T14:54:41.440Z\",\n    \"updatedAt\": \"2019-08-29T15:39:27.254Z\",\n    \"company\": \"5d67e1d41b90f33642106d75\",\n    \"active\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Driver not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/driver/index.js",
    "groupTitle": "Driver"
  },
  {
    "type": "get",
    "url": "/drivers",
    "title": "Retrieve drivers",
    "name": "RetrieveDrivers",
    "group": "Driver",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass Bearer <code>token</code> authorization header to access this endpoint.</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Total amount of drivers.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "rows",
            "description": "<p>List of drivers.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/driver/index.js",
    "groupTitle": "Driver",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>Query to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..999...",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..999...",
            "optional": true,
            "field": "limit",
            "defaultValue": "30",
            "description": "<p>Amount of returned items.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "sort",
            "defaultValue": "-createdAt",
            "description": "<p>Order of returned items.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "fields",
            "description": "<p>Fields to be returned.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/drivers/:id",
    "title": "Update driver",
    "name": "UpdateDriver",
    "group": "Driver",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass Bearer <code>token</code> authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "nome",
            "description": "<p>Driver's nome.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "matricula",
            "description": "<p>Driver's matricula.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "cnh",
            "description": "<p>Driver's cnh.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "driver",
            "description": "<p>Driver's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Driver not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/driver/index.js",
    "groupTitle": "Driver"
  },
  {
    "type": "post",
    "url": "/password-resets",
    "title": "Send email",
    "name": "SendPasswordReset",
    "group": "PasswordReset",
    "permission": [
      {
        "name": "master",
        "title": "Master access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email address to receive the password reset token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>Link to redirect user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 202": [
          {
            "group": "Success 202",
            "optional": false,
            "field": "202",
            "description": "<p>Accepted.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/password-reset/index.js",
    "groupTitle": "PasswordReset"
  },
  {
    "type": "put",
    "url": "/password-resets/:token",
    "title": "Submit password",
    "name": "SubmitPasswordReset",
    "group": "PasswordReset",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "6..",
            "optional": false,
            "field": "password",
            "description": "<p>User's new password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Token has expired or doesn't exist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/password-reset/index.js",
    "groupTitle": "PasswordReset"
  },
  {
    "type": "get",
    "url": "/password-resets/:token",
    "title": "Verify token",
    "name": "VerifyPasswordReset",
    "group": "PasswordReset",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Password reset token.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Token has expired or doesn't exist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/password-reset/index.js",
    "groupTitle": "PasswordReset"
  },
  {
    "type": "post",
    "url": "/travels",
    "title": "Create travel",
    "name": "CreateTravel",
    "group": "Travel",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass Bearer <code>token</code> authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "inicio",
            "description": "<p>Travel's inicio.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "fim",
            "description": "<p>Travel's fim.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "travel",
            "description": "<p>Travel's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Travel not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/travel/index.js",
    "groupTitle": "Travel"
  },
  {
    "type": "delete",
    "url": "/travels/:id",
    "title": "Delete travel",
    "name": "DeleteTravel",
    "group": "Travel",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass Bearer <code>token</code> authorization header to access this endpoint.</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Travel not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/travel/index.js",
    "groupTitle": "Travel"
  },
  {
    "type": "get",
    "url": "/travels/:id",
    "title": "Retrieve travel",
    "name": "RetrieveTravel",
    "group": "Travel",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass Bearer <code>token</code> authorization header to access this endpoint.</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "travel",
            "description": "<p>Travel's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Travel not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/travel/index.js",
    "groupTitle": "Travel"
  },
  {
    "type": "get",
    "url": "/travels",
    "title": "Retrieve travels",
    "name": "RetrieveTravels",
    "group": "Travel",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass Bearer <code>token</code> authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": true,
            "field": "vehichle",
            "defaultValue": "all",
            "description": "<p>Vehicle's id.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": true,
            "field": "driver",
            "defaultValue": "all",
            "description": "<p>Driver's id.</p>"
          },
          {
            "group": "Parameter",
            "type": "ISODateString",
            "optional": true,
            "field": "ini",
            "defaultValue": "1970-1-1",
            "description": "<p>Initial date.</p>"
          },
          {
            "group": "Parameter",
            "type": "ISODateString",
            "optional": true,
            "field": "fin",
            "defaultValue": "today()",
            "description": "<p>Final date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>Query to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..999...",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..999...",
            "optional": true,
            "field": "limit",
            "defaultValue": "30",
            "description": "<p>Amount of returned items.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "sort",
            "defaultValue": "-createdAt",
            "description": "<p>Order of returned items.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "fields",
            "description": "<p>Fields to be returned.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Total amount of travels.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "rows",
            "description": "<p>List of travels.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/travel/index.js",
    "groupTitle": "Travel"
  },
  {
    "type": "put",
    "url": "/travels/:id",
    "title": "Update travel",
    "name": "UpdateTravel",
    "group": "Travel",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass Bearer <code>token</code> authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "inicio",
            "description": "<p>Travel's inicio.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "fim",
            "description": "<p>Travel's fim.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "travel",
            "description": "<p>Travel's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Travel not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/travel/index.js",
    "groupTitle": "Travel"
  },
  {
    "type": "post",
    "url": "/vehicles",
    "title": "Create vehicle",
    "name": "CreateVehicle",
    "group": "Vehicle",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass Bearer <code>token</code> authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>user access token.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "placa",
            "description": "<p>Vehicle's placa.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "vehicle",
            "description": "<p>Vehicle's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Vehicle not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/vehicle/index.js",
    "groupTitle": "Vehicle"
  },
  {
    "type": "delete",
    "url": "/vehicles/:id",
    "title": "Delete vehicle",
    "name": "DeleteVehicle",
    "group": "Vehicle",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass Bearer <code>token</code> authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>user access token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Vehicle not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/vehicle/index.js",
    "groupTitle": "Vehicle"
  },
  {
    "type": "get",
    "url": "/vehicles/:id",
    "title": "Retrieve vehicle",
    "name": "RetrieveVehicle",
    "group": "Vehicle",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass Bearer <code>token</code> authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>user access token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "vehicle",
            "description": "<p>Vehicle's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Vehicle not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/vehicle/index.js",
    "groupTitle": "Vehicle"
  },
  {
    "type": "get",
    "url": "/vehicles",
    "title": "Retrieve vehicles",
    "name": "RetrieveVehicles",
    "group": "Vehicle",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass Bearer <code>token</code> authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>user access token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>Query to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..999...",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..999...",
            "optional": true,
            "field": "limit",
            "defaultValue": "30",
            "description": "<p>Amount of returned items.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "sort",
            "defaultValue": "-createdAt",
            "description": "<p>Order of returned items.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "fields",
            "description": "<p>Fields to be returned.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Total amount of vehicles.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "rows",
            "description": "<p>List of vehicles.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/vehicle/index.js",
    "groupTitle": "Vehicle"
  },
  {
    "type": "put",
    "url": "/vehicles/:id",
    "title": "Update vehicle",
    "name": "UpdateVehicle",
    "group": "Vehicle",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass Bearer <code>token</code> authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>user access token.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "placa",
            "description": "<p>Vehicle's placa.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "vehicle",
            "description": "<p>Vehicle's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Vehicle not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/vehicle/index.js",
    "groupTitle": "Vehicle"
  },
  {
    "type": "post",
    "url": "/versions",
    "title": "Create version",
    "name": "CreateVersion",
    "group": "Version",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass Bearer <code>token</code> authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>user access token.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "platform",
            "description": "<p>Version's platform.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "version",
            "description": "<p>Version's version.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "version",
            "description": "<p>Version's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Version not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/version/index.js",
    "groupTitle": "Version"
  },
  {
    "type": "delete",
    "url": "/versions/:id",
    "title": "Delete version",
    "name": "DeleteVersion",
    "group": "Version",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass Bearer <code>token</code> authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>user access token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Version not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/version/index.js",
    "groupTitle": "Version"
  },
  {
    "type": "get",
    "url": "/versions/:id",
    "title": "Retrieve version",
    "name": "RetrieveVersion",
    "group": "Version",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass Bearer <code>token</code> authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>user access token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "version",
            "description": "<p>Version's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Version not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/version/index.js",
    "groupTitle": "Version"
  },
  {
    "type": "get",
    "url": "/versions",
    "title": "Retrieve versions",
    "name": "RetrieveVersions",
    "group": "Version",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass Bearer <code>token</code> authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>user access token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>Query to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..999...",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..999...",
            "optional": true,
            "field": "limit",
            "defaultValue": "30",
            "description": "<p>Amount of returned items.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "sort",
            "defaultValue": "-createdAt",
            "description": "<p>Order of returned items.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "fields",
            "description": "<p>Fields to be returned.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Total amount of versions.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "rows",
            "description": "<p>List of versions.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/version/index.js",
    "groupTitle": "Version"
  },
  {
    "type": "put",
    "url": "/versions/:id",
    "title": "Update version",
    "name": "UpdateVersion",
    "group": "Version",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass Bearer <code>token</code> authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>user access token.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "platform",
            "description": "<p>Version's platform.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "version",
            "description": "<p>Version's version.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "version",
            "description": "<p>Version's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Version not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/version/index.js",
    "groupTitle": "Version"
  }
] });
