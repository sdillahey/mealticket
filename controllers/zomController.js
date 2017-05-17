const zomRest = require('../models/restaurant');
const zomVenue = require('../models/venue');
const request = require('request');

const rootURL = 'https://developers.zomato.com/api/v2.1/search?entity_id=281&entity_type=city&count=10&lat=';
const key = process.env.XZomatoAPIKey;

function create(req, res, next){
  // let newRestaurant = {};
  // newRestaurant = (req.body.walk);
//   newRating.price = parseInt(req.body.price);
//   newRating.speed = parseInt(req.body.speed);
//   newRating.dress = parseInt(req.body.dress);
//   newRating.latenight = (req.body.latenight === "on") ? true : false;
//   Restaurant.findById(req.params.id, function(err, restaurant){
//       if (err) return res.redirect(`/venues/${req.params.venue}/places`);
//       restaurant.rating.push(newRating);
//       restaurant.save(function(err){
//         if (err) return res.render('show', {restaurant})
//         res.redirect(`/venues/${req.params.venue}/places/${req.params.id}`);
//       });
//   });
}

function show(req, res, next) {
  let options = {
    url: `https://developers.zomato.com/api/v2.1/search?entity_id=281&entity_type=city&count=5&lat=34.05&lon=-118.25&radius=805&sort=real_distance`,
    headers: {
      'user-key': key
    }
  };

  // console.log('options=============================', options)

  request(options, function (err, response, body) {
    console.log("Zom controller body", body);
    let data = JSON.parse(body);
    let restData = data.restaurants;
    // console.log(restData.restaurant.name, typeof data);
    // console.log("DATATATATATATTA", typeof data);
    res.send(restData);
  });
}

const zomController = {
  create: create,
  show: show
}

module.exports = zomController;

