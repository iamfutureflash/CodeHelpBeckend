const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.listen(3000, () => {
    console.log("Server Started at port 3000");
});

app.get('/', (req, res) => {
    res.send("<h1>🚀🤘Hello Jee, kaise ho saare</h1>")
})
app.post('/api/cars', (req, res) => {
    const { name, brand } = req.body;
    console.log(brand, name);
    const data = {
        name,
        brand,
        message: 'Car submitted successfully'
    }
    res.send(data);
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => { console.log("Connection Successful") })
    .catch((error) => { console.log("Recieved and error ", error); });
























