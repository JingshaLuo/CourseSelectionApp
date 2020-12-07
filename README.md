# Launch API server
1. Clone repository to local disk
```
$ git clone https://github.com/JingshaLuo/CourseSelectionApp.git myapp
```

2. Install and start web application
```
$ cd myapp
myapp $ npm install
myapp $ npm start

> myapp@0.0.0 start /home/jingshaluo/myapp
> node ./bin/www
```

# Supported APIs

Notice that all APIs are case-sensitive.
- By course code: api/by_course_code/:qcode
    - Sample URL: http://localhost:3000/api/by_course_code/CUS754
- By course title: api/by_title/:qtitle
    - Sample URL: http://localhost:3000/api/by_title/Computer
- By instructor name: api/by_instructor/:qname
    - Sample URL: http://localhost:3000/api/by_instructor/Chr
- By course leve: api/by_level/:qlevel
    - Sample URL: http://localhost:3000/api/by_course_level/undergraduate
- By instructor name and level: api/combined_query/:qname/:qlevel
    - Sample URL: http://localhost:3000/api/combined_query/Chr/undergraduate

# Sample Applicaiton
A web application of this repository has been deployed to https://jingshaluo-course-app.herokuapp.com/.
