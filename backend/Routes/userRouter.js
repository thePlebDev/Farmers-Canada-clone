const express = require("express")
const User = require('../models/users')
const BadRequestError = require("../utils/errors.js")


const userRouter = express.Router()

userRouter.get("/find",async (req,res,next)=>{
      const user = await  User.findOne({nafme:'id do be lke that sometimes'})
        .exec().catch(error=>{next(new BadRequestError(error))})

        if(!user){
          next(new BadRequestError({message:"no users found"},400))
        }else{
          res.json(user);
        }

})

userRouter.post("/create",async (req,res)=>{
  const {username,password} = req.body
  const newUser = new User({username:username,password:password})
  const created = await newUser.save();

  res.json(created)
})

userRouter.post('/create')

module.exports = userRouter
