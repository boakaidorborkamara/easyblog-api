const {Schema, model} = require("mongoose");

// category schema 
const categorySchema = new Schema(
    {
        title:{
            type:String,
            required:true,
            minLength:2,
            
        },

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

// category model 
const Category = model("Category", categorySchema);

module.exports = Category;