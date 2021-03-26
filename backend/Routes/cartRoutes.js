const express = require("express")
const BadRequestError = require("../utils/errors.js")
const Cart = require("../models/cart")


const cartRouter = express.Router();

//CREATING THE CART FOR A USER
cartRouter.get("/create", async (req,res)=>{
  const cart = await new Cart()
  cart.save().catch((error)=>new BadRequestError(error))
  res.json(cart)
})


//POPULATING THE CART
//AGGREGATION PIPELINE
//db.cart.aggregate([ {$match:{name:"Bobs cart"}},{ $project:{total:{$sum:"$products.price"},_id:false}}]) 
cartRouter.post('/checkout',async(req,res,next)=>{
  const {cartId} = req.body
  const cartData = await Cart.findById(cartId)
                             .populate("products")
                             .catch(error=>next(new BadRequestError(error,400)));

  if(!cartData){
    next(new BadRequestError({message:"no cat was found"},400))
  }else{
    res.json(cartData)
  }

})

//NEEDS TO BE UPDATED FOR THE THE CART PRICES AND ITEM REMOVAL
// THIS IS THE ROUTER FOR ADDING AN ITEM TO YOUR CART.
cartRouter.put("/add",async (req,res,next)=>{
  const {cartId,productId} = req.body

  const data = await Cart.findByIdAndUpdate(
    cartId,{$push:{products:productId}},
    {new:true,useFindAndModify:false}
  ).catch(error=> next(new BadRequestError({message:error})))
  //THE ONLY DOWN SIDE OF HANDLING ERRORS LIKE THIS IS THAT ALL CODE AFTER THE CATCH STILL GETS CALLED


  if(!data){
    next(new BadRequestError({message:"no cart found"},400))
  }else{
    res.json(data)
  }
})



module.exports = cartRouter
