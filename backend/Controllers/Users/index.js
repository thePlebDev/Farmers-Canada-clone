const express = require("express")
const UserService = require("../../Services/Users")


const userRouter = express.Router();


userRouter.post("/register",async (req,res,next)=>{
    const {username,password} = req.body 
    // also need to check if we have the username and the password
    // from here to services. we will do the error handling here
        const service = new UserService();
    const response = await service
                        .signup(username,password).catch(error=>next(error));
    if(response){
        res.json({"Message":response})
    }else{
        next(response)
    }

    
})

module.exports = userRouter