const fs = require("fs");
const path = require("path");

// fs.rename();
// fs.writeFile();
// fs.readFile();
// fs.unlink();
// fs.rm();
// fs.mkdir();
// fs.access(); // modes = constants.F_OK exists or not

const dirPath = path.join(__dirname, "directory");
fs.readdir(dirPath, (err, files) => {
  if (err) console.log(err.message);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);

    fs.readFile(filePath, "utf-8", (err, data) => {
      console.log(err ? err.message : data);
    });
  });
});
