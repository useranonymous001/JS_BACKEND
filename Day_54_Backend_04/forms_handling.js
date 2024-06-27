/*
    
    FORM HANDLING IN THE BACKEND 

        ..REQUIRED PACKAGES::
            1) Cookie Parser ==> npm i cookie-parser   (available in npm...hahah)
            2) Express (ofcourse)
            3) npm (are u kidding? )

 */

const express = require("express");
const app = express();
const port = 3000;

// sending data to the server
app.use(express.json()); // if the data is in json format

app.use(express.urlencoded({ extended: true })); // Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option

// my routes
app.get("/", (req, res) => {
  res.send("hello there ");
});

// error handling
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("interal server error occured");
});

// starting a server at port 3000
app.listen(port, (err) => {
  console.log(err ? err.message : "started localhost at 3000");
});
