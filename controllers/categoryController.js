const Category = require("../models/categoryModel");

const getCategory = (req, res, next)=>{
    res.send("getting Category...");
}

const createCategory = async (req, res, next)=>{
    try{
        throw new Error("test")
        res.send("creating Category...")
    }
    catch(err){
        next(err)
    }
}

const updateCategory = (req, res, next)=>{
    res.send("updating Category...")
}

const deleteCategory = (req, res, next)=>{
    res.send("deleting Category...")
}


module.exports = {
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
}