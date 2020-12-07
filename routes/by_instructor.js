var express = require('express');
var router = express.Router();

var db = require('../courses.json');

/* GET courses by instructor name. */
router.get('/:qname', function(req, res, next) {
  var partialName = req.params['qname'];
  // Filter by instructor name partially.
  var courses = db['courses'].filter(function(course) {
    return course['instructor'].split(' ').some(function(name) {
      return name.includes(partialName);
    });
  })
  res.json(courses);
});

module.exports = router;
