import express from "express";
import {  userSignUp } from "../controller/user-controller.js";



const router = express.Router();


router.post('/signup', userSignUp);
//router.post('/login', userLogIn);

export default router;