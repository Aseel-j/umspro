import { Router } from "express";
import auth from "../../middleware/auth.js";
import { creatBlog, getBlog, getDetails } from "./blog.controller.js";
import { asyncHandler } from "../../utils/catchError.js";
import { blogDetailsSchema, creatBlogSchema } from "./blog.validation.js";
import validation from '../../middleware/validation.js'
const router =Router();
router.get('/',asyncHandler(getBlog));
router.get('/:id',validation(blogDetailsSchema),asyncHandler(getDetails));
router.post('/',validation(creatBlogSchema),asyncHandler(creatBlog));
export default router;   