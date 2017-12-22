const axios = require('axios');
const config = require('../config.js');

let getRandomGif = (cb) => {
  axios.get('api.giphy.com/v1/gifs/random', {
    api_key: `${config.GIPHY_API_KEY}`,
    rating: g
  });
}
