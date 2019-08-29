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
        "content": "curl -X POST \\\nhttps://driveranalytics.com.br/api/auth/local \\\n-H 'Content-Type: application/json' \\\n-d '{\n\"username\": \"vabmobiledev@motoratech.com\",\n\"password\": \"xxxxxx\"\n}'",
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
          "content": "{\n   \"token\": \"eyJhbGciOiJIUzI1NiI13fR5cCI6IkpXVCJ9.eyJpZCI6IjVkNjdlMjEw13I5MGYzMzY0MjEwNmRhYSIsIm53bWUiOiJEZ1YiLCJjb21wYW55Ijp7InVwZGF0ZWRBdCI6IjIwMTktMDgtMjlUMTQ6MzE6NDguMjQ0WiIsImNyZWF0ZWRBdCI6IjIwMTktMDgtMjlUMTQ6MzE6NDguMjQ0WiIsIm5hbWUiOiJWYWIgTW9iaWxlIiwiZGVzYyI6IlZhYiBNb2JpbGUiLCJpbml0aWFscyI6IlZBQk0iLCJjb25maWciOiI1ZDY3ZTFkNDFiOTBmMzM2NDIxMDZkNzQiLCJfX3YiOjAsImtleXdvcmRzIjpbInZhYiBtb2JpbGUiXSwiYWN0aXZlIjp0cnVlLCJpZCI6IjVkNjdlMWQ0MWI5MGYzMzY0MjEwNmQ3NSJ9LCJyb2xlIjoibWFuYWdlciIsInRoZW1lIjoiZGlhIiwiaWF0IjoxNTY3MDkxNDUwfQ.nHxgfer6hD9RcxIy66eDSNVsBMtzaE86ZrHVddTSFC4\",\n   \"user\": {\n       \"id\": \"5d67e2101b90f33642106daa\",\n       \"email\": \"vabmobiledev@motoratech.com\",\n       \"name\": \"Dev\",\n       \"company\": {\n           \"id\": \"5d67e1d41b90f33642106d75\",\n           \"name\": \"Vab Mobile\",\n           \"desc\": \"Vab Mobile\",\n           \"initials\": \"VABM\",\n           \"config\": \"5d67e1d41b90f33642106d74\",\n           \"createdAt\": \"2019-08-29T14:31:48.244Z\",\n           \"updatedAt\": \"2019-08-29T14:31:48.244Z\",\n           \"active\": true\n       },\n       \"role\": \"manager\",\n       \"receiveEmail\": true\n   },\n   \"timestamp\": 1567091450693\n}",
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
    "version": "0.0.0",
    "filename": "src/api/auth/index.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/bases",
    "title": "Create Base",
    "name": "CreateBase",
    "group": "Base",
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
            "field": "nome",
            "description": "<p>Nome da base de operação.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>Descrição da base de operação.</p>"
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
            "field": "base",
            "description": "<p>Base's data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": " {\n    \"id\": \"5d68434106c0cf4b635ddd91\",\n    \"user\": {\n        \"id\": \"5d67e2101b90f33642106daa\",\n        \"email\": \"vabmobiledev@motoratech.com\",\n        \"name\": \"Dev\",\n        \"company\": {\n            \"id\": \"5d67e1d41b90f33642106d75\"\n        },\n        \"role\": \"manager\",\n        \"receiveEmail\": true\n    },\n    \"nome\": \"Teste\",\n    \"desc\": \"Teste\",\n    \"createdAt\": \"2019-08-29T21:27:29.583Z\",\n    \"updatedAt\": \"2019-08-29T21:27:29.583Z\",\n    \"company\": \"5d67e1d41b90f33642106d75\",\n    \"active\": true\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": " curl -X POST \\\n  https://driveranalytics.com.br/api/bases/ \\\n  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNjdlMjEwMWI5MGYzMzY0MjEwNmRhYSIsIm5hbWUiOiJEZXYiLCJjb21wYW55Ijp7InVwZGF0ZWRBdCI6IjIwMTktMDgtMjlUMTQ6MzE6NDguMjQ0WiIsImNyZWF0ZWRBdCI6IjIwMTktMDgtMjlUMTQ6MzE6NDguMjQ0WiIsIm5hbWUiOiJWYWIgTW9iaWxlIiwiZGVzYyI6IlZhYiBNb2JpbGUiLCJpbml0aWFscyI6IlZBQk0iLCJjb25maWciOiI1ZDY3ZTFkNDFiOTBmMzM2NDIxMDZkNzQiLCJfX3YiOjAsImtleXdvcmRzIjpbInZhYiBtb2JpbGUiXSwiYWN0aXZlIjp0cnVlLCJpZCI6IjVkNjdlMWQ0MWI5MGYzMzY0MjEwNmQ3NSJ9LCJyb2xlIjoibWFuYWdlciIsInRoZW1lIjoiZGlhIiwiaWF0IjoxNTY3MDg5MjkzfQ.PUGy6lPKFz1Kt9Z_pcOOahtCUMjvwSYTIrZdYgGa3xE' \\\n  -H 'cache-control: no-cache' \\\n  -H 'content-type: application/json' \\\n  -d '{\n  \"nome\": \"Teste\",\n  \"desc\": \"Teste\"\n}'",
        "type": "curl"
      }
    ],
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
            "description": "<p>Base not found.</p>"
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
    "filename": "src/api/base/index.js",
    "groupTitle": "Base"
  },
  {
    "type": "get",
    "url": "/bases/:id",
    "title": "Retrieve base",
    "name": "RetrieveBase",
    "group": "Base",
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
        "content": "curl -X GET \\\nhttps://driveranalytics.com.br/api/bases/5d68434106c0cf4b635ddd91 \\\n-H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNjdlMjEwMWI5MGYzMzY0MjEwNmRhYSIsIm5hbWUiOiJEZXYiLCJjb21wYW55Ijp7InVwZGF0ZWRBdCI6IjIwMTktMDgtMjlUMTQ6MzE6NDguMjQ0WiIsImNyZWF0ZWRBdCI6IjIwMTktMDgtMjlUMTQ6MzE6NDguMjQ0WiIsIm5hbWUiOiJWYWIgTW9iaWxlIiwiZGVzYyI6IlZhYiBNb2JpbGUiLCJpbml0aWFscyI6IlZBQk0iLCJjb25maWciOiI1ZDY3ZTFkNDFiOTBmMzM2NDIxMDZkNzQiLCJfX3YiOjAsImtleXdvcmRzIjpbInZhYiBtb2JpbGUiXSwiYWN0aXZlIjp0cnVlLCJpZCI6IjVkNjdlMWQ0MWI5MGYzMzY0MjEwNmQ3NSJ9LCJyb2xlIjoibWFuYWdlciIsInRoZW1lIjoiZGlhIiwiaWF0IjoxNTY3MDg5MjkzfQ.PUGy6lPKFz1Kt9Z_pcOOahtCUMjvwSYTIrZdYgGa3xE' \\\n-H 'cache-control: no-cache' \\\n-H 'content-type: application/json'",
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
          "content": " {\n    \"id\": \"5d68434106c0cf4b635ddd91\",\n    \"user\": {\n        \"id\": \"5d67e2101b90f33642106daa\",\n        \"email\": \"vabmobiledev@motoratech.com\",\n        \"name\": \"Dev\",\n        \"company\": {\n            \"id\": \"5d67e1d41b90f33642106d75\"\n        },\n        \"role\": \"manager\",\n        \"receiveEmail\": true\n    },\n    \"nome\": \"Teste\",\n    \"desc\": \"Teste\",\n    \"createdAt\": \"2019-08-29T21:27:29.583Z\",\n    \"updatedAt\": \"2019-08-29T21:27:29.583Z\",\n    \"company\": \"5d67e1d41b90f33642106d75\",\n    \"active\": true\n}",
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
            "description": "<p>Base not found.</p>"
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
    "filename": "src/api/base/index.js",
    "groupTitle": "Base"
  },
  {
    "type": "get",
    "url": "/bases",
    "title": "Retrieve bases",
    "name": "RetrieveBases",
    "group": "Base",
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
        "content": "curl -X GET \\\n  https://driveranalytics.com.br/api/bases/ \\\n  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNjdlMjEwMWI5MGYzMzY0MjEwNmRhYSIsIm5hbWUiOiJEZXYiLCJjb21wYW55Ijp7InVwZGF0ZWRBdCI6IjIwMTktMDgtMjlUMTQ6MzE6NDguMjQ0WiIsImNyZWF0ZWRBdCI6IjIwMTktMDgtMjlUMTQ6MzE6NDguMjQ0WiIsIm5hbWUiOiJWYWIgTW9iaWxlIiwiZGVzYyI6IlZhYiBNb2JpbGUiLCJpbml0aWFscyI6IlZBQk0iLCJjb25maWciOiI1ZDY3ZTFkNDFiOTBmMzM2NDIxMDZkNzQiLCJfX3YiOjAsImtleXdvcmRzIjpbInZhYiBtb2JpbGUiXSwiYWN0aXZlIjp0cnVlLCJpZCI6IjVkNjdlMWQ0MWI5MGYzMzY0MjEwNmQ3NSJ9LCJyb2xlIjoibWFuYWdlciIsInRoZW1lIjoiZGlhIiwiaWF0IjoxNTY3MDg5MjkzfQ.PUGy6lPKFz1Kt9Z_pcOOahtCUMjvwSYTIrZdYgGa3xE' \\\n  -H 'cache-control: no-cache' \\\n  -H 'content-type: application/json'",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": " {\n    \"count\": 2,\n    \"rows\": [\n        {\n            \"id\": \"5d68434106c0cf4b635ddd91\",\n            \"user\": {\n                \"id\": \"5d67e2101b90f33642106daa\",\n                \"email\": \"vabmobiledev@motoratech.com\",\n                \"name\": \"Dev\",\n                \"company\": {\n                    \"id\": \"5d67e1d41b90f33642106d75\"\n                },\n                \"role\": \"manager\",\n                \"receiveEmail\": true\n            },\n            \"nome\": \"Teste\",\n            \"desc\": \"Teste\",\n            \"createdAt\": \"2019-08-29T21:27:29.583Z\",\n            \"updatedAt\": \"2019-08-29T21:27:29.583Z\",\n            \"company\": \"5d67e1d41b90f33642106d75\",\n            \"active\": true\n        },\n        {\n            \"id\": \"5d67e61a1b90f3364210715f\",\n            \"user\": {\n                \"id\": \"5d67e2101b90f33642106daa\",\n                \"email\": \"vabmobiledev@motoratech.com\",\n                \"name\": \"Dev\",\n                \"company\": {\n                    \"id\": \"5d67e1d41b90f33642106d75\"\n                },\n                \"role\": \"manager\",\n                \"receiveEmail\": true\n            },\n            \"nome\": \"Teste Mod\",\n            \"desc\": \"Teste Mod\",\n            \"createdAt\": \"2019-08-29T14:50:02.978Z\",\n            \"updatedAt\": \"2019-08-29T15:01:58.494Z\",\n            \"company\": \"5d67e1d41b90f33642106d75\",\n            \"active\": true\n        }\n    ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Total amount of bases.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "rows",
            "description": "<p>List of bases.</p>"
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
    "filename": "src/api/base/index.js",
    "groupTitle": "Base",
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
    "url": "/bases/:id",
    "title": "Update Base",
    "name": "UpdateBase",
    "group": "Base",
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
            "field": "nome",
            "description": "<p>Nome da base de operação.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>Descrição da base de operação.</p>"
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
            "field": "base",
            "description": "<p>Base's data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": " {\n    \"id\": \"5d68434106c0cf4b635ddd91\",\n    \"user\": {\n        \"id\": \"5d67e2101b90f33642106daa\",\n        \"email\": \"vabmobiledev@motoratech.com\",\n        \"name\": \"Dev\",\n        \"company\": {\n            \"id\": \"5d67e1d41b90f33642106d75\"\n        },\n        \"role\": \"manager\",\n        \"receiveEmail\": true\n    },\n    \"nome\": \"Teste Update\",\n    \"desc\": \"Teste Update\",\n    \"createdAt\": \"2019-08-29T21:27:29.583Z\",\n    \"updatedAt\": \"2019-08-29T21:35:50.564Z\",\n    \"company\": \"5d67e1d41b90f33642106d75\",\n    \"active\": true\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X PUT \\\n  https://driveranalytics.com.br/api/bases/5d68434106c0cf4b635ddd91 \\\n  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNjdlMjEwMWI5MGYzMzY0MjEwNmRhYSIsIm5hbWUiOiJEZXYiLCJjb21wYW55Ijp7InVwZGF0ZWRBdCI6IjIwMTktMDgtMjlUMTQ6MzE6NDguMjQ0WiIsImNyZWF0ZWRBdCI6IjIwMTktMDgtMjlUMTQ6MzE6NDguMjQ0WiIsIm5hbWUiOiJWYWIgTW9iaWxlIiwiZGVzYyI6IlZhYiBNb2JpbGUiLCJpbml0aWFscyI6IlZBQk0iLCJjb25maWciOiI1ZDY3ZTFkNDFiOTBmMzM2NDIxMDZkNzQiLCJfX3YiOjAsImtleXdvcmRzIjpbInZhYiBtb2JpbGUiXSwiYWN0aXZlIjp0cnVlLCJpZCI6IjVkNjdlMWQ0MWI5MGYzMzY0MjEwNmQ3NSJ9LCJyb2xlIjoibWFuYWdlciIsInRoZW1lIjoiZGlhIiwiaWF0IjoxNTY3MDg5MjkzfQ.PUGy6lPKFz1Kt9Z_pcOOahtCUMjvwSYTIrZdYgGa3xE' \\\n  -H 'cache-control: no-cache' \\\n  -H 'content-type: application/json' \\\n  -d '{\n  \"nome\": \"Teste Update\",\n  \"desc\": \"Teste Update\"\n}'",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "src/api/base/index.js",
    "groupTitle": "Base"
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
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do motorista.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "matricula",
            "description": "<p>Matrícula do motorista.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cnh",
            "description": "<p>CNH do motorista.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "base_de_operacao",
            "description": "<p>Id da Base de Operação (Obrigatório).</p>"
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
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": " {\n    \"id\": \"5d682ec51b90f3364210d6b8\",\n    \"user\": {\n        \"id\": \"5d67e2101b90f33642106daa\",\n        \"email\": \"vabmobiledev@motoratech.com\",\n        \"name\": \"Dev\",\n        \"company\": {\n            \"id\": \"5d67e1d41b90f33642106d75\"\n        },\n        \"role\": \"manager\",\n        \"receiveEmail\": true\n    },\n    \"nome\": \"Teste\",\n    \"matricula\": \"000\",\n    \"base_de_operacao\": {\n        \"id\": \"5d67e61a1b90f3364210715f\"\n    },\n    \"cnh\": \"000\",\n    \"createdAt\": \"2019-08-29T20:00:05.078Z\",\n    \"updatedAt\": \"2019-08-29T20:00:05.078Z\",\n    \"company\": \"5d67e1d41b90f33642106d75\",\n    \"active\": true\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X POST \\\n  https://driveranalytics.com.br/api/drivers/ \\\n  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNjdlMjEwMWI5MGYzMzY0MjEwNmRhYSIsIm5hbWUiOiJEZXYiLCJjb21wYW55Ijp7InVwZGF0ZWRBdCI6IjIwMTktMDgtMjlUMTQ6MzE6NDguMjQ0WiIsImNyZWF0ZWRBdCI6IjIwMTktMDgtMjlUMTQ6MzE6NDguMjQ0WiIsIm5hbWUiOiJWYWIgTW9iaWxlIiwiZGVzYyI6IlZhYiBNb2JpbGUiLCJpbml0aWFscyI6IlZBQk0iLCJjb25maWciOiI1ZDY3ZTFkNDFiOTBmMzM2NDIxMDZkNzQiLCJfX3YiOjAsImtleXdvcmRzIjpbInZhYiBtb2JpbGUiXSwiYWN0aXZlIjp0cnVlLCJpZCI6IjVkNjdlMWQ0MWI5MGYzMzY0MjEwNmQ3NSJ9LCJyb2xlIjoibWFuYWdlciIsInRoZW1lIjoiZGlhIiwiaWF0IjoxNTY3MDg5MjkzfQ.PUGy6lPKFz1Kt9Z_pcOOahtCUMjvwSYTIrZdYgGa3xE' \\\n  -H 'cache-control: no-cache' \\\n  -H 'content-type: application/json' \\\n  -d '{\n\t\"nome\": \"Teste\"\t,\n\t\"base_de_operacao\": \"5d67e61a1b90f3364210715f\",\n\t\"matricula\": \"0000\",\n\t\"cnh\": \"0000\"\n}'",
        "type": "curl"
      }
    ],
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
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X DELETE \\\n  https://driveranalytics.com.br/api/bases/5d68434106c0cf4b635ddd91 \\\n  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNjdlMjEwMWI5MGYzMzY0MjEwNmRhYSIsIm5hbWUiOiJEZXYiLCJjb21wYW55Ijp7InVwZGF0ZWRBdCI6IjIwMTktMDgtMjlUMTQ6MzE6NDguMjQ0WiIsImNyZWF0ZWRBdCI6IjIwMTktMDgtMjlUMTQ6MzE6NDguMjQ0WiIsIm5hbWUiOiJWYWIgTW9iaWxlIiwiZGVzYyI6IlZhYiBNb2JpbGUiLCJpbml0aWFscyI6IlZBQk0iLCJjb25maWciOiI1ZDY3ZTFkNDFiOTBmMzM2NDIxMDZkNzQiLCJfX3YiOjAsImtleXdvcmRzIjpbInZhYiBtb2JpbGUiXSwiYWN0aXZlIjp0cnVlLCJpZCI6IjVkNjdlMWQ0MWI5MGYzMzY0MjEwNmQ3NSJ9LCJyb2xlIjoibWFuYWdlciIsInRoZW1lIjoiZGlhIiwiaWF0IjoxNTY3MDg5MjkzfQ.PUGy6lPKFz1Kt9Z_pcOOahtCUMjvwSYTIrZdYgGa3xE' \\\n  -H 'cache-control: no-cache' \\\n  -H 'content-type: application/json' \\\n  -H 'postman-token: 9268d08e-9228-d88c-bbc7-345f88d6015f'",
        "type": "curl"
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
    "filename": "src/api/base/index.js",
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
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do motorista.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "matricula",
            "description": "<p>Matrícula do motorista.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cnh",
            "description": "<p>CNH do motorista.</p>"
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
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": " {\n    \"id\": \"5d67e7311b90f336421072a1\",\n    \"user\": {\n        \"id\": \"5d67e2101b90f33642106daa\",\n        \"email\": \"vabmobiledev@motoratech.com\",\n        \"name\": \"Dev\",\n        \"company\": {\n            \"id\": \"5d67e1d41b90f33642106d75\"\n        },\n        \"role\": \"manager\",\n        \"receiveEmail\": true\n    },\n    \"nome\": \"Teste\",\n    \"matricula\": \"0001\",\n    \"base_de_operacao\": {\n        \"id\": \"5d67e61a1b90f3364210715f\"\n    },\n    \"cnh\": \"0000\",\n    \"createdAt\": \"2019-08-29T14:54:41.440Z\",\n    \"updatedAt\": \"2019-08-29T15:39:27.254Z\",\n    \"company\": \"5d67e1d41b90f33642106d75\",\n    \"active\": true\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X PUT \\\n  https://driveranalytics.com.br/api/drivers/5d67e7311b90f336421072a1 \\\n  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNjdlMjEwMWI5MGYzMzY0MjEwNmRhYSIsIm5hbWUiOiJEZXYiLCJjb21wYW55Ijp7InVwZGF0ZWRBdCI6IjIwMTktMDgtMjlUMTQ6MzE6NDguMjQ0WiIsImNyZWF0ZWRBdCI6IjIwMTktMDgtMjlUMTQ6MzE6NDguMjQ0WiIsIm5hbWUiOiJWYWIgTW9iaWxlIiwiZGVzYyI6IlZhYiBNb2JpbGUiLCJpbml0aWFscyI6IlZBQk0iLCJjb25maWciOiI1ZDY3ZTFkNDFiOTBmMzM2NDIxMDZkNzQiLCJfX3YiOjAsImtleXdvcmRzIjpbInZhYiBtb2JpbGUiXSwiYWN0aXZlIjp0cnVlLCJpZCI6IjVkNjdlMWQ0MWI5MGYzMzY0MjEwNmQ3NSJ9LCJyb2xlIjoibWFuYWdlciIsInRoZW1lIjoiZGlhIiwiaWF0IjoxNTY3MDg5MjkzfQ.PUGy6lPKFz1Kt9Z_pcOOahtCUMjvwSYTIrZdYgGa3xE' \\\n  -H 'cache-control: no-cache' \\\n  -H 'content-type: application/json' \\\n  -d '{\n\t\"matricula\": \"0001\"\n}'",
        "type": "curl"
      }
    ],
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
            "type": "String",
            "optional": false,
            "field": "inicio",
            "description": "<p>Horário de início da viagem.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "motorista",
            "description": "<p>Id do motorista.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "veiculo",
            "description": "<p>Id do veículo.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>Descrição da Viagem.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X POST \\\n  https://driveranalytics.com.br/api/travels/ \\\n  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNjdlMjEwMWI5MGYzMzY0MjEwNmRhYSIsIm5hbWUiOiJEZXYiLCJjb21wYW55Ijp7InVwZGF0ZWRBdCI6IjIwMTktMDgtMjlUMTQ6MzE6NDguMjQ0WiIsImNyZWF0ZWRBdCI6IjIwMTktMDgtMjlUMTQ6MzE6NDguMjQ0WiIsIm5hbWUiOiJWYWIgTW9iaWxlIiwiZGVzYyI6IlZhYiBNb2JpbGUiLCJpbml0aWFscyI6IlZBQk0iLCJjb25maWciOiI1ZDY3ZTFkNDFiOTBmMzM2NDIxMDZkNzQiLCJfX3YiOjAsImtleXdvcmRzIjpbInZhYiBtb2JpbGUiXSwiYWN0aXZlIjp0cnVlLCJpZCI6IjVkNjdlMWQ0MWI5MGYzMzY0MjEwNmQ3NSJ9LCJyb2xlIjoibWFuYWdlciIsInRoZW1lIjoiZGlhIiwiaWF0IjoxNTY3MDg5MjkzfQ.PUGy6lPKFz1Kt9Z_pcOOahtCUMjvwSYTIrZdYgGa3xE' \\\n  -H 'cache-control: no-cache' \\\n  -H 'content-type: application/json' \\\n  -d '{\n\t\"inicio\": \"2019-08-26T21:07:54.789Z\",\n\t\"motorista\": \"5d682ec51b90f3364210d6b8\",\n\t\"desc\": \"Viagem Teste\",\n\t\"veiculo\": \"5d67e4611b90f33642106fa9\"\n}'",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n    \"id\": \"5d6832f91b90f3364210e4b2\",\n    \"user\": {\n        \"id\": \"5d67e2101b90f33642106daa\",\n        \"email\": \"vabmobiledev@motoratech.com\",\n        \"name\": \"Dev\",\n        \"company\": {\n            \"id\": \"5d67e1d41b90f33642106d75\"\n        },\n        \"role\": \"manager\",\n        \"receiveEmail\": true\n    },\n    \"inicio\": \"2019-08-26T21:07:54.789Z\",\n    \"desc\": \"Viagem Teste\",\n    \"duration_in_seconds\": 0,\n    \"total_idle_time\": 0,\n    \"total_steady_speed_time\": 0,\n    \"idle_time_penalty\": 0,\n    \"steady_speed_time_penalty\": 0,\n    \"score\": \"10.00\",\n    \"scoreEconomy\": \"10.00\",\n    \"human_validated\": false,\n    \"travelled_distance\": 0,\n    \"motorista\": \"5d682ec51b90f3364210d6b8\",\n    \"veiculo\": \"5d67e4611b90f33642106fa9\",\n    \"events\": [],\n    \"snapshots\": [],\n    \"live_stream_request\": false,\n    \"status\": \"analyzed\",\n    \"company\": \"5d67e1d41b90f33642106d75\",\n    \"active\": true,\n    \"favorite\": false,\n    \"createdAt\": \"2019-08-29T20:18:01.590Z\",\n    \"updatedAt\": \"2019-08-29T20:18:01.590Z\",\n    \"rota\": []\n}",
          "type": "json"
        }
      ],
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
            "field": "vehicle",
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
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n    \"count\": 1,\n    \"rows\": [\n        {\n            \"_id\": \"5d67e4d91b90f336421070a8\",\n            \"updatedAt\": \"2019-08-29T15:34:08.804Z\",\n            \"createdAt\": \"2019-08-29T14:44:41.999Z\",\n            \"veiculo\": {\n                \"_id\": \"5d67e4611b90f33642106fa9\",\n                \"updatedAt\": \"2019-08-29T20:18:01.603Z\",\n                \"createdAt\": \"2019-08-29T14:42:41.677Z\",\n                \"camera\": \"5d67e42e1b90f33642106f98\",\n                \"identificador\": \"0001\",\n                \"placa\": \"TES0000\",\n                \"user\": \"5d67e2101b90f33642106daa\",\n                \"company\": \"5d67e1d41b90f33642106d75\",\n                \"keywords\": [\n                    \"tes 0000\",\n                    \"0001\"\n                ],\n                \"active\": true,\n                \"snapshots\": [],\n                \"camera_id_pos_extra1\": 3,\n                \"camera_id_pos_extra0\": 0,\n                \"camera_id_pos_interno\": 1,\n                \"camera_id_pos\": 2,\n                \"__v\": 1,\n                \"last_valid_ip\": \"127.0.0.1\"\n            },\n            \"user\": {\n                \"_id\": \"5d67e2101b90f33642106daa\",\n                \"updatedAt\": \"2019-08-29T14:32:48.362Z\",\n                \"createdAt\": \"2019-08-29T14:32:48.362Z\",\n                \"email\": \"vabmobiledev@motoratech.com\",\n                \"password\": \"$2a$09$scSozT9GC42swT2W.p/Q3OVdo4eyjjM05eFrIZ7fyiDjdaJYOS4IS\",\n                \"name\": \"Dev\",\n                \"company\": \"5d67e1d41b90f33642106d75\",\n                \"keywords\": [\n                    \"dev\",\n                    \"vabmobiledev motoratech com\"\n                ],\n                \"receiveEmail\": true,\n                \"active\": true,\n                \"timezone\": \"America/Sao_Paulo\",\n                \"role\": \"manager\",\n                \"theme\": \"dia\",\n                \"__v\": 0\n            },\n            \"company\": \"5d67e1d41b90f33642106d75\",\n            \"emailsent3\": false,\n            \"emailsent6\": false,\n            \"active\": true,\n            \"live_stream_request\": false,\n            \"snapshots\": [],\n            \"travelled_distance\": 0,\n            \"human_validated\": false,\n            \"scoreEconomy\": 10,\n            \"score\": 10,\n            \"steady_speed_time_penalty\": 0,\n            \"idle_time_penalty\": 0,\n            \"total_steady_speed_time\": 0,\n            \"total_idle_time\": 0,\n            \"duration_in_seconds\": 0,\n            \"favorite\": false,\n            \"status\": \"short\",\n            \"inicio\": \"2019-08-27T21:07:54.789Z\",\n            \"__v\": 0,\n            \"fim\": \"2019-08-27T21:07:54.789Z\",\n            \"motorista\": {\n                \"_id\": \"5d67e7311b90f336421072a1\",\n                \"updatedAt\": \"2019-08-29T15:39:27.254Z\",\n                \"createdAt\": \"2019-08-29T14:54:41.440Z\",\n                \"nome\": \"Teste\",\n                \"base_de_operacao\": \"5d67e61a1b90f3364210715f\",\n                \"matricula\": \"0001\",\n                \"cnh\": \"0000\",\n                \"user\": \"5d67e2101b90f33642106daa\",\n                \"company\": \"5d67e1d41b90f33642106d75\",\n                \"keywords\": [\n                    \"teste\",\n                    \"\",\n                    \"0001\"\n                ],\n                \"active\": true,\n                \"__v\": 3\n            },\n            \"scoreFinal\": 10,\n            \"id\": \"5d67e4d91b90f336421070a8\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X GET \\\n  https://driveranalytics.com.br/api/travels \\\n  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNjdlMjEwMWI5MGYzMzY0MjEwNmRhYSIsIm5hbWUiOiJEZXYiLCJjb21wYW55Ijp7InVwZGF0ZWRBdCI6IjIwMTktMDgtMjlUMTQ6MzE6NDguMjQ0WiIsImNyZWF0ZWRBdCI6IjIwMTktMDgtMjlUMTQ6MzE6NDguMjQ0WiIsIm5hbWUiOiJWYWIgTW9iaWxlIiwiZGVzYyI6IlZhYiBNb2JpbGUiLCJpbml0aWFscyI6IlZBQk0iLCJjb25maWciOiI1ZDY3ZTFkNDFiOTBmMzM2NDIxMDZkNzQiLCJfX3YiOjAsImtleXdvcmRzIjpbInZhYiBtb2JpbGUiXSwiYWN0aXZlIjp0cnVlLCJpZCI6IjVkNjdlMWQ0MWI5MGYzMzY0MjEwNmQ3NSJ9LCJyb2xlIjoibWFuYWdlciIsInRoZW1lIjoiZGlhIiwiaWF0IjoxNTY3MDg5MjkzfQ.PUGy6lPKFz1Kt9Z_pcOOahtCUMjvwSYTIrZdYgGa3xE' \\\n  -H 'cache-control: no-cache' \\\n  -H 'content-type: application/json'",
        "type": "curl"
      }
    ],
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
            "type": "String",
            "optional": false,
            "field": "inicio",
            "description": "<p>Horário de início da viagem.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fim",
            "description": "<p>Horário de fim da viagem.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "motorista",
            "description": "<p>Id do motorista.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>Descrição da Viagem.</p>"
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
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": " {\n    \"id\": \"5d67e4d91b90f336421070a8\",\n    \"user\": {\n        \"id\": \"5d67e2101b90f33642106daa\",\n        \"email\": \"vabmobiledev@motoratech.com\",\n        \"name\": \"Dev\",\n        \"company\": {\n            \"id\": \"5d67e1d41b90f33642106d75\"\n        },\n        \"role\": \"manager\",\n        \"receiveEmail\": true\n    },\n    \"inicio\": \"2019-08-27T21:07:54.789Z\",\n    \"fim\": \"2019-08-27T21:07:54.789Z\",\n    \"duration_in_seconds\": 0,\n    \"total_idle_time\": 0,\n    \"total_steady_speed_time\": 0,\n    \"idle_time_penalty\": 0,\n    \"steady_speed_time_penalty\": 0,\n    \"score\": \"10.00\",\n    \"scoreEconomy\": \"10.00\",\n    \"human_validated\": false,\n    \"travelled_distance\": 0,\n    \"motorista\": \"5d67e7311b90f336421072a1\",\n    \"veiculo\": \"5d67e4611b90f33642106fa9\",\n    \"events\": [],\n    \"snapshots\": [],\n    \"live_stream_request\": false,\n    \"status\": \"short\",\n    \"company\": \"5d67e1d41b90f33642106d75\",\n    \"active\": true,\n    \"favorite\": false,\n    \"createdAt\": \"2019-08-29T14:44:41.999Z\",\n    \"updatedAt\": \"2019-08-29T15:34:08.804Z\",\n    \"rota\": []\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X PUT \\\n  https://driveranalytics.com.br/api/travels/5d67e4d91b90f336421070a8 \\\n  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNjdlMjEwMWI5MGYzMzY0MjEwNmRhYSIsIm5hbWUiOiJEZXYiLCJjb21wYW55Ijp7InVwZGF0ZWRBdCI6IjIwMTktMDgtMjlUMTQ6MzE6NDguMjQ0WiIsImNyZWF0ZWRBdCI6IjIwMTktMDgtMjlUMTQ6MzE6NDguMjQ0WiIsIm5hbWUiOiJWYWIgTW9iaWxlIiwiZGVzYyI6IlZhYiBNb2JpbGUiLCJpbml0aWFscyI6IlZBQk0iLCJjb25maWciOiI1ZDY3ZTFkNDFiOTBmMzM2NDIxMDZkNzQiLCJfX3YiOjAsImtleXdvcmRzIjpbInZhYiBtb2JpbGUiXSwiYWN0aXZlIjp0cnVlLCJpZCI6IjVkNjdlMWQ0MWI5MGYzMzY0MjEwNmQ3NSJ9LCJyb2xlIjoibWFuYWdlciIsInRoZW1lIjoiZGlhIiwiaWF0IjoxNTY3MDg5MjkzfQ.PUGy6lPKFz1Kt9Z_pcOOahtCUMjvwSYTIrZdYgGa3xE' \\\n  -H 'cache-control: no-cache' \\\n  -H 'content-type: application/json' \\\n  -d '{\n  \"motorista\": \"5d67e7311b90f336421072a1\"\n}'",
        "type": "curl"
      }
    ],
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
            "field": "identificador",
            "description": "<p>Identificador do veículo.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "placa",
            "description": "<p>Placa do veículo.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fabricante",
            "description": "<p>Fabricante do veículo.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelo",
            "description": "<p>Modelo do veículo.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X POST \\\n  https://driveranalytics.com.br/api/vehicles/ \\\n  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNjdlMjEwMWI5MGYzMzY0MjEwNmRhYSIsIm5hbWUiOiJEZXYiLCJjb21wYW55Ijp7InVwZGF0ZWRBdCI6IjIwMTktMDgtMjlUMTQ6MzE6NDguMjQ0WiIsImNyZWF0ZWRBdCI6IjIwMTktMDgtMjlUMTQ6MzE6NDguMjQ0WiIsIm5hbWUiOiJWYWIgTW9iaWxlIiwiZGVzYyI6IlZhYiBNb2JpbGUiLCJpbml0aWFscyI6IlZBQk0iLCJjb25maWciOiI1ZDY3ZTFkNDFiOTBmMzM2NDIxMDZkNzQiLCJfX3YiOjAsImtleXdvcmRzIjpbInZhYiBtb2JpbGUiXSwiYWN0aXZlIjp0cnVlLCJpZCI6IjVkNjdlMWQ0MWI5MGYzMzY0MjEwNmQ3NSJ9LCJyb2xlIjoibWFuYWdlciIsInRoZW1lIjoiZGlhIiwiaWF0IjoxNTY3MDg5MjkzfQ.PUGy6lPKFz1Kt9Z_pcOOahtCUMjvwSYTIrZdYgGa3xE' \\\n  -H 'cache-control: no-cache' \\\n  -H 'content-type: application/json' \\\n  -d '{\n  \"identificador\": \"0001\",\n  \"placa\": \"VAB0000\"\n}'",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": " {\n    \"id\": \"5d683a4606c0cf4b635dd397\",\n    \"active\": true,\n    \"user\": {\n        \"id\": \"5d67e2101b90f33642106daa\",\n        \"email\": \"vabmobiledev@motoratech.com\",\n        \"name\": \"Dev\",\n        \"company\": {\n            \"id\": \"5d67e1d41b90f33642106d75\"\n        },\n        \"role\": \"manager\",\n        \"receiveEmail\": true\n    },\n    \"placa\": \"VAB0000\",\n    \"identificador\": \"0001\",\n    \"camera\": \"5d683a4606c0cf4b635dd396\",\n    \"snapshots\": [],\n    \"createdAt\": \"2019-08-29T20:49:10.432Z\",\n    \"updatedAt\": \"2019-08-29T20:49:10.432Z\",\n    \"company\": \"5d67e1d41b90f33642106d75\"\n}",
          "type": "json"
        }
      ],
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
    "groupTitle": "Vehicle",
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
  }
] });
