const mongoose = require("mongoose");
const { Schema } = mongoose;

//SINCE WE ARE NOT GOING TO UPDATE THE PRODUCTS THAT OFTEN WE ARE JUST GOIN TO EMBED THEM.
const companySchema = new Schema({
    name:{type:String,required:true},
    products:[]
  })

const Company = mongoose.model("Company",companySchema)

module.exports = Company
