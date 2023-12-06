import express from "express";
import dotenv from "dotenv";
import Route from "./Routers/itinerary.route";
import RouterInstance from './Routers/authentication.route'
import userRoute from './Routers/user.route'
import bodyParser from "body-parser";
import cors from 'cors'
import expressSession from 'express-session';
import { PrismaSessionStore } from '@quixo3/prisma-session-store';
import  { PrismaClient } from '@prisma/client';
import cookieParser from "cookie-parser"
const port=3000
const app= express()
declare module "express-session" {
  interface SessionData {
    isAuth: any;
    userID: any;
  }
}


app.use(express.json());

app.use(cors({
  origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
  methods: ['GET','HEAD','PUT','PATCH','POST','DELETE'],
  credentials: true,
//  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}))


//@ts-ignore


//@ts-ignore

//app.use(cookieParser())

app.use(express.urlencoded({ extended: true }));
app.use(
    expressSession({
        cookie: {
            maxAge: 60 * 60 * 1000, // ms
        },
        secret: "a santa at nasa",
        resave: false,
        saveUninitialized: false,
        store: new PrismaSessionStore(new PrismaClient(), {
            checkPeriod: 2 * 60 * 1000, //ms
            dbRecordIdIsSessionId: true,
            dbRecordIdFunction: undefined,
        }),
    })
);



app.use("/API",Route)
app.use("/user/",RouterInstance,userRoute)



app.listen(port,()=>{
  console.log(`server is running on port ${port}`)  
})