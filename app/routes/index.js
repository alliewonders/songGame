var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.render('../views/index.handlebars', {
    pageTitle: 'Home',
    pageId: 'home',
    title: 'This is a title'
  });
});


module.exports = router;
