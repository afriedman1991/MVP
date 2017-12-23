const mongoose = require('mongoose');
mongoose.connect('mongodb://afriedman1991:Af62257n!@ds157653.mlab.com:57653/mvpdb', {useMongoClient: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connection achieved!');
});

module.exports.db = db;
