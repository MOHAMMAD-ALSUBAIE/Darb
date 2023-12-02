import express from "express";
import dotenv from "dotenv";
import Route from "./Routers/itinerary.route";
import cors from 'cors'
const port=process.env.PORT||3000
const app= express()
const Router=express.Router()
const corsOptions = {
  origin: '*',
  methods: ['GET','HEAD','PUT','PATCH','POST','DELETE'],
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/',(req,res)=>{
  res.json({massage:"hello Mohammed"})
})
app.use("/API",Route)

app.listen(port,()=>{
  console.log(`server is running on port ${port}`)  
})