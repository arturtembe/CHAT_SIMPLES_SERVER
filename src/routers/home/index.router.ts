import express from 'express';
import ViewHomeController from '../../controllers/home/view.controller';

// Variables
const homeRouter=express.Router();
const homeController = new ViewHomeController();

homeRouter.get('/', homeController.handle);

export default homeRouter;