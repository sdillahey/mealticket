const Restaurant = require('../models/restaurant');
const Venue = require('../models/venue');

// this function will need to include our search functionality
function index(req, res, next){
  Venue.findById(req.params.venue, function(err, venue){
    Restaurant.find({}, function(err, restaurants){
      if (err) return res.redirect('/');
      res.render('index', {restaurants: restaurants, user: req.user, venue: venue});
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

const mealController = {
  index: index,
  show: show,
  create: create
}

module.exports = mealController;
