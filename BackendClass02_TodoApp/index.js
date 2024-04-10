const express = require("express");
const todoRouter = require("./routes/todos");
const dbConnect = require("./config/database");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/v1', todoRouter);


app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
})

// connect to the database
dbConnect();

app.get('/', (req, res) => {
    res.send(`<h1>This is HOMEPAGE baby</h1>`)
});
