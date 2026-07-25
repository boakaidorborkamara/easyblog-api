const express = require("express");
const categoryController = require("../controllers/categoryController");

const Router = express.Router();

Router.post("/categories",categoryController.createCategory);
Router.get("/categories", categoryController.getAllCategory);
Router.patch("/categories/:id", categoryController.updateCategory);
Router.delete("/categories/:id", categoryController.deleteCategory);


module.exports = Router;