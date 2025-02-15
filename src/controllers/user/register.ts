import { Request,Response } from "express";
import path from "path";

export default class RegisterUserController{
    async handle(req:Request, res:Response){
        try {

            res.sendFile(``);

        } catch (error) {
            res.status(501).send({ message: `Houve um erro interno`, error })
        }
    }
}