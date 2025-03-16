import express from 'express';
// Swagger
// import swaggerUi from "swagger-ui-express";
// import swaggerDocument from "../../public/docs/swagger.json";
import userRouter from './user/index.router';
import ViewUserController from '../controllers/user/view.controller';
import HomeController from '../controllers/home/home.controller';

const router=express.Router();

const homeController = new HomeController();
const viewController = new ViewUserController();

// Home
// router.use("/",swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.get("/", homeController.handle);

// User
router.use("/user", userRouter);


export default router;