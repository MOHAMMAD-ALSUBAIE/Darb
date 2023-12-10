"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authentication_controller_1 = require("../Controllers/authentication.controller");
const RouterInstance = (0, express_1.Router)();
//authenticate user
RouterInstance.post("/login", authentication_controller_1.login);
//authorize user
RouterInstance.get("/authorize", (req, res, next) => {
    try {
        if (req.session.isAuth) {
            //@ts-ignore
            res.json({ massage: "you are already logged in", isAuth: true, name: req.session["name"] });
            return;
        }
        res.status(401).json({ status: 401, massage: "you are not logged in", isAuth: false });
    }
    catch (error) {
        res.json(error);
    }
});
exports.default = RouterInstance;
//# sourceMappingURL=authentication.route.js.map