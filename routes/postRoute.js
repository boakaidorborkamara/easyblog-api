const express = require("express");
const postController = require("../controllers/postController");
const {auth} = require("../utils/middleware")

const Router = express.Router();

/**
 * @openapi
 * /api/v1/posts:
 *   get:
 *     summary: Retrive post.
 *     description: Returns a list of posts in JSON format
 *     responses:
 *       200:
 *         description: a list of posts in JSON format.
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

/**
 * @openapi
 * /api/v1/posts:
 *   post:
 *     summary: Retrive post.
 *     description: Returns a list of posts in JSON format
 *     responses:
 *       200:
 *         description: a list of posts in JSON format.
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


Router.get("/posts", postController.getAllPost);
Router.post("/posts",auth ,postController.createPost);
Router.patch("/posts/:id", postController.updatePost);
Router.delete("/posts/:id", postController.deletePost);



module.exports = Router;