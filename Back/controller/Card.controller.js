const Card=require("../models/Card.model")

const CardController={
    getAll:async(req,res)=>{
        try{
            const cardss= await Card.find()
            res.status(200).send(cardss)
        }
        catch(error){
            res.status(404).send("error")
        }
    },
    getById:async(req,res)=>{
        try{
            const{id}=req.params
            const target=await Card.findById(id)
            res.status(200).send(target)
        }
        catch(error){
            res.status(404).send("error")
        }
    },
    delete:async(req,res)=>{
        try{
            const {id}=req.params
            await Card.findByIdAndDelete(id)
            const cards=await Card.find({})
            res.send(cards)
        }
        catch(error){
            res.status(404).send("error")
        }
    },
    add:async(req,res)=>{
        try{
            const {image,price,desc,name}=req.body
            const newCard=new Card({image,price,desc,name})
            await newCard.save()
            res.status(201).send("add success")
        }
        catch(error){
            res.status(404).send("error")
        }
    },
    edit:async(req,res)=>{
        try{
      const{id}=req.params
      const {image,price,desc,name}=req.body
      await Card.findByIdAndUpdate(id,{image,price,desc,name})
      res.status(200).send("updated")
        }
        catch(error){
            res.status(404).send("error")
        }
    }
}

module.exports={CardController}