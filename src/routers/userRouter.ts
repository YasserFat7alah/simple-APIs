import express from 'express';
import {
    registerUser,
    loginUser
} from './../controller/userController.js';

const router = express.Router();


/* --- --- --- -ROUTERS LIST- --- --- --- */
    // REGISTER USER
    router.post('/register-user', registerUser);

    // LOGIN USER
    router.post('/login', loginUser);


/* --- --- --- --- --- --- --- --- --- -- */

export {router as userRouter}