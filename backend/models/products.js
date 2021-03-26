const mongoose = require("mongoose");
const { Schema } = mongoose;

//FOR NOW JUST A NORMAL PRODUCT WITH NAME,PRICE. WE WILL ADD THE Company REFERENCE LATER

const productSchema = new Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    seller:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Company"
    }]
  })

const Product = mongoose.model("Product",productSchema)

module.exports = Product
