/**

DYNAMIC ROUTING::
    ..how to get data coming from the frontend in the backend?
    
    ..setting up parsers for forms (see in the forms_handling.js) 

    ..setting up ejs for ejs pages

        ?? ==> EJS is just like an html where we create our webpages but the difference is we can perform 
        mathematical calculations and much more in ejs. You can think of it as advanced html.
    
        :: INSTALL EJS ==> npm i ejs
        :: setup EJS as view engine
    
        ..setting up public static files



// PROCESS INITIALIZATION
    -- npm init -y
    -- npm install express (already installed)


NOTE: for running this code go to the package.json file and edit the main key and write the name of the file you want to run.

*/

const express = require("express");
const app = express();
const path = require("path");

// setting up parsers for forms
// middlewars
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// setting up public files(htmln css and javascripts)
// for that we need to create a public folder in a root level and need to create it subdirectories for js, css,etc
app.use(express.static(path.join(__dirname, "public")));

// setting up view engine using ejs
app.set("view engine", "ejs");

// routes
app.get("/", (req, res) => {
  res.render("index");
});

//dynamic routes
app.get("/profile/:username/:id", (req, res) => {
  res.send(req.params.username + " " + req.params.id);
});
//req.params ==> will get the value of parameters like username and id in object form

app.get("/store/:brand/:model", (req, res) => {
  res.send(`Laptop Name = ${req.params.brand}  \n Model = ${req.params.model}`);
});

// server starting
app.listen(3000, () => {
  console.log("my server running at 3000");
});
