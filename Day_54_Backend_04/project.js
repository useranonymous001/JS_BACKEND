// express
// path
// middleware::
// ejs, form handlers, dynamic routes

const fs = require("fs");
const express = require("express");
const app = express();
const path = require("path");
const port = 4000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  fs.readdir("./tasks", (err, files) => {
    res.render("index", { files: files });
  });
});

app.post("/create", (req, res) => {
  fs.writeFile(
    `./tasks/${req.body.title.split(" ").join("_")}.txt`,
    req.body.details,
    (err) => {
      console.log(err);
    }
  );
  res.redirect("/");
});

app.get("/yourTask/:filename", (req, res) => {
  fs.readFile(`./tasks/${req.params.filename}`, "utf-8", (err, data) => {
    res.render("notes", {
      data: data,
      title: req.params.filename.slice(0, req.params.filename.length - 4),
    });
  });
});

app.get("/edit/:taskname", (req, res) => {
  res.render("edit", { taskname: req.params.taskname });
});

app.post("/edit", (req, res) => {
  fs.rename(
    `./tasks/${req.body.oldname}`,
    `./tasks/${req.body.newname.split(" ").join("_")}.txt`,
    (err) => {
      console.log(err ? err.message : "file name renamed");
    }
  );
  res.redirect("/");
});

app.get(`/editData/:taskdetails`, (req, res) => {
  fs.readFile(`./tasks/${req.params.taskdetails}.txt`, "utf-8", (err, data) => {
    res.render("editData", {
      taskdata: data,
      taskname: `${req.params.taskdetails}.txt`,
    });
  });
});

app.post("/editData", (req, res) => {
  fs.writeFile(`./tasks/${req.body.taskname}`, req.body.details, (err) => {
    console.log(err ? err.message : ` data updated to ${req.body.taskname}`);
  });
  res.redirect("/");
});

app.use((err, req, res, next) => {
  // console.log(err.stack);
  res.status(500).send("internal server error");
});

app.listen(port, (err) => {
  console.log(err ? err.message : `server created at ${port}`);
});
