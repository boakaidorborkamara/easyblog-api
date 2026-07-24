const {Schema, model} = require("mongoose");

// user schema 
const userSchema = new Schema(
    {
        first_name:{
            type:String,
            minLength:2,
            required:true
        },
        last_name:{
            type:String,
            minLength:2,
            required:true
        },
         username:{
            type:String,
            minLength:2,
            required:true
        },
        password:{
            type:String,
            minLength:5,
            required:true
        }

    },
    {
        toJSON:{
            transform:(doc, return_doc)=>{
                return_doc.id = return_doc._id

                delete return_doc._id;
                delete return_doc.password;
                delete return_doc.__v;
                
            }
        }
    }
);

// user model 
const User = model("User", userSchema);

module.exports = User;