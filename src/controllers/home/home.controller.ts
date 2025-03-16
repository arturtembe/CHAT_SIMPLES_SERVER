import { Request,Response } from "express";

export default class HomeController{
    async handle(req:Request, res:Response){
        try {

            res.status(200).send({ message: `Ola Mundo!` });

        } catch (error) {
            res.status(501).send({ message: `Houve um erro interno`, error })
        }
    }
}