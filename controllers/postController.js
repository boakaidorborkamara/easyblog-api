const Post = require("../models/postModel");
const {success} = require("../utils/response");

const createPost = async (req, res, next)=>{
    try{
        let user = req.user.id;

        // extract data from request body 
        let {title, category, body} = req.body;

        // create a new post 
        let post = Post({title, category, user, body});
        post.populate("category")

        // add post to database 
        let result = await post.save();

        // send response 
        res.status(201).json(success(result, "Post created successfully!"));
    }
    catch(err){
        next(err);
    }
}


const getAllPost = async(req, res, next)=>{
   try{
        let page = Number(req.query.page) || 1;
        let limit = Number(req.query.limit) || 10;
        let skip = (page -1 ) * limit;

        let totalItems = (await Post.find({})).length;
        let totalPage = Math.ceil(totalItems / limit);

        let posts = await Post.find({}).populate("comments",)
        .skip(skip)
        .limit(limit)
        
        res.status(200).json(success({
            data:posts,
            pagination:{
                page:page,
                limit:limit,
                totalItems:totalItems,
                totalPage:totalPage,
                hasNext:page < totalPage,
                hasPrevious:page > 1,
                nextPage:page < totalPage? page+1 : null,
                previousPage:page > 1 ? page-1 : null
            }
        }, "Post fetched successfully?"));
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
    getAllPost,
    createPost,
    updatePost,
    deletePost
}