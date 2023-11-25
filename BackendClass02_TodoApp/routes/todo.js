const express = require('express');
const router = express.Router();

// import controller
const { createTodo } = require('../controllers/createTodo');
const { getTodo } = require('../controllers/getTodos');
const { getTodoByID } = require('../controllers/getTodoByID');

// define API routes
router.post('/createTodo', createTodo);
router.get('/getTodos', getTodo)
router.get("/getTodos/:id", getTodoByID)
module.exports = router;