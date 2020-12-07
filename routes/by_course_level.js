var express = require('express');
var router = express.Router();

var db = require('../courses.json');

/* GET courses by level (graduate or undergraduate). */
router.get('/:qlevel', function(req, res, next) {
  var level = req.params['qlevel'];
  // Filter by course level.
  var courses = db['courses'].filter(function(course) {
    return course['course_level'] == level;
  })
  res.json(courses);
});

module.exports = router;
