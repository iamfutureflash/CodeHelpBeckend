const express = require("express");
const defaultRouter = express.Router();
const { createTodo, getAllTodo, getTodoByID, deleteTodoByID, updateTodoByID } = require("../controllers/TodoController");

defaultRouter.post("/todo/create", createTodo);
defaultRouter.get("/todo/all", getAllTodo);
defaultRouter.get("/todo/:id", getTodoByID);
defaultRouter.delete("/todo/delete/:id", deleteTodoByID);
defaultRouter.put("/todo/update/:id", updateTodoByID);


module.exports = defaultRouter;