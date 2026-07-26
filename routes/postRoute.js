const express = require("express");
const postController = require("../controllers/postController");
const {auth} = require("../utils/middleware")

const Router = express.Router();

Router.get("/posts", postController.getAllPost);
Router.post("/posts",auth ,postController.createPost);
Router.patch("/posts/:id", postController.updatePost);
Router.delete("/posts/:id", postController.deletePost);


module.exports = Router;