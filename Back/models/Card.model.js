const mongoose=require("mongoose")

const Card=mongoose.model("Card",new mongoose.Schema({
    image:String,
    name:String,
    desc:String,
    price:Number
}))

module.exports=Card