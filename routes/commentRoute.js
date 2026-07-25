const express = require("express");
const commentController = require("../controllers/commentController");

const Router = express.Router();

Router.get("/posts/:post_id/comments", commentController.getComment);
Router.post("/posts/:post_id/comments",commentController.createComment);
Router.patch("/posts/:post_id/comments/:id", commentController.updateComment);
Router.delete("/posts/:post_id/comments/:id", commentController.deleteComment);


module.exports = Router;