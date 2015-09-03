var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('han solicitado esta pagina');
  res.render('index', { title: 'Menu principal'});
});

module.exports = router;
