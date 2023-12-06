import { Router } from "express";

import { login } from "../Controllers/authentication.controller";
const RouterInstance = Router();

//authenticate user
RouterInstance.post("/login", login);


//authorize user
RouterInstance.get("/authorize", (req, res, next) => {
   try {
              
     if (req.session.isAuth) {
             //@ts-ignore
        res.json({ massage: "you are already logged in", isAuth: true ,name:req.session["name"]});
        return;
    }

    res.status(401).json({status: 401, massage: "you are not logged in", isAuth: false });
   } catch (error) {
    res.json(error)
   }
});

export default RouterInstance;
