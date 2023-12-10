"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.prisma = void 0;
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.prisma = new client_1.PrismaClient();
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const passwordInputSanitized = password.replace(/[^a-zA-Z0-9@#$%^&+=]/g, '');
        const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if (!emailPattern.test(email)) {
            res.status(400).json({ error: "Email is required" });
        }
        const user = await exports.prisma.user.findUnique({
            where: { email },
        });
        if (!user) {
            res.status(401).json({ message: "User Does not exist!", isAuth: false });
            return;
        }
        if (!(await bcrypt_1.default.compare(passwordInputSanitized, user.Password))) {
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
    }
    catch (error) {
        res.status(400).json({ message: "Failed", isAuth: false });
    }
};
exports.login = login;
//# sourceMappingURL=authentication.controller.js.map