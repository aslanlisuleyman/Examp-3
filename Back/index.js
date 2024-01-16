const express =require("express")
require("dotenv").config()
const mongoose=require("mongoose")
const cors=require("cors")
const CardRouter=require("./routes/Card.routes")
const app=express()
const PORT=process.env.PORT || 3007
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://Suleyman:suleyman123@suleyman.vyltqxp.mongodb.net/start").then(res=>{
    console.log("app running")
})
app.use("/cards",CardRouter)

app.listen(PORT,()=>{
    console.log("app run MONGO DB")
})