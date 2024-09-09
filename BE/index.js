import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import route from "./Routes/userRoutes.js"
const app=express();

app.use(bodyParser.json())
dotenv.config();
const PORT=process.env.PORT;

const MONGO_URL=process.env.MONGO_URL;

mongoose.connect(MONGO_URL).then(()=>{
    console.log("database connected ");
    app.listen(PORT,()=>{console.log(`Server is running on port ${PORT}`);})
}).catch((err)=>{console.log(err);})


app.use("/api/user",route)