const { request } = require("express");
const Comment = require("../models/commentModel");
const Post = require("../models/postModel");
const {success, failure} = require("../utils/response");

const createComment = async(req, res, next)=>{
    try{
        let user_id = req.user.id;
        console.log("user id", user_id);


        // extract detail from request body 
        let {body} = req.body; //comment body
        let post_id = req.params.post_id; //post id

        // validate post id 
        let post = await Post.findById(post_id);

        if(!post){
            res.status(404).json(failure(404, "The post for the provided post_id doesn't exists", "Post not found!"));
        }

        // create new comment  
        let comment = Comment({body, post:post_id});

        // add comment to db 
        let result = await comment.save();

        // UPDATE POST WITH COMMENT ID 
        post.comments = [...post.comments, result._id];
        console.log("ps", post);
        await post.save();
        
        // send response 
        res.status(201).json(success(comment, "Comment created successfully!"));
    }
    catch(err){
        next(err)
    }
}

const getComment = (req, res, next)=>{
    res.send("getting Comment...");
}



const updateComment = (req, res, next)=>{
    res.send("updating Comment...")
}

const deleteComment = (req, res, next)=>{
    res.send("deleting Comment...")
}


module.exports = {
    getComment,
    createComment,
    updateComment,
    deleteComment
}