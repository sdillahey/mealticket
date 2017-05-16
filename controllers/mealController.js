const Restaurant = require('../models/restaurant');

// this function will need to also pass in venue and include our search functionality
function index(req, res, next){
  Restaurant.find({}, function(err, restaurants){
    if (err) return res.redirect('/');
    res.render('index', {restaurants});
  });
}

function show(req, res, next){
  Restaurant.findById(req.params.id, function(err, restaurant){
    if (err) return res.redirect('/<%=req.params.venue%>')
    res.render('show', { restaurant });
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
