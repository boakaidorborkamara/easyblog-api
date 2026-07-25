const express = require("express");
const commentController = require("../controllers/commentController");

const Router = express.Router();

Router.get("/post/:post_id/comments", commentController.getComment);
Router.post("/post/:post_id/comments",commentController.createComment);
Router.patch("/post/:post_id/comments/:id", commentController.updateComment);
Router.delete("/post/:post_id/comments/:id", commentController.deleteComment);


module.exports = Router;