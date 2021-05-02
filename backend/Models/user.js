const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcryptjs");

const salt = bcrypt.genSaltSync(10);



//CREATE THE USER SCHEMA
const userSchema = new Schema({
    username:{type:String,unique:true,required: true},
    password:{type:String,required: true},
    createdAt:{type:Date,default:Date.now}
})

userSchema.methods.name = function(){
    return this.displayName || this.username;
}

//PRESAVE METHODS TO HASH THE PASSWORD 
userSchema.pre("save",function(done){

    let user = this;
    if(!user.isModified("password")){
        return done();
    }
    bcrypt.genSalt(10,function(err,salt){
        bcrypt.hash(this.username, salt, function(err, hash) {
            // we hashed the password and then we stored it in the user 
            if(err){return done(err);}
            user.password = hashedPassword;
            done();
        });
    })
})

//METHOD TO CHECK THE PASSWORD
userSchema.methods.checkPassword = function(guess,done){
    bcrypt.compare(guess,this.password,function(err,isMatch){
        done(err,isMatch);
    })
}



// to use a schema we need to convert it into a model
// to do that we pass it into mongoose.model(modelName,schema);
const User = mongoose.model("User",userSchema)

module.exports = User;

