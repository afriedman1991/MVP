const express = require('express');
const bodyParser = require('body-parser');
const getRandomGif = require('./getAGif').getRandomGif;
const db = require('../database/index.js');
const saveNewGif = require('../schemas/gifsSchema.js').saveNewGif;
const getMyGifs = require('../schemas/gifsSchema.js').getMyGifs
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());


app.get('/genGif', function(req, res) {
  getRandomGif(function(gif) {
    res.send(gif)
  });
});

app.get('/myGifs', function(req, res) {
  getMyGifs(function(myGifs) {
    res.end(JSON.stringify(myGifs));
  })
});

app.post('/saveGif', function(req, res) {
  saveNewGif(req.body.link);
  res.end("201 new data created");
});

let port = 8000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
