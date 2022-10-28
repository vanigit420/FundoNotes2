import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';

const router = express.Router();

//route to create a new user
router.post('', newUserValidator, userController.Userregistration);

//route to check login credentials
router.post('/login', userController.Userlogin);

export default router;


