const express = require("express");
const commentController = require("../controllers/commentController");

const Router = express.Router();

Router.get("/comments", commentController.getComment);
Router.post("/comments",commentController.createComment);
Router.patch("/comments/:id", commentController.updateComment);
Router.delete("/comments/:id", commentController.deleteComment);


module.exports = Router;