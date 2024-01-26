var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/year', function(req, res, next) {
  // res.render('index', { title: 'Express' });

  const date = new Date();
  console.log('ok')

  res.json({ year : date})

});

module.exports = router;


