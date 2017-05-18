var express = require('express');
var router = express.Router();

const apiController = require('../controllers/apiController');

router.get('/venues', apiController.allVenues);
router.get('/places', apiController.allPlaces);
router.get('/places/:id', apiController.showPlace);

module.exports = router;
