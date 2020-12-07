var express = require('express');
var router = express.Router();

var db = require('../courses.json');

/* GET users listing. */
router.get('/:qcode', function(req, res, next) {
  var courseCode = req.params['qcode'];
  // filter by course code prefix
  var courses = db['courses'].filter(function(course) {
    return course['course_code'].startsWith(courseCode);
  })
  res.json(courses);
});

module.exports = router;
