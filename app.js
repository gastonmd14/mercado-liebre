const express = require ('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.listen(3000, () => console.log('Server port Running on port 3000'));

app.get('/', function (req, res) {
    let file = path.resolve('index.html');
    res.sendFile(file);
});

app.get('*', function(req, res) {
	if (req.url.endsWith('css')) {
	    let file = path.resolve('.' + req.url);
	    return res.sendFile(file);
	};
	let image = ['jpg', 'jpeg', 'gif', 'png', 'svg'];
	let ext = req.url.split('.')[1];
	if (image.includes(ext)) {
	    let file = path.resolve('.' + req.url);
	    return res.sendFile(file);
	};
});

