const Category = require("../models/categoryModel");

const getCategory = (req, res, next)=>{
    res.send("getting Category...");
}

const createCategory = (req, res, next)=>{
    res.send("creating Category...")
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