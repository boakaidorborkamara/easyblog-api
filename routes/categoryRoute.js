const express = require("express");
const categoryController = require("../controllers/categoryController");

const Router = express.Router();

Router.get("/categories", categoryController.getCategory);
Router.post("/categories",categoryController.createCategory);
Router.patch("/categories/:id", categoryController.updateCategory);
Router.delete("/categories/:id", categoryController.deleteCategory);


module.exports = Router;