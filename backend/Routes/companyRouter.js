const express = require("express")

const Company = require("../models/company")
const BadRequestError = require('../utils/errors')

const companyRouter = express.Router();



companyRouter.post("/create", async (req,res,next)=>{
  const {name} = req.body

  const newCompany = await new Company({name})
                               .save()
                               .catch(error=>next (new BadRequestError(error)))

  if(!newCompany){
    next(new BadRequestError({message:"error creating company, please try again"},400))
  }else{
    res.json(newCompany)
  }

})


module.exports = companyRouter
