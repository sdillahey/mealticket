// const Zom = require('../models/zom')

const rootURL = 'https://developers.zomato.com/api/v2.1/search?entity_id=281&entity_type=city&count=10&lat=';
const key = process.env.XZomatoAPIKey;
const request = require('request')
// const venLat = Venue.latitude;
// const venLon = Venue.longitude;

function index(req, res, next) {
  // res.render('index', ?)
}

function show(req, res, next) {
  console.log("zomCont HELLOHELLOHELLOHELO");
  var options = {
    url: `https://developers.zomato.com/api/v2.1/search?entity_id=281&entity_type=city&count=10&lat=34.05&lon=-118.25&radius=805&sort=real_distance`,
    headers: {
      'user-key': key
    }
  };

  console.log('options =', options)


  request(options, function (err, response, body) {
    console.log("Zom controller body", body);
    res.json(body);
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
  index: index,
  show: show/*,
  post: post*/
}

module.exports = zomController;

