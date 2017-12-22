const axios = require('axios');
const config = require('../config.js');
// const request = require('request')

let getRandomGif = (cb) => {
//   var req = {
//     url: 'api.giphy.com/v1/gifs/random',
//     api_key: `${config.GIPHY_API_KEY}`,
//     method: 'GET',
//     data: 'application/json'
//   }

  axios.get('http://api.giphy.com/v1/gifs/random?api_key=yl9IrsCFmogMXixpHqYp8jJawVb5L0uE&rating=g&format=json')
  .then(function(response) {
    cb(response.data);
  })
  .catch(function(error) {
    console.error("ERROR!!", error);
  });
}

module.exports.getRandomGif = getRandomGif;
