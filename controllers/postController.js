const Post = require("../models/postModel");
const {success} = require("../utils/response");

const getPost = (req, res, next)=>{
    res.send("getting Post...");
}

const createPost = async (req, res, next)=>{
    try{
        let {title, body} = req.body;

        let post = Post({title, body});

        let result = await post.save();

        res.status(201).json(success(result, "Post created successfully!"));
    }
    catch(err){
        next(err);
    }
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