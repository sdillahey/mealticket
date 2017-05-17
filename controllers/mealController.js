const Restaurant = require('../models/restaurant');
const Venue = require('../models/venue');

// this function will need to also pass in venue and include our search functionality
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
      if (err) return res.redirect('/<%=venue._id%>');
      res.render('show', { restaurant: restaurant, user: req.user, venue: venue });
    });
  });
}

function create(req, res, next){
  // let rating = new Rating(req.body);
  // rating.save(function(err){
  //   if (err) return res.render('show', {restaurant}) //remember to pass in restaurant data
  //   res.redirect('/<%req.params.venue%>');
  // });
}

const mealController = {
  index: index,
  show: show,
  create: create
}

module.exports = mealController;
