var express = require('express');
var router = express.Router();

/* GET home page. */ //the ejs is going to take this property and inject into the ejs view.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' }); 
});
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' }); 
});
router.get('/service', function(req, res, next) {
  res.render('index', { title: 'Services' }); 
});
router.get('/product', function(req, res, next) {
  res.render('index', { title: 'Products' }); 
});
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Information' }); 
});

module.exports = router;
