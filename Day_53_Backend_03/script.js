/*

WHAT WILL WE LEARN HERE:    

    INTRODUCTION TO EXPRESS JS
        ==> It is one of the npm package
        ==> it is an framework
        ==> It handles everything from receiving requests to sending responses.

    2. SETTNG UP BASIC EXPRESS APPLICATION
    3. ROUTING
    4. MIDDLEWARE
    5. REQUEST AND RESPONSE HANDLING
    6. ERROR HANDLING
 */

// 2. SETTING UP A BASIC EXPRESS APPLIATION

/**
        NOTE: Once we start our server, we cannot see the frequent changes in our code everytinme we update our code. For that we need to close the server and restart again.

        To solve this issue: we can install nodemon to see the frequent changes in our code and also update the running server in the real time.

        - npm install nodemon -g (global install ==> no need to install again and again)
     */

// const express = require("express");
// const app = express();

// // Basic syntax
// // app.get(route, requestHandler)

// app.get("/", (req, res) => {
//   // rooutes to default page
//   res.send("hello world");
// });

// // we can create multiple routes by:

// app.get("/services", (req, res) => {
//   res.send("welcome to service page"); // this sends the response "data" when we visit the /service route
// });

// app.get("/blogs", (req, res) => {
//   res.send("welcome to my blog page");
// });

// // initializing a server on port 3000
// app.listen(3000);

/*
    MIDDLEWARE:   
        It's like how a proxy servers works. That means whenever the server accepts the requests it is then passed in to the middlewares before the request is handled by the routes. Therefore, middlewares are some objects that are kept between the routes and the server. Using middle wares we can make some changes or make program do something before handled by the routes.

 */

const express = require("express");
const app = express();

// MIDDLEWARE
app.use((req, res, next) => {
  console.log("yess go go ");
  next();
});

app.get("/", (req, res) => {
  res.send("hello welcome to my site");
});

app.get("/blog", (req, res, next) => {
  return next(new Error("this error message is sent by error handlres"));
});

// error handling
// error handlers must always be at the end of the code
// this is an default error handler in express.
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("something went wrong ");
});

app.listen(3000);
