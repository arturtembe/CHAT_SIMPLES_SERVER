import express from 'express';
// Swagger
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../../public/docs/swagger.json";

const router=express.Router();

// Home
router.use("/",swaggerUi.serve, swaggerUi.setup(swaggerDocument));


export default router;