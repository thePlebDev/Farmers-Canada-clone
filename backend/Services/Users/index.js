//this is going to make a request to the database which means that it is going to query the models
// we are going to create a UserService class and then have the appropriate methods on that. They should all be async 
const User = require("../../Models/user")
const BadRequestError = require('../../utils/errors')


 class UserService{

    async signup(username,password){// async function always returns a promise.
        try{
            const user = await User.findOne().exec(); 
            if(user){
                return "USER IS ALREADY SIGNED UP"
            }else{
                console.log("WE ARE IN THE ELSE")
                const newUser = await new User({
                    username,
                    password
                }).save()
                return newUser
            }
        }catch(e){
            return e
        }
        
    }

}

module.exports = UserService;