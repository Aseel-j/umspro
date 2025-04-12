import UserModel from "../../../DB/model/user.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {sendEmail} from '../../utils/SendEmail.js';
import { AppError } from "../../utils/AppError.js";
export const register= async(req, res)=>{
    
        const {username,email,password}=req.body;
        const hashedPassword =bcrypt.hashSync(password,8);
    await UserModel.create({username,email,password:hashedPassword});
    const html =`<div><h2>new user</h2><p>welcome ${username}</p> </div>`
    await sendEmail(email,"welcome",html);
    return res.status(201).json({message:"success"});
}

 export const login = async(req, res,next)=>{ 
    
    const {email,password}=req.body;
    const user = await UserModel.findOne({ 
    where:{email:email} 
    }); 
    if(user == null){ 
        return next (new AppError ( "invalid email",404)); 
    } 
    const check = await bcrypt.compareSync (password, user.password); 
    if(check == false) { 
        return next (new AppError ("invalid password",400));  
    } 
    const token=jwt.sign({id:user._id,name:user.username,role:user.role},'aseel');
    return res.status(200).json({message:"success",token}); 
    }  
