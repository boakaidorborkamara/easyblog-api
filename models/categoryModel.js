const {Schema, model} = require("mongoose");

// category schema 
const categorySchema = new Schema(
    {
        title:{
            type:String,
            minLength:2,
            require:true
        },

    }
);

// category model 
const Category = model("Category", categorySchema);

module.exports = Category;