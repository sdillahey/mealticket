var express = require('express');
var router = express.Router();

const mealController = require('../controllers/mealController');
const venueController = require('../controllers/venueController');

/* GET home page. */
router.get('/', mealController.main);
router.get('/venues', venueController.allVenues);
router.get('/venues/:venue/edit', venueController.edit);
router.put('/venues/:venue', venueController.update);
router.delete('/venues/:venue', venueController.delete);
router.get('/:venue', mealController.index);
router.get('/:venue/:id', mealController.show);
router.post('/:venue/:id', mealController.create);


module.exports = router;
