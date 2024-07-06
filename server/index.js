import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const app = express();
dotenv.config()
mongoose.connect(process.env.MONGO)
.then(
    ()=>{
        console.log("Database is connected");
    }
)
.catch(
    err=>{
        console.log(err)
    }
)
app.listen(3000,()=>{
    console.log("server is running")
})
//console.log("server is listening")