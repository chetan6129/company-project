const express=require("express")
const Controller=require('./controller.js')
const router=express.Router()
router.get("/schedule/:task",Controller.api)



module.exports=router