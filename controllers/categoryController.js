const Category = require("../models/categoryModel");
const {success} = require("../utils/response");


const createCategory = async (req, res, next)=>{
    try{
        // extract details form request body 
        let {title} = req.body;

        // create a new category and save it to db 
        let category = Category({title});
        let result = await category.save();

        // send response 
        res.status(201).json(success(result, "Category created successfully!"));
    }
    catch(err){
        next(err)
    }
}


const getAllCategory = (req, res, next)=>{
    res.send("getting Category...");
}


const updateCategory = (req, res, next)=>{
    res.send("updating Category...")
}

const deleteCategory = (req, res, next)=>{
    res.send("deleting Category...")
}


module.exports = {
    getAllCategory,
    createCategory,
    updateCategory,
    deleteCategory
}