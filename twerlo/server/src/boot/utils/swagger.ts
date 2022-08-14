import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { Express } from "express";


// Setup swagger options for document apis 

const swaggerOptions: swaggerJSDoc.Options = {
  swaggerDefinition: {
    info: {
      title: "Twerlo Apis",
      description: "Apis for twerlo application",
      version: "1.0.0",
    }
  },
  apis: ["./src/app/apis/rest/v1/swagger/*.yml"],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

function swaggerDocs(app: Express, port: number) {
  app.use("/v1/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

export default swaggerDocs