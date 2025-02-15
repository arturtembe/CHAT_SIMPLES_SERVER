import "dotenv/config";
import express from "express";
import path from "path";
import cors from "cors";
import bodyParser from "body-parser";

import { HOST_URL, PORT } from "./utils/env.util";

// Routers 
import router from './routers/index.router';

//Variables
const app = express();  

// Static
app.use("/docs", express.static(path.join(process.cwd(),"public/docs")));

//Body Parser
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Hooks
app.use(router); 

// Run Server
app.listen(PORT,()=>{
    console.log(`Server is live @${HOST_URL}`);
})