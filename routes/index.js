const express = require('express');
const router = express.Router();
const passport = require('passport');
const request = require('request');

const mealController = require('../controllers/mealController');
const venueController = require('../controllers/venueController');

/* GET home page. */
router.get('/', venueController.main);
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email']}
));
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});
router.get('/venues', venueController.allVenues);
router.get('/venues/:venue/edit', venueController.edit);
router.put('/venues/:venue', venueController.update);
router.delete('/venues/:venue', venueController.delete);
router.get('/:venue', mealController.index);
router.get('/:venue/:id', mealController.show);
router.post('/:venue/:id', mealController.create);


module.exports = router;
