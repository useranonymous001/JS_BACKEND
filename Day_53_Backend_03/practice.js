// file systems
// express
// req and responses
// routes
// middlewares
// error handling

const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("go to her ");
  next();
});

app.get("/", (req, res) => {
  res.send("WELCOME TO MY HOME PAGE");
});

// error handling in express (this is default error handling)
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("internal server error occured ");
});

app.listen(3000);
