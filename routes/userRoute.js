const express = require("express");
const userController = require("../controllers/userController");

const Router = express.Router();

Router.get("/users", userController.getUser);
// Router.get("/users/me", userController.getUser);
Router.post("/users", userController.createUser);
Router.patch("/users/:id", userController.updateUser);
Router.delete("/users/:id", userController.deleteUser);


module.exports = Router;