// const Zom = require('../models/zom')

const rootURL = 'https://developers.zomato.com/api/v2.1/search?entity_id=281&entity_type=city&count=10&lat=';
const key = process.env.XZomatoAPIKey;
const request = require('request');

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
  // console.log("zomCont HELLOHELLOHELLOHELO");
  let options = {
    url: `https://developers.zomato.com/api/v2.1/search?entity_id=281&entity_type=city&count=5&lat=34.05&lon=-118.25&radius=805&sort=real_distance`,
    headers: {
      'user-key': key
    }
  };

  // AJconsole.log('options =', options)


  request(options, function (err, response, body) {
    // AJconsole.log("Zom controller body", body);
    // AJres.json(body);
    let restData = JSON.parse(body);
    options.url = restData;
    console.log("ZOM CONTROLLER BODY=============", restData)
    res.render('test', {restData: restData});

  //   // var userData = JSON.parse(body);
  //   // options.url = userData.repos_url;
  //   request(options, function(err, response, body) {
  //     // userData.repos = JSON.parse(body);
  //     // res.render('index', {userData: userData});
  //   });
  });
}

// function post(req, res, next) {
//   var options = {
//     url: `${rootURL}${venLat}&lon=${venLon}&radius=805&sort=real_distance`,
//     headers: {
//       'User-Agent': 'stacydillahey',
//       'Authorization': 'token ' + key
//     }
//   };
//   request(options, function (err, response, body) {
//     // var userData = JSON.parse(body);
//     // options.url = userData;
//     request(options, function(err, response, body) {
//       // userData.repos = JSON.parse(body);
//       // res.render('index', {userData: userData});
//     });
//   });
// }

const zomController = {
  create: create,
  show: show/*,
  create: create,
  post: post*/
}

module.exports = zomController;

