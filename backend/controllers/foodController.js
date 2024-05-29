import foodModal from "../models/foodModel.js";
import fs from 'fs';

//add food items

const addFood = async (req,res)=>{
    let image_filename = `${req.file.filename}`;
   const food = new foodModal({
    name:req.body.name,
    description:req.body.description,
    price:req.body.price,
    image:image_filename,
    category:req.body.category,
   })
   try{
        await food.save();
        res.json({
            success:true,
            message:"Food Added"
        })
   }
   catch(error){
        console.log(error);
        res.json({
            success:false,
            message:"Error",
        })
   }
}

const listFood = async(req,res)=>{
    try{
        const foods = await foodModal.find({});
        res.json({
            success:true,
            data:foods,
        })
    }
    catch(error){
        console.log(error);
        res.json({
            success:false,
            message:"fail",
        })
    }
}

const removeFood = async (req,res)=>{
    try{
        const food = await foodModal.findById(req.body.id);
        fs.unlink(`uploads/${food.images}`,()=>{})
        await foodModal.findByIdAndDelete(req.body.id);
        res.json({
            sucess:true,
            message:food,
        })
    }
    catch(error){
        console.log(error);
        res.json({
            success:false,
            message:"error",
        })
    }
}

export {addFood,listFood,removeFood};