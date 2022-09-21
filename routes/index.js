var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' }); //the ejs is going to take this property and inject into the ejs view.
});

module.exports = router;
