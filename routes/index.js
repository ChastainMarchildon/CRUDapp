var express = require('express');
var router = express.Router();
const carController = require('../controllers/carController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/cars',carController.getCars);

module.exports = router;
