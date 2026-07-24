const Comment = require("../models/commentModel");

const getComment = (req, res, next)=>{
    res.send("getting Comment...");
}

const createComment = (req, res, next)=>{
    res.send("creating Comment...")
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