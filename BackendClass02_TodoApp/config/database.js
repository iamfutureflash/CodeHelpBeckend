const mongoose = require('mongoose');
require('dotenv').config();
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true, useUnifiedTopology: true
    })
        .then(() => { console.log("DataBase Connection is Successful"); })
        .catch((error) => {
            console.log('DataBase Connection error \n');
            console.error(error);
            process.exit(1);
        });
}
module.exports = dbConnect;