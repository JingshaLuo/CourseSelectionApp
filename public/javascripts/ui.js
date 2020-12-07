function toggle_class(clazz) {
  $('#container').removeClass();
  $('#container').addClass("container");
  $('#container').addClass(clazz);
}

function fetchCourses() {
  $("#courseTableContent").empty();

  var classNames = $('#container').attr('class');

  if (classNames.includes('byCourseCode')) {
    fetchByCourseCode();
  } else if (classNames.includes('byInstructorAndLevel')) {
    fetchByInstructorAndLevel();
  } else if (classNames.includes('byCourseTitle')) {
    fetchByCourseTitle();
  } else if (classNames.includes('byInstructor')) {
    fetchByInstructor();
  } else if (classNames.includes('byCourseLevel')) {
    fetchByCourseLevel();
  } else {
    alert('Please select a query option first');
  }
}

function fetchByCourseCode() {
  var qcode = $('#courseCode').val();

  if (!qcode) {
    alert('Please input course code');
    return;
  }

  console.log('fetch by course code: ' + qcode);
  fetch('api/by_course_code/' + qcode)
      .then(
          function(response) {
            if (response.status !== 200) {
              console.log('Looks like there was a problem. Status Code: ' +
                          response.status);
              return;
            }

            response.json().then(function(data) {
              render(data);
            });
          }
      )
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
}

function fetchByCourseTitle() {
  var qtitle = $('#courseTitle').val();

  if (!qtitle) {
    alert('Please input course title');
    return;
  }

  console.log('fetch by course title: ' + qtitle);
  fetch('api/by_title/' + qtitle)
      .then(
          function(response) {
            if (response.status !== 200) {
              console.log('Looks like there was a problem. Status Code: ' +
                          response.status);
              return;
            }

            response.json().then(function(data) {
              render(data);
            });
          }
      )
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
}

function fetchByInstructor() {
  var instructor = $('#instructor').val();

  if (!instructor) {
    alert('Please input instructor name');
    return;
  }

  console.log('fetch by instructor: ' + instructor);
  fetch('api/by_instructor/' + instructor)
      .then(
          function(response) {
            if (response.status !== 200) {
              console.log('Looks like there was a problem. Status Code: ' +
                          response.status);
              return;
            }

            response.json().then(function(data) {
              render(data);
            });
          }
      )
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
}

function fetchByCourseLevel() {
  var qlevel = $('#courseLevel').val();

  if (!qlevel) {
    alert('Please select course level');
    return;
  }

  console.log('fetch by course level: ' + qlevel);
  fetch('api/by_course_level/' + qlevel.toLowerCase())
      .then(
          function(response) {
            if (response.status !== 200) {
              console.log('Looks like there was a problem. Status Code: ' +
                          response.status);
              return;
            }

            response.json().then(function(data) {
              render(data);
            });
          }
      )
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
}

function fetchByInstructorAndLevel() {
  var instructor = $('#instructor').val();
  if (!instructor) {
    alert('Please input instructor');
    return;
  }

  var qlevel = $('#courseLevel').val();
  if (!qlevel) {
    alert('Please select course level');
    return;
  }

  fetch('api/combined_query/' + instructor + '/' + qlevel.toLowerCase())
      .then(
          function(response) {
            if (response.status !== 200) {
              console.log('Looks like there was a problem. Status Code: ' +
                          response.status);
              return;
            }

            response.json().then(function(data) {
              render(data);
            });
          }
      )
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
}

function render(data) {
  console.log(data);

  data.forEach(function(course, index) {
    $("#courseTableContent").append(
        '<tr>' +
          '<th scope="row">' + index + '</th>' +
          '<td>' + course['course_code'] + '</td>' +
          '<td>' + course['title'] + '</td>' +
          '<td>' + course['instructor'] + '</td>' +
          '<td>' + course['course_level'] + '</td>' +
        '</tr>'
    );
  });
}
