var express = require('express');
var router = express.Router();
var path = __dirname + '/../views/';

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(path);
  res.sendFile(path + "index.html");
});

module.exports = router;
