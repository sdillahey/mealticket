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

function show(req, res, next){
  // Restaurant.findById(req.params.id, function(err, restaurant){
  //   if (err) return res.redirect('/<%=req.params.venue%>')
    res.render('show'); //must pass in restaurant data
  // });
}

function edit(req, res, next){
  // Venue.findById(req.params.venue, function(err, venue){
  //   if (err) return res.redirect('venues');
    res.render('edit'); //must pass in venue data
  // });
}

function update(req, res, next){
  Venue.findByIdAndUpdate(req.params.venue, req.body, function(err, venue){
    if (err) return res.render('/venues/<%=req.params.venue%>/edit');
    res.redirect('venues');
  });
}

function destroy(req, res, next){
  Venue.findByIdAndRemove(req.params.venue, function(err){
    res.redirect('/venues');
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
  main: main,
  index: index,
  allVenues: allVenues,
  show: show,
  edit: edit,
  update: update,
  delete: destroy,
  create: create
}

module.exports = mealController;
