import express from'express';
import {getUsers, getUser, addNewUser, updateUser, deleteUser} from './userControllers'

import UserController from "./userControllers"
import UserValidator from  "../../middleware/userValidator"

const userController = new UserController()
const userValidator = new UserValidator()



const userRouter = express.Router()

userRouter.get("/users", userController.getAllusers);
userRouter.get("/users/:id" , userController.getUser)
userRouter.post("/users", userValidator.validateUserData, userController.addNewUser)
userRouter.put("/users/:id",  userController.updateUser, userValidator.validateUserExists)
userRouter.delete("/users/:id",  userController.deleteUser)





export default userRouter;