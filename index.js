const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});

app.get('/test', (req, res) => {
    res.send('Hello World!, this is a test');
}); 