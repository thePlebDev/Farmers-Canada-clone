const express = require("express")


const userRouter = express.Router();


userRouter.get("/",(req,res)=>{
    // so this is going to make a request to the services which is going to make a request to the database
    res.json({"Message":"it do be like that"})
})

module.exports = userRouter