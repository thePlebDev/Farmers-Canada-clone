const express = require("express");
const bodyParser = require("body-parser")
const MongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose')

const userRouter = require("./Routes/userRouter")

//MAKE SURE THAT THIS GETS CHANGED BEFORE ANYTHING GETS COMMITED
const conectionString =``
//MAKE SURE THAT THIS GET CHANGED BEFORE ANYTHING GETS COMMITTED


const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());


//setting up the default mongoose connection
mongoose.connect(conectionString,{useNewUrlParser: true, useUnifiedTopology: true},()=>{
  console.log("CONNECTED TO THE DATABSE")
});

//get the default connection
const db = mongoose.connection;

//bind connection to error ever(to get notification of connection errors)
db.on("error",console.error.bind(console,"MONGODB connection error:"))

app.use("/user",userRouter)


//THE 404 PAGE NOT FOUND MIDDLEWARE
app.use((req,res)=>{
  res.status(404).send("NOT FOUND")
})

app.use((error,req,res,next)=>{
  if(!error.statusCode) error.statusCode = 500;
  return res.status(error.statusCode).json({error:error})
})



app.listen(3000,()=>{
  console.log("APP STARTED ON PORT 3000")
})
