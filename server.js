// console.log("This is my first mern js code");

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';


//console.log(x);

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

console.log("CLAB_11");
console.log("abc")
app.listen(5000,()=>{
    console.log("server is running on port 5000");
})