const mongoose = require("mongoose");
const {Schema, model} = require("mongoose");

// post schema 
const postSchema = new Schema(
    {
        title:{
            type:String,
            required:true
        },
        body:{
            type:String,
            required:true
        },
        comments:{
            type: [mongoose.Schema.Types.ObjectId],
        }
    },
    {
        timestamps: true,
        toJSON:{
            transform:(doc, return_doc)=>{
                return_doc.id = doc._id;

                delete return_doc._id;
                delete return_doc.__v;
            }
        }
    }
);

// post model 
const Post = model("Post", postSchema);

module.exports = Post;