const express = require('express');
const router = express.Router();
const passport = require('passport');
const request = require('request');

const mealController = require('../controllers/mealController');
const venueController = require('../controllers/venueController');
const zomController = require('../controllers/zomController');

/* GET home page. */
router.get('/', venueController.main);

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email']}
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
));

router.get('/test', zomController.show);

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

router.get('/venues', venueController.allVenues); // TODO - auth middleware
router.get('/venues/:venue/edit', venueController.edit); // TODO - auth middleware
router.put('/venues/:venue', venueController.update); // TODO - auth middleware
router.delete('/venues/:venue', venueController.delete); // TODO - auth middleware
router.get('/venues/:venue/places', mealController.index);
router.get('/venues/:venue/places/:id', mealController.show);
router.post('/venues/:venue/places/:id/rating', mealController.create);




module.exports = router;
