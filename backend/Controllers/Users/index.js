const express = require("express")


const userRouter = express.Router();


userRouter.get("/",(req,res)=>{
    res.json({"Message":"it do be like that"})
})

module.exports = userRouter