const swaggerDocs = {
    swagger: "2.0",
    info: {
      version: "1.0.0",
      title: "Example REST API Tierheim",
      description: "API for tierheim",
      license: {
        name: "MIT",
        url: "https://opensource.org/licenses/MIT",
      },
    },
    host: "localhost:4000",
    basePath: "/tierheim",
    tags: [
      {
        name: "Tierheim",
        description: "animals in the database",
      },
    ],
    consumes: ["application/json"],
    produces: ["application/json"],
    paths: {
      "/dogs": {
        get: {
          tags: ["Dogs"],
          summary: "Get all dogs in the system",
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Dog",
              },
            },
          },
        },
        post: {
          tags: ["Dogs"],
          summary: "Add a new dog",
          parameters: [
            {
              name: "dog",
              in: "body",
              description: "Dog to be added",
              schema: {
                $ref: "#/definitions/Dog",
              },
            },
          ],
          responses: {
            201: {
              description: "Created",
              schema: {
                $ref: "#/definitions/Dog",
              },
            },
          },
        },
      },
      "/dog{id}": {
        get: {
          tags: ["Dogs"],
          summary: "Get a specific dog by id",
          parameters: [
            {
              name: "id",
              in: "body",
              description: "Id of the dog searched for",
              schema: {
                $ref: "#/definitions/Dog",
              },
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Dog",
              },
            },
          },
        },
      },
      "/searchdog": {
        get: {
          tags: ["Dogs"],
          summary: "Get a specific dog by dogBreed",
          parameters: [
            {
              name: "dogBreed",
              in: "path",
              description: "dogBreed of the dog searched for",
              schema: {
                $ref: "#/definitions/Dog",
              },
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Dog",
              },
            },
          },
        },
      },
      "/cats": {
        get: {
          tags: ["Cats"],
          summary: "Get all cats in the system",
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Cat",
              },
            },
          },
        },
        post: {
          tags: ["Cats"],
          summary: "Add a new cat",
          parameters: [
            {
              name: "cat",
              in: "body",
              description: "Cat to be added",
              schema: {
                $ref: "#/definitions/Cat",
              },
            },
          ],
          responses: {
            201: {
              description: "Created",
              schema: {
                $ref: "#/definitions/Cat",
              },
            },
          },
        },
      },
      "/cat{id}": {
        get: {
          tags: ["Cats"],
          summary: "Get a specific cat by id",
          parameters: [
            {
              name: "id",
              in: "body",
              description: "Id of the cat searched for",
              schema: {
                $ref: "#/definitions/Cat",
              },
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Cat",
              },
            },
          },
        },
      },
      "/searchcat": {
        get: {
          tags: ["Cats"],
          summary: "Get a specific cat by catBreed",
          parameters: [
            {
              name: "catBreed",
              in: "path",
              description: "catBreed of the cat searched for",
              schema: {
                $ref: "#/definitions/Cat",
              },
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Cat",
              },
            },
          },
        },
      },
      "/hamsters": {
        get: {
          tags: ["Hamsters"],
          summary: "Get all hamsters in the system",
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Hamster",
              },
            },
          },
        },
        post: {
          tags: ["Hamsters"],
          summary: "Add a new hamster",
          parameters: [
            {
              name: "hamster",
              in: "body",
              description: "Hamster to be added",
              schema: {
                $ref: "#/definitions/Hamster",
              },
            },
          ],
          responses: {
            201: {
              description: "Created",
              schema: {
                $ref: "#/definitions/Hamster",
              },
            },
          },
        },
      },
      "/hamster{id}": {
        get: {
          tags: ["Hamsters"],
          summary: "Get a specific hamster by id",
          parameters: [
            {
              name: "id",
              in: "body",
              description: "Id of the hamster searched for",
              schema: {
                $ref: "#/definitions/Hamster",
              },
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Hamster",
              },
            },
          },
        },
      },
      "/searchhamster": {
        get: {
          tags: ["Hamsters"],
          summary: "Get a specific hamster by hamsBreed",
          parameters: [
            {
              name: "hamsBreed",
              in: "path",
              description: "hamsBreed of the hamster searched for",
              schema: {
                $ref: "#/definitions/Hamster",
              },
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Hamster",
              },
            },
          },
        },
      },
    },
   
    definitions: {
      Dog: {
        required: ["dogBreed", "colour"],
        properties: {
          dogBreed: {
            type: "string",
          },
          colour: {
            type: "string",
          },
          age: {
            type: "integer",
          },
        },
      },
      Cat: {
        required: ["catBreed", "colour"],
        properties: {
          catBreed: {
            type: "string",
          },
          colour: {
            type: "string",
          },
          age: {
            type: "integer",
          },
        },
      },
      Hamster: {
        required: ["hamsBreed", "colour"],
        properties: {
          hamsBreed: {
            type: "string",
          },
          colour: {
            type: "string",
          },
          age: {
            type: "integer",
          },
        },
      },
    },
  };
  
  export default swaggerDocs;