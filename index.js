require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();



app.listen(3000, () => {
    console.log('App listening on port 3000!');
});

app.get('/test', (req, res) => {
    res.send('Hello World!, this is a test');
});


mongoose.connect(process.env.MONGO_CONNECTION_STRING).then(
    () => {
        console.log('Connected to database!');
    }
).catch((err) => {
    console.log('Connection failed!', err);
});