const mongoose = require("mongoose");
const { Schema } = mongoose


//WE WANT A ONE TO MANY RELATIONGSHIP FOR OUR CART TO PRODUCTS.
//ALSO NEED A ONE TO ONE RELATIONGSHIP WITH THE USER

const cartSchema = new Schema({
  products:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"Product"
    }
  ],
  totalPrice:{type:Number,default:0}
})

const Cart = mongoose.model("Cart",cartSchema)
//the products should only hold ObjectId in the products array. then ref lets us
//get all the products when we call the populate() method


module.exports = Cart
