const mongoose =require("mongoose");
const bcrypt = require('bcryptjs');

const SALT_FACTOR = 10;

const userSchema = new mongoose.Schema({
  username:{type:String,require:true,unique:true},
  password:{type:String,require:true},
  createdAt:{type:Date,default:Date.now},
})


userSchema.methods.name = function(){
  return this.displayName || this.username;
}

const noop = function(){}

userSchema.pre("save",(done)=>{
  let user = this;
  if(!user.isModified("password")){
    return done();// skips the logic if the password isn't modified
  }
  bcrypt.genSalt(SALT_FACTOR,function(err,salt){
    if(err){return done(err)}
    bcrypt.hash(user.password,salt,noop,function(err,hashedPassword){
      if(err){return done(err);}
      user.password = hashedPassword;
      done();
    });
  });
});

userSchema.methods.checkPassword = function(guess,done){
  bcrypt.compare(guess,this.password,function(err,isMatch){
    done(err,isMatch)
  })
}


//const schema = new mongoose.Schema({ name: 'string', size: 'string' });

const User = mongoose.model("User",userSchema);
module.exports = User
