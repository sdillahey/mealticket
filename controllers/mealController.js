// const Restaurant = require('../models/restaurant');
// const Venue = require('../models/venue')

function main(req, res, next){
  res.render('main');
}

function index(req, res, next){
  // Restaurant.find({}, function(err, restaurants){
  //   if (err) return res.redirect('/');
    res.render('index');
  // });
}

function allVenues(req, res, next){
  // Venue.find({}, function(err, venues){
  //   if (err) return res.redirect('/');
    res.render('venues');
  // });
}

const mealController = {
  main: main,
  index: index,
  allVenues: allVenues
}

module.exports = mealController;
