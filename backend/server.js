import express from 'express';
const app = express();
const port = 4000;
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routers/foodRouters.js';

app.use(express.json());

app.use(cors());

connectDB();

//mongodb+srv://sumitkr6283:10101010@cluster0.tndukul.mongodb.net/?


app.get("/",(req,res)=>{
    res.send("connected");
})

app.use("/api/food",foodRouter);

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})