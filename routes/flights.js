var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights')
/* GET users listing. */

router.get('/', flightsCtrl.index)
router.get('/new', flightsCtrl.new)
router.post('/', flightsCtrl.create)
router.get('/:id',flightsCtrl.show);
// /posts/:id/comments
router.post('/:flightId/destinations', flightsCtrl.addDestination)
module.exports = router;
