const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var commentSchema = new Schema({
  text: String,
  name: String,
  created: { type: Date, default: Date.now }
});

var venueSchema = Schema({
  name: String,
  longitude: Number,
  latitude: Number,
  address: String,
  url: String,
  comment: [commentSchema]
});

module.exports = mongoose.model('Venue', venueSchema);
