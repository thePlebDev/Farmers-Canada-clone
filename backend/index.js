const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require('mongoose')

const routers = require("./Controllers")


//MAKE SURE THAT THIS GETS CHANGED BEFORE ANYTHING GETS COMMITED
const conectionString =`mongodb+srv://camoSheets:vQFvBxS67LILByJX@cluster0.xgzqn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
//MAKE SURE THAT THIS GET CHANGED BEFORE ANYTHING GETS COMMITTED


const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());


//setting up the default mongoose connection
mongoose.connect(conectionString,{useNewUrlParser: true, useUnifiedTopology: true},()=>{
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



app.listen(3000,()=>{
  console.log("APP STARTED ON PORT 3000")
})
