import { Request,Response } from "express";
import { prisma } from "../../prisma/client";

export default class ViewUserController{
    async handle(req:Request, res:Response){
        try {

            const view = await prisma.users.findMany({})

            res.status(200).send(view);

        } catch (error) {
            res.status(501).send({ message: `Houve um erro interno`, error })
        }
    }
}