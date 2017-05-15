var express = require('express');
var router = express.Router();

const mealController = require('../controllers/mealController');

/* GET home page. */
router.get('/', mealController.main);
router.get('/venues', mealController.allVenues);
router.get('/:venue', mealController.index);


module.exports = router;
