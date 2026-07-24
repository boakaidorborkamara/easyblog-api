const express = require("express");
const authController = require("../controllers/authController");

const Router = express.Router();

Router.post("/auth/signup", authController.signup);
Router.post("/auth/login",authController.login);
Router.post("/auth/logout", authController.logout);



module.exports = Router;