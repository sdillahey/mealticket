const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
  googleId: String,
  name: String,
  created: { type: Date, default: Date.now },
  admin: {type: Boolean, default: false }
});

module.exports = mongoose.model('User', userSchema);
