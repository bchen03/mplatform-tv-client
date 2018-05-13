const express = require('express');
//const bodyParser = require('body-parser')
const path = require('path');
const app = express();

console.log(__dirname);

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.all('^/*$', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});


app.listen(process.env.PORT || 3030);