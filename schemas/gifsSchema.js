const mongoose = require('mongoose');

const gifSchema = mongoose.Schema({
  gifUrl: String
});

let Gif = mongoose.model('Gif', gifSchema);


const saveNewGif = (gif) => {
  Gif.find({gifUrl: gif}, (err, docs) => {
    if (docs.length === 0) {
      let gifs = new Gif({gifUrl: gif})
      gifs.save();
    }
  })
};

const deleteAGif = (gif, cb) => {
  Gif.deleteOne({gifUrl: gif}, (err) => {
    if (err) {
      cb(err);
      return;
    }
    getMyGifs((gifLinks) => {
      cb(gifLinks);
    });
  });
}

const getMyGifs = (cb) => {
  Gif.find({}, (err, docs) => {
    var gifLinks = [];
    docs.forEach((doc) => {
      gifLinks.push(doc.gifUrl);
    })
    cb(gifLinks);
  });
}

module.exports.saveNewGif = saveNewGif;
module.exports.getMyGifs = getMyGifs;
module.exports.deleteAGif = deleteAGif;
