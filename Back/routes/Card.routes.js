const express=require("express")
const router=express.Router()
const {CardController}=require("../controller/Card.controller")

router.get("/",CardController.getAll)
router.get("/:id",CardController.getById)
router.delete("/:id",CardController.delete)
router.post("/",CardController.add)
router.get("/:id",CardController.edit)

module.exports=router
