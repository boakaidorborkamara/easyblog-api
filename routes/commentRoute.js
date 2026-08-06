const express = require("express");
const commentController = require("../controllers/commentController");
const {auth} = require("../utils/middleware");

const Router = express.Router();

Router.get("/posts/:post_id/comments",  commentController.getComment);
Router.post("/posts/:post_id/comments", auth, commentController.createComment);
Router.patch("/posts/:post_id/comments/:id", commentController.updateComment);
Router.delete("/posts/:post_id/comments/:id",auth, commentController.deleteComment);


module.exports = Router;