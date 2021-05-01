const express = require("express");
const bodyParser = require("body-parser")

require("dotenv").config();

const mongoose = require('mongoose')

const routers = require("./Controllers")



const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());


//setting up the default mongoose connection
mongoose.connect(process.env.CONNECTIONSTRING,{useNewUrlParser: true, useUnifiedTopology: true},()=>{
  console.log("CONNECTED TO THE DATABSE")
});


app.use('/users',routers.userRouter)

//THE 404 PAGE NOT FOUND MIDDLEWARE
app.use((req,res)=>{
  res.status(404).send("NOT FOUND")
})

app.use((error,req,res,next)=>{
  if(!error.statusCode) error.statusCode = 500;
  return res.status(error.statusCode).json({error:error})
})



app.listen(process.env.PORT,()=>{
  console.log("APP STARTED ON PORT 3000")
})
