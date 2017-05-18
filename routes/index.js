const express = require('express');
const router = express.Router();
const passport = require('passport');
const request = require('request');

const mealController = require('../controllers/mealController');
const venueController = require('../controllers/venueController');
const userController = require('../controllers/userController');

/* GET home page. */
router.get('/', venueController.main);

router.get('/auth/google', userController.scope);
router.get('/oauth2callback', userController.auth);
router.get('/logout', userController.logout);

router.get('/test', zomController.show);

router.get('/venues', userController.isAdmin, venueController.allVenues);
router.get('/venues/:venue/edit', userController.isAdmin, venueController.edit);
router.put('/venues/:venue', userController.isAdmin, venueController.update);
router.delete('/venues/:venue', userController.isAdmin, venueController.delete);
router.get('/venues/:venue/places', mealController.index);
router.get('/venues/:venue/places/:id', mealController.show);
router.post('/venues/:venue/places/:id/rating', userController.isLoggedIn, mealController.create);

module.exports = router;
