const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ratingSchema = new Schema({
  walk: { type: Number, enum: [1, 2, 3, 4, 5] },
  price: { type: Number, enum: [1, 2, 3, 4, 5] },
  speed: { type: Number, enum: [1, 2, 3, 4, 5] },
  dress: { type: Number, enum: [1, 2, 3, 4, 5] },
  latenight: Boolean
});

var restaurantSchema = new Schema({
  name: String,
  zomid: Number,
  rating: [ratingSchema],
  url: String,
  img_url: {type: String, default: 'http://i.imgur.com/enUc2e8.jpg'},
  longitude: Number,
  latitude: Number,
  address: String,
  avecost: Number,
  cuisine: {type: String, default: 'food'},
  zomrate: Number
});

restaurantSchema.virtual('aveRate').get(function() {
  let ave = {
    walk: 0,
    price: 0,
    speed: 0,
    dress: 0,
    latenightPct: 0
  };
  if (!this.rating.length) return ave;
  let aveRating = this.rating.reduce(function(acc, cur){
    return {
      walk: acc.walk + cur.walk,
      price: acc.price + cur.price,
      speed: acc.speed + cur.speed,
      dress: acc.dress + cur.dress,
      latenightPct: acc.latenightPct + (cur.latenight ? 1 : 0)
    }
  }, ave);
  for (var key in aveRating) {
    if (key !== "latenightPct") {
      aveRating[key] = Math.round(aveRating[key]/this.rating.length);
    } else {
      aveRating[key] = ((aveRating[key]/this.rating.length)*100).toFixed();
    }
  }
  return aveRating;
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
