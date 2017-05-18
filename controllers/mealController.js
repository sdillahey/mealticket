const Restaurant = require('../models/restaurant');
const Venue = require('../models/venue');
const request = require('request');

const rootURL = 'https://developers.zomato.com/api/v2.1/search?entity_id=281&entity_type=city&count=10&lat=';
const key = process.env.XZomatoAPIKey;


function index(req, res, next) {
  Venue.findById(req.params.venue, function(err, venue) {
    if (err) return res.redirect('/');
    let long = venue.longitude;
    let lat = venue.latitude;
    let options = {
      url: `https://developers.zomato.com/api/v2.1/search?entity_id=281&entity_type=city&count=5&lat=${lat}&lon=${long}&radius=805&sort=real_distance`,
      headers: {
        'user-key': key
      }
    };
    let existingDbRests;
    request(options, function (err, response, body) {
      let jdata = JSON.parse(body);
      let data = jdata.restaurants;
      let newApiRestaurants;
      getExistingRestaurants(data).then(function(dbRests) {
        existingDbRests = dbRests;
        newApiRestaurants = data.filter(function(apiRest) {
          return !dbRests.some(function(dbRest) {
            return dbRest.zomid == apiRest.restaurant.id;
          });
        });
        return createNewRestaurants(newApiRestaurants);
      }).then(function(newRests) {
        var searchData = (typeof newRests === 'object') ? existingDbRests.concat(newRests) : existingDbRests;
        res.render('index', {restaurants: searchData, user: req.user, venue: venue});
      });
    });
  });
}





function show(req, res, next){
  Venue.findById(req.params.venue, function(err, venue){
    Restaurant.findById(req.params.id, function(err, restaurant){
      if (err) return res.redirect(`/venues/${req.params.venue}`);
      res.render('show', { restaurant: restaurant, user: req.user, venue: venue });
    });
  });
}

function create(req, res, next){
  let newRating = {};
  newRating.walk = parseInt(req.body.walk);
  newRating.price = parseInt(req.body.price);
  newRating.speed = parseInt(req.body.speed);
  newRating.dress = parseInt(req.body.dress);
  newRating.latenight = (req.body.latenight === "on") ? true : false;
  Restaurant.findById(req.params.id, function(err, restaurant){
      if (err) return res.redirect(`/venues/${req.params.venue}/places`);
      restaurant.rating.push(newRating);
      restaurant.save(function(err){
        if (err) return res.redirect(`/venues/${req.params.venue}/places/${req.params.id}`);
        res.redirect(`/venues/${req.params.venue}/places/${req.params.id}`);
      });
  });
}

function createNewRestaurants(newApiRestaurants) {
  let promises = [];
  newApiRestaurants.forEach(function(rest){
    var newRest = new Restaurant;
    newRest.name = rest.restaurant.name;
    newRest.zomid = rest.restaurant.id;
    newRest.url = rest.restaurant.url;
    newRest.img_url = rest.restaurant.featured_image;
    newRest.longitude = rest.restaurant.location.longitude;
    newRest.latitude = rest.restaurant.location.latitude;
    newRest.address = rest.restaurant.location.address;
    newRest.avecost = rest.restaurant.average_cost_for_two;
    newRest.zomrate = rest.restaurant.user_rating.aggregate_rating;
    promises.push(newRest.save());
  });
  return Promise.all(promises);
}

function getExistingRestaurants(apiRests) {
  var promises = [];
  return new Promise(function(resolve, reject) {
    apiRests.forEach(function(apiRest) {
      promises.push(Restaurant.findOne({zomid: apiRest.restaurant.id}).exec());
    });
    Promise.all(promises).then(function(arrayOfDocs) {
      resolve(arrayOfDocs.filter(function(doc) {
        return doc !== null;
      }));
    });
  });
}

const mealController = {
  index: index,
  show: show,
  create: create
}

module.exports = mealController;
