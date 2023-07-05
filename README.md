Assignment: rss-simple-crud-api
Installation
Clone the repo
Switch to a branch 'development';
Install dependencies
npm install
Checking the functionality
Server operations
Start the server npm run start:dev for check development mode
After start server open Postman, send requests
GET (http://localhost:3000/api/users) to get an array of users;
GET (http://localhost:3000/incorrect_url) to get response to an incorrect request;
POST (http://localhost:3000/api/users) to create new user with body in JSON like
  {
  "username": "Vlad",
  "age": 35,
  "hobbies": ["gaming"]
  }
POST - try sending invalid data
copy id of created user;
PUT (http://localhost:3000/api/users/{createdUserId}) to change user with body in JSON like
  {
  "username": "Jon",
  "age": 25,
  "hobbies": ["IT", "gaming]
  }
or

  {
  "hobbies": ["IT", "gaming]
  }
PUT try sending invalid data;
DELETE (http://localhost:3000/api/users/{createdUserId}) to delete created user;
Dotenv
In the root folder of the project rename .env.example to .env and start the server. You will see that it is running on port 4000. Previously, it was running on port 3000.

Production mode
Command npm run start:prod will start the build (production mode). Terminate process and after this you will see the dist folder in the root directory.

Testing
Command npm run test run tests;

Technical requirements https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/crud-api/assignment.md
Cross-check criteria https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/crud-api/score.md
