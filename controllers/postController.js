const Post = require("../models/postModel");
const {success, failure} = require("../utils/response");

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

const updatePost = async(req, res, next)=>{
   try{
        // define allowed fields for edit 
        let allowedFields = ["title", "body"];

        // get user data 
        let post_id = req.params.id;
        let updates = req.body;

        // restructure query based on user data and allowedFields, update allow fields only  
        let query = {};
        Object.keys(updates).forEach(field =>{
            if(allowedFields.includes(field)){
                // console.log("field:" , field)
                query[field] = updates[field];
            }
        })

        // update db 
        let post = await Post.findByIdAndUpdate(post_id, {$set:query},{returnDocument:"after", reValidation:true} );

        // handle post not found 
        if(!post){
             res.status(404).json(failure(404, null, "Post with the provided ID doesn't exist!"));
        }
        
        
        // send response 
        res.status(200).json(success(post,"Post successfully updated!"));
   }
   catch(err){
        throw err;
   }
}

const deletePost = async(req, res, next)=>{
    try{
        // get user data 
        let id = req.params.id;
        console.log(id);

        
        let deleted_post = await Post.findByIdAndDelete(id);

        if(!deleted_post){
            res.status(404).json(failure(404, "Post Not found", "Post with the provided id not found!"))
        }

        res.status(200).json(success(null, "Post successfully deleted!"))
    }
    catch(err){
        next(err);
    }
}


module.exports = {
    getAllPost,
    createPost,
    updatePost,
    deletePost
}