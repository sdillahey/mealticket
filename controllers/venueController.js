const Venue = require('../models/venue')

function main(req, res, next){
  Venue.find({}, function(err, venues){
    if (err) return res.redirect('/');
    console.log(venues);
    res.render('main', { user: req.user, venues: venues });
  })
}

function allVenues(req, res, next){
  Venue.find({}, function(err, venues){
    if (err) return res.redirect('/');
    res.render('venues', {venues: venues, user: req.user});
  });
}

function edit(req, res, next){
  Venue.findById(req.params.venue, function(err, venue){
    if (err) return res.redirect('venues');
    res.render('edit', {venue});
  });
}

function update(req, res, next){
  Venue.findByIdAndUpdate(req.params.venue, req.body, function(err, venue){
    if (err) return res.render('/venues/<%=req.params.venue%>/edit');
    res.redirect('/venues');
  });
}

function destroy(req, res, next){
  Venue.findByIdAndRemove(req.params.venue, function(err){
    if (err) return res.redirect('/venues');
    res.redirect('/venues');
  });
}

const venueController = {
  main: main,
  allVenues: allVenues,
  edit: edit,
  update: update,
  delete: destroy
}

module.exports = venueController;
