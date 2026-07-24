const {Schema, model} = require("mongoose");

// comment schema 
const commentSchema = new Schema(
    {
        title:{
            type:String,
            minLength:2,
            require:true
        },

    }
);

// comment model 
const Comment = model("Comment", commentSchema);

module.exports = Comment;