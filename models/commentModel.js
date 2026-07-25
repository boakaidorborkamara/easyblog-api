const {Schema, model, default: mongoose} = require("mongoose");

// comment schema 
const commentSchema = new Schema(
    {
        body:{
            type:String,
            required:true
        },
        post:{
            type: mongoose.Schema.Types.ObjectId,
            required: true
        }

    },
    {
        toJSON:{
            transform:(doc, return_doc)=>{
                return_doc.id = doc._id;

                delete return_doc._id;
                delete return_doc.__v;
            }
        }
    }
);

// comment model 
const Comment = model("Comment", commentSchema);

module.exports = Comment;