import { Prisma, PrismaClient } from "@prisma/client";

import bcrypt from "bcrypt";

export const prisma = new PrismaClient();


export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const passwordInputSanitized=password.replace(/[^a-zA-Z0-9@#$%^&+=]/g, '')
        const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if(!emailPattern.test(email)){
         res.status(400).json({ error: "Email is required" });
        }
        const user = await prisma.user.findUnique({
            where: { email },
        });
        if (!user) {
            res.status(401).json({ message: "User Does not exist!", isAuth: false });
            return;
        }

        if (!(await bcrypt.compare(passwordInputSanitized, user.Password))) {
            res.status(401).json({
                message: "Password is not correct",
                isAuth: false,
            });
            return;
        }
        req.session.isAuth = true;
        req.session.userID = user.id;
        
        if (req.session.isAuth === undefined || req.session.userID === undefined) {
            return res.status(500).json({ message: 'Session variable assignment failed' });
          }
     

        res.status(200).json({
            message: "Session has been created",
            isAuth: true,
            role: user.role,
            userInformation: { name: user.name },
        });
    } catch (error) {
        res.status(400).json({ message: "Failed", isAuth: false });
    }finally{
        prisma.$disconnect()
      
      }
};

