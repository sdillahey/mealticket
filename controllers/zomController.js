const zomRest = require('../models/restaurant');
const zomVenue = require('../models/venue');
const request = require('request');

const rootURL = 'https://developers.zomato.com/api/v2.1/search?entity_id=281&entity_type=city&count=10&lat=';
const key = process.env.XZomatoAPIKey;


function show(req, res, next) {
  let long = zomVenue.longitude;
  let lat = zomVenue.latitude;
  let options = {
    url: `https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&count=5&lat=34.05&lon=-118.25&radius=805&sort=rating`,
    // url: `https://developers.zomato.com/api/v2.1/search?entity_id=281&entity_type=city&count=5&lat=34.05&lon=-118.25&radius=805&sort=real_distance`,
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
      res.send(searchData);
    });
  });
}

function createNewRestaurants(newApiRestaurants) {
  let promises = [];
  newApiRestaurants.forEach(function(rest){
    var newRest = new zomRest;
    newRest.name = rest.restaurant.name;
    newRest.zomid = rest.restaurant.id;
    newRest.url = rest.restaurant.url;
    newRest.cuisines = rest.restaurant.cuisines;
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
      promises.push(zomRest.findOne({zomid: apiRest.restaurant.id}).exec());
    });
    Promise.all(promises).then(function(arrayOfDocs) {
      resolve(arrayOfDocs.filter(function(doc) {
        return doc !== null;
      }));
    });
  });
}

const zomController = {
  show: show
}

module.exports = zomController;



