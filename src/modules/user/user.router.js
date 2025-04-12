import { Router } from "express";
import auth from '../../middleware/auth.js';
import fileUpload from "../../utils/multer.js";
import { Delete, FileUpload, getAll } from "./user.controller.js";
import { asyncHandler } from "../../utils/catchError.js";
const router =Router();

router.get('/',asyncHandler(getAll));

 router.delete('/:id',asyncHandler(auth()),asyncHandler(Delete));
    router.put('/:id',fileUpload().single('image'),asyncHandler(FileUpload));
export default router; 