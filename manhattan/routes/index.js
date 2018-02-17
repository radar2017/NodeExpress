var express = require('express');
var router = express.Router();

router.all('/', function(req, res, next) {
    console.log('Accessing all sections...');
    next(); // pass control to the next handler
});

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/a', function(req, res, next) {
    res.send('Sample of response - just like Reponse.Write');
});

router.get('/b', function(req, res, next) {
    res.redirect('/');
});

router.get('/c', function(req, res, next) {
    res.sendStatus('200');
});

module.exports = router;