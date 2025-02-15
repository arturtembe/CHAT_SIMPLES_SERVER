import { Request,Response } from "express";
import path from "path";

export default class ViewUserController{
    async handle(req:Request, res:Response){
        try {

            const url = `${path.join(process.cwd(),"public/docs")}/swagger.json`;

            res.sendFile(url);

        } catch (error) {
            res.status(501).send({ message: `Houve um erro interno`, error })
        }
    }
}