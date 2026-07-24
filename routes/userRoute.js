const express = require("express");
const userController = require("../controllers/userController");

const Router = express.Router();

Router.get("/users", userController.getUser);


module.exports = Router;