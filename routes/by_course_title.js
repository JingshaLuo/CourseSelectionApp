var express = require('express');
var router = express.Router();

var db = require('../courses.json');

/* GET courses by title. */
router.get('/:qtitle', function(req, res, next) {
  var title = req.params['qtitle'];
  console.log(title);
  // filter by course code prefix
  var courses = db['courses'].filter(function(course) {
    return course['title'].includes(title);
  })
  res.json(courses);
});

module.exports = router;
