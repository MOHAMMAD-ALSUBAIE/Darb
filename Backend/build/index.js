"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const itinerary_route_1 = __importDefault(require("./Routers/itinerary.route"));
const authentication_route_1 = __importDefault(require("./Routers/authentication.route"));
const user_route_1 = __importDefault(require("./Routers/user.route"));
const cors_1 = __importDefault(require("cors"));
const express_session_1 = __importDefault(require("express-session"));
const prisma_session_store_1 = require("@quixo3/prisma-session-store");
const client_1 = require("@prisma/client");
dotenv_1.default.config({ path: "./.env" });
const port = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: ["https://darb-ai-la9o.vercel.app"],
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    credentials: true,
}));
//@ts-ignore
//@ts-ignore
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, express_session_1.default)({
    cookie: {
        maxAge: 60 * 60 * 1000, // ms
    },
    secret: process.env.secretKey,
    resave: false,
    saveUninitialized: false,
    store: new prisma_session_store_1.PrismaSessionStore(new client_1.PrismaClient(), {
        checkPeriod: 2 * 60 * 1000, //ms
        dbRecordIdIsSessionId: true,
        dbRecordIdFunction: undefined,
    }),
}));
app.get("/", (req, res) => {
    res.status(200).json("server is running");
});
app.use("/API", itinerary_route_1.default);
app.use("/user/", authentication_route_1.default, user_route_1.default);
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
//# sourceMappingURL=index.js.map