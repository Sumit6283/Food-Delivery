import express from "express"
import { userLogin, userRegister } from "../controllers/userController";


const userRouter = express.Router();

userRouter.post("/login",userLogin);

userRouter.post('signup',userRegister);

export default userRouter;