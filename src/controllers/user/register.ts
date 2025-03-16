import { Request,Response } from "express";
import z from 'zod';
import ValidUtil from "../../utils/valid.util";

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

            const valid = new ValidUtil();

            if(!name){
                res.status(401).send({ message: `O campo name invalid!` });
            }
            else if(!email){
                res.status(401).send({ message: `O campo email invalid!` });
            }
            else if(!valid.validateEmail(email)){
                res.status(401).send({ message: `Email invalid!` });
            }
            else{
                res.status(200).send({
                    name,
                    email
                });
            }

        } catch (error) {
            res.status(501).send({ message: `Houve um erro interno`, error })
        }
    }
}