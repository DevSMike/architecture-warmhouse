
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Smart Home Device Commands",
    "version": "1.0.0"
  },
  "channels": {
    "temperatureCommands": {
      "address": "devices.commands.temperature",
      "messages": {
        "temperatureCommand": {
          "payload": {
            "type": "object",
            "required": [
              "userId",
              "houseId",
              "deviceId",
              "value",
              "timestamp"
            ],
            "properties": {
              "userId": {
                "type": "integer",
                "format": "int64",
                "example": 1001,
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "houseId": {
                "type": "integer",
                "format": "int64",
                "example": 2001,
                "x-parser-schema-id": "<anonymous-schema-3>"
              },
              "deviceId": {
                "type": "integer",
                "format": "int64",
                "example": 3001,
                "x-parser-schema-id": "<anonymous-schema-4>"
              },
              "value": {
                "type": "number",
                "format": "float",
                "example": 23.5,
                "x-parser-schema-id": "<anonymous-schema-5>"
              },
              "timestamp": {
                "type": "string",
                "format": "date-time",
                "example": 1782765180000,
                "x-parser-schema-id": "<anonymous-schema-6>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-1>"
          },
          "x-parser-unique-object-id": "temperatureCommand",
          "x-parser-message-name": "TemperatureCommand"
        }
      },
      "x-parser-unique-object-id": "temperatureCommands"
    }
  },
  "operations": {
    "publishTemperatureCommand": {
      "action": "send",
      "channel": "$ref:$.channels.temperatureCommands",
      "x-parser-unique-object-id": "publishTemperatureCommand"
    }
  },
  "components": {
    "messages": {
      "TemperatureCommand": "$ref:$.channels.temperatureCommands.messages.temperatureCommand"
    }
  },
  "x-parser-spec-parsed": true,
  "x-parser-api-version": 3,
  "x-parser-spec-stringified": true
};
    const config = {"show":{"sidebar":true},"sidebar":{"showOperations":"byDefault"}};
    const appRoot = document.getElementById('root');
    AsyncApiStandalone.render(
        { schema, config, }, appRoot
    );
  