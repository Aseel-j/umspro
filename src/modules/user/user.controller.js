import UserModel from "../../../DB/model/user.js";
import jwt from 'jsonwebtoken';
import cloudinary from "../../utils/cloudinary.js";
import { AppError } from "../../utils/AppError.js";
export const getAll=async(req,res)=>{
    
    const users = await UserModel.findAll({
        attributes:['username','email']
});
    return res.status(200).json({message:"success",users})

}

export const Delete = async(req,res,next)=>{
    const {id}=req.params;
    const {token}= req.headers;
    const decoded= jwt.verify(token,'aseel') ;
    if(decoded.role !='admin'){
        return next(new AppError (" not authorized",400));  
    }
    const user = await UserModel.findByPk(id);
    if (user==null){
        return next (new AppError ("user not found",404)); 
    }
    await UserModel.destroy({
    where :{id}
    });
    return res.status(200).json({message:"success"}); 
}

export const FileUpload=async(req,res,next)=>{
    const {id}=req.params;
    const user = await UserModel.findByPk(id);
    if (user == null){
        return next (new AppError ("user not found",404)); 
    }
    const { secure_url } = await cloudinary.uploader.upload(req.file.path);
    user.profilepic = secure_url;
    await user.save();
    return res.status(200).json({message:"success"});
}