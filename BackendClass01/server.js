const express = require('express');
const app = express();

app.listen(5000, () => {
    console.log("Server Started at port 3000");
});

app.get('/', (req, res) => {
    res.send("<h1>🚀🤘Hello Jee, kaise ho saare</h1>")
})
app.post('/api/cars', (req, res) => {
    const { name, brand } = req.body();
    console.log(brand,name);
    res.send('Car submitted successfully')
})