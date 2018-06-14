const express = require('express');
const bodyParser = require('body-parser');
const getRandomGif = require('./getAGif').getRandomGif;
const db = require('../database/index.js');
const saveNewGif = require('../schemas/gifsSchema.js').saveNewGif;
const getMyGifs = require('../schemas/gifsSchema.js').getMyGifs;
const deleteAGif = require('../schemas/gifsSchema.js').deleteAGif;
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());


app.get('/genGif', (req, res) => {
  getRandomGif((gif) => {
    res.send(gif)
  });
});

app.get('/myGifs', (req, res) => {
  getMyGifs((myGifs) => {
    res.end(JSON.stringify(myGifs));
  })
});

app.post('/saveGif', (req, res) => {
  saveNewGif(req.body.link);
  res.end("201 new data created");
});

app.delete('/deleteGif', (req, res) => {
  deleteAGif(req.body.link, (result) => {
    if (Array.isArray(result)) {
      res.end(JSON.stringify(result));
    } else {
      res.end("Whoops:",JSON.stringify(result));
    }
  });
});

let port = 8000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
