import express from 'express';
import RegisterUserController from '../../controllers/user/register';

// Variables
const userRouter=express.Router();
const registerController = new RegisterUserController();

// Add
userRouter.get('/', registerController.handle);

export default userRouter;