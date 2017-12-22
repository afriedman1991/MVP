const express = require('express');
const bodyParser = require('body-parser');
const getRandomGif = require('./getAGif').getRandomGif;
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());


app.get('/genGif', function(req, res) {
  console.log("getGif running!");
  getRandomGif(function(gif) {
    res.send(gif)
  });
});


let port = 8000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
