const mongoose = require('mongoose');

const gifSchema = mongoose.Schema({
  gifUrl: String
});

let Gif = mongoose.model('Gif', gifSchema);


const saveNewGif = function(gif) {
  Gif.find({gifUrl: gif}, (err, docs) => {
    if (docs.length === 0) {
      let gifs = new Gif({gifUrl: gif})
      gifs.save();
    }
  })
};

const getMyGifs = function(cb) {
  Gif.find({}, function(err, docs) {
    var gifLinks = [];
    docs.forEach(function(doc) {
      gifLinks.push(doc.gifUrl);
    })
    cb(gifLinks);
  });
}

module.exports.saveNewGif = saveNewGif;
module.exports.getMyGifs = getMyGifs;
