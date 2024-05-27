import mongoose from 'mongoose';

export const connectDB= async()=>{
    await mongoose.connect("mongodb+srv://sumitkr6283:10101010@cluster0.tndukul.mongodb.net/food-delivery").then(()=>console.log("db  connected"));
}
