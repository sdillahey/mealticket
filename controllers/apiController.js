const Restaurant = require('../models/restaurant');
const Venue = require('../models/venue');

function allVenues(req, res) {
  Venue.find({}, function(err, venues){
    if (err) return res.status(500).json({msg: err});
    res.status(200).json(venues);
  });
}

function allPlaces(req, res) {
  Restaurant.find({}, function(err, restaurants){
    if (err) return res.status(500).json({msg: err});
    res.status(200).json(restaurants);
  });
}

function showPlace(req, res) {
  Restaurant.findById(req.params.id, function(err, rest){
    if (err) return res.status(500).json({msg: err});
    res.status(200).json(rest);
  });
}

const apiController = {
  allVenues,
  allPlaces,
  showPlace,
}

module.exports = apiController;
