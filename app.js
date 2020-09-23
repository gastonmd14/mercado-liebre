const express = require('express');
const app = express();
const path = require('path');


app.listen(3000, () => console.log('Server Running on Port 3000'));

app.get('/', function(req, res) {
    let file = path.resolve('index.html');
    res.sendFile(file);
});

app.get('/register', function(req, res) {
    let file = path.resolve('register.html');
    res.sendFile(file);
});

app.get('/login', function(req, res) {
    let file = path.resolve('login.html');
    res.sendFile(file);
});

app.get('*', function(req, res) {
    if (req.url.includes('.')) {
        let file = path.resolve('.' + req.url)
        return res.sendFile(file)
    }
    res.send('Not Found');
});