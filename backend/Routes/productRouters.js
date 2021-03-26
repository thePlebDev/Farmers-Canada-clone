const express = require("express")

const Product = require("../models/products")
const Cart = require("../models/cart")
const Company = require("../models/company")

const BadRequestError = require("../utils/errors.js")

const productRouter = express.Router()

//we need to create the product and find the company first
productRouter.post("/create",async (req,res,next)=>{

  const {price,name,sellerId} = req.body;
  const newProduct = await new Product({name:name,price:price,seller:sellerId})
                               .save()
                               .catch(error=>next(new BadRequestError(error,400)))
  if(!newProduct){
    next(new BadRequestError({message:"error creating product"},400))
  }else{
    //
    const newCompany = await Company.findByIdAndUpdate(sellerId,
                                    {$push:{products:newProduct}},
                                    {new:true,useFindAndModify:false})
                                    .catch(error=>next(new BadRequestError(error,400)))
    if(!newCompany){
      next(new BadRequestError({message:"company not found"},400))
    }else{
        res.json(newCompany)
    }
  }


})


// MAYBE WE SHOULD TRY SORTING THEM
//GIVE BACK ALL THE PRODUCTS.
productRouter.get("/all",async (req,res,next)=>{
  const allProducts = await Product.find()
                                   .exec()
                                   .catch(error=>next(new BadRequestError(error,500)))
if(!allProducts){
  next(new BadRequestError({message:"No products found"},400))
}else{
  res.json(allProducts)
}

})



module.exports = productRouter
