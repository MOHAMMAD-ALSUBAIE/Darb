import { Router } from "express";
import {createUser,getFavoriteList,logout,addFavorite} from "../Controllers/user.controller";
const userRouter = Router();
userRouter.post("/register", createUser);

 userRouter.post("/addFavorite", addFavorite);
userRouter.get('/FavoriteList', getFavoriteList)
// userRouter.delete('/FavoriteList/:bookID', deleteFromFavoriteList)
userRouter.delete("/logout",logout)
export default userRouter