var express = require('express');
var router = express.Router();

/* GET all recipes */
router.get('/recipes', function(req, res, next) {
  res.send('respond with a resource');
});

//write get by ID function

//write post

module.exports = router;
