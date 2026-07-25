const Comment = require("../models/commentModel");
const {success} = require("../utils/response");

const createComment = async(req, res, next)=>{
    try{
        // extract detail from request body 
        let {body} = req.body;

        // create new comment  
        let comment = Comment({body});

        // add comment to db 
        let result = await comment.save();
        
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