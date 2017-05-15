var express = require('express');
var router = express.Router();

const mealController = require('../controllers/mealController');

/* GET home page. */
router.get('/', mealController.main);
router.get('/venues', mealController.allVenues);
router.get('/venues/:venue/edit', mealController.edit);
router.put('/venues/:venue', mealController.update);
router.delete('/venues/:venue', mealController.delete);
router.get('/:venue', mealController.index);
router.get('/:venue/:id', mealController.show);
router.post('/:venue/:id', mealController.create);


module.exports = router;
