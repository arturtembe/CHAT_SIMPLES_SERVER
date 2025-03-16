import { Request,Response } from "express";
import z from 'zod';

export default class RegisterUserController{
    async handle(req:Request, res:Response){
        try {

            const dataSchemma = z.object({
                name: z.string().optional(), 
                email: z.string().optional()
            });

            const { 
                name = "", email=""
            } = dataSchemma.parse(req.body);

            if(!name){
                res.status(401).send({ message: `O campo name invalid!` });
            }
            if(!email){
                res.status(401).send({ message: `O campo email invalid!` });
            }
            else{
                res.status(200).send([]);
            }

        } catch (error) {
            res.status(501).send({ message: `Houve um erro interno`, error })
        }
    }
}