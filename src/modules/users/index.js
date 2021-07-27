import express from'express';
import {getUsers} from './userControllers'

import { postUsers } from './userControllers';

const userRouter = express.Router();

userRouter.get("/users", getUsers)

userRouter.post("/users", postUsers)
export default userRouter;