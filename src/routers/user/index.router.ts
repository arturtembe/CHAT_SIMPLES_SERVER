import express from 'express';
import RegisterUserController from '../../controllers/user/register';
import ViewUserController from '../../controllers/user/view.controller';

// Variables
const userRouter=express.Router();
const viewController = new ViewUserController();
const registerController = new RegisterUserController();

// Add
userRouter.get('/', viewController.handle);

userRouter.get('/create', registerController.handle);

export default userRouter;