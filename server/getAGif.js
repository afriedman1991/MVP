const axios = require('axios');
const config = require('../config.js');

let url = `http://api.giphy.com/v1/gifs/random?format=json=g&api_key=${config.GIPHY_API_KEY}`
let getRandomGif = (cb) => {
  axios.get(url)
  .then(function(response) {
    cb(response.data);
  })
  .catch(function(error) {
    console.error("ERROR!!", error);
  });
}

module.exports.getRandomGif = getRandomGif;