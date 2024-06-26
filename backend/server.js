import express from 'express';
const app = express();
const port = 4000;
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routers/foodRouters.js';
import userRouter from './routers/userRouter.js';

app.use(express.json());

app.use(cors());

connectDB();

//mongodb+srv://sumitkr6283:10101010@cluster0.tndukul.mongodb.net/?


app.get("/",(req,res)=>{
    res.send("connected");
})

app.use("/api/food",foodRouter);

app.use("/api/user",userRouter);

app.use("/images",express.static("uploads"))

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})