const {Schema, model} = require("mongoose");

// post schema 
const postSchema = new Schema(
    {
        title:{
            type:String,
            minLength:2,
            require:true
        },

    }
);

// post model 
const Post = model("Post", postSchema);

module.exports = Post;