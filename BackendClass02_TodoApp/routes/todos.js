const express = require("express");
const defaultRouter = express.Router();
const { createTodo } = require("../controllers/createTodo");

defaultRouter.post("/createTodo", createTodo);

module.exports = defaultRouter;