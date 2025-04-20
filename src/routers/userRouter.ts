import express from 'express';
import {
    registerUser
} from './../controller/userController.js';

const router = express.Router();


/* --- --- --- -ROUTERS LIST- --- --- --- */
    // Register-user
    router.post('/register-user', registerUser);


/* --- --- --- --- --- --- --- --- --- -- */

export {router as userRouter}