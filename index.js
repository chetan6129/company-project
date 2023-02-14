const express=require("express")
const app=express()


const router = express.Router();
const route=require("./route.js")
 app.use("/",route)

 app.listen(process.env.PORT || 3000, function(){
    console.log("running at "+(process.env.PORT|| "chalu ho gya " + 3000))
 })