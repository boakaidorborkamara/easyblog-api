const User = require("../models/userModel");

const getUser = (req, res, next)=>{
    res.send("getting user...");
}

const createUser = (req, res, next)=>{
    res.send("creating user...")
}

const updateUser = (req, res, next)=>{
    res.send("updating user...")
}

const deleteUser = (req, res, next)=>{
    res.send("deleting user...")
}


module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser
}