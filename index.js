require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route');
const app = express();
app.use(express.json());


app.use("/api/products", productRoute)
app.get('/test', (req, res) => {
    res.send('Hello World!, this is a test');
});


mongoose.connect(process.env.MONGO_CONNECTION_STRING).then(
    () => {
        console.log('Connected to database!');
        app.listen(3000, () => {
            console.log('App listening on port 3000!');
        });
    }
).catch((err) => {
    console.log('Connection failed!', err);
});