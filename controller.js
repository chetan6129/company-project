const express = require("express"); 
const cron = require("node-cron");
const moment=require('moment')
const router = express. Router();

const api=async function(req,res){
try {
    let  task=req.params.task
    function rev(task){
        task=task.split("").reverse().join("")
        return task
    }
   // console.log (task)
    let result=rev(task)

    if(task=="textone"){
    cron.schedule('*/5 * * * *',()=>{
        return res.send({status:true,message:result,date:moment().format('YYYY-MM-DD hh:mm:ss')})
    },{
        scheduled:true,
        timezone: "Asia/Kolkata"
    })
}else{
    cron.schedule('0 15 14 7 *',()=>{
        return res.send({status:true,message:result,date:moment().format('YYYY-MM-DD hh:mm:ss')})
    },{
        scheduled:true,
        timezone: "Asia/Kolkata"
    })
}

}
catch (error)

{ res.status(500).send("Server error")}}

module.exports.api = api;

