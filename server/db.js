const mongoose = require('mongoose');
require('dotenv').config();


const MONGO_URL = process.env.MONGO;
//const DB_NAME = process.env.DB_NAME;


mongoose.connect(MONGO_URL)
.then(
    () => {
        console.log('Connected to database');
    }
).catch((err) => {
    console.log('Error connecting to database ' + err);
})