import express from 'express';
import mongoose from 'mongoose';
import connectDB from './config/mongoose.js';
import indexRouter from './routes/index.js'; 
import bodyParser from 'body-parser';
import cors from 'cors';
const app=express();

app.use(bodyParser.json());
app.use(cors());
connectDB();
app.use('/',indexRouter);
app.listen(4000,()=>{
    console.log("server is running on port 4000");
});
