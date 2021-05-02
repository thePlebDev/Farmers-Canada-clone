const express = require("express");
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser");
const session = require("express-session")

require("dotenv").config();

const mongoose = require('mongoose')

const userRouter = require("./Controllers/Users")



const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());


//setting up the default mongoose connection
mongoose.connect(process.env.CONNECTIONSTRING,{useNewUrlParser: true, useUnifiedTopology: true},()=>{
  console.log("CONNECTED TO THE DATABSE")
});
//setting up the sessions
app.use(cookieParser());
//CHANGE THE STORE FOR PRODUCTION
app.use(session({ 
  secret: process.env.SESSIONSECRET, //the secret used to sign the session ID cookie
  resave: true, // forces the session to be saved back to the session store,even if the session was never modified
  saveUninitialized: true // forces a session the is unitialized(new but not modified) to be saved to the store
 })); 


app.use('/users',userRouter)

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
