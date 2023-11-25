const express = require("express");
const app = express();
//import routes for TODO API
const todoRoutes = require('./routes/todo');
// connect to the database
const dbConnect = require("./config/database")
//load config file from env
require("dotenv").config();

const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

// mount the todo API routes
app.use("/api/v1", todoRoutes);

// start server
app.listen(PORT, () => { console.log(`Server started successfully at ${PORT}`); });

dbConnect();

app.get("/", (req, res) => {
    res.send(`<h1>This is HOMEPAGE baby🚀🚀🚀</h1>`)
})
















