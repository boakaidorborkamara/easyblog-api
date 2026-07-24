const Post = require("../models/postModel");

const getPost = (req, res, next)=>{
    res.send("getting Post...");
}

const createPost = (req, res, next)=>{
    res.send("creating Post...")
}

const updatePost = (req, res, next)=>{
    res.send("updating Post...")
}

const deletePost = (req, res, next)=>{
    res.send("deleting Post...")
}


module.exports = {
    getPost,
    createPost,
    updatePost,
    deletePost
}