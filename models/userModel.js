const {Schema, model} = require("mongoose");

// user schema 
const userSchema = new Schema(
    {
        first_name:{
            type:String,
            minLength:2,
            require:true
        },

    }
);

// user model 
const User = model("User", userSchema);

module.exports = User;