var express = require('express');
var router = express.Router();

var db = require('../courses.json');

/* GET courses by instructor name and level (graduate or undergraduate). */
router.get('/:qname/:qlevel', function(req, res, next) {
  var name = req.params['qname'];
  var level = req.params['qlevel'];
  // Filter by course level.
  var courses = db['courses'].filter(function(course) {
    return course['instructor'].includes(name)
        && course['course_level'] == level;
  })
  res.json(courses);
});

module.exports = router;
