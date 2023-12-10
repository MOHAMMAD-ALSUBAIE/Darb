"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../Controllers/user.controller");
const userRouter = (0, express_1.Router)();
userRouter.post("/register", user_controller_1.createUser);
userRouter.post("/addFavorite", user_controller_1.addFavorite);
userRouter.get('/FavoriteList', user_controller_1.getFavoriteList);
userRouter.delete("/logout", user_controller_1.logout);
exports.default = userRouter;
//# sourceMappingURL=user.route.js.map