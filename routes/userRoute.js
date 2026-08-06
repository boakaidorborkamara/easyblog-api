const express = require("express");
const userController = require("../controllers/userController");

const Router = express.Router();


/**
 * @openapi
 * /api/v1/users:
 *   get:
 *     summary: Returns a list of users in JSON format.
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Leanne Graham
 */


Router.get("/users", userController.getUser);
// Router.get("/users/me", userController.getUser);
Router.post("/users", userController.createUser);
Router.patch("/users/:id", userController.updateUser);
Router.delete("/users/:id", userController.deleteUser);


module.exports = Router;