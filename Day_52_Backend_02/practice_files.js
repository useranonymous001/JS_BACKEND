const { constants } = require("buffer");
const { error } = require("console");
const { create } = require("domain");
const fs = require("fs");
const path = require("path");

/*

    FILES OPERATIONS

*/

// const contents = "Hey, my name is rohan khatri";
// fs.writeFile("./directory/remove_me", contents, (err) => {
//   console.log(err ? err.message : "written");
// });

// // fs.readFile();
// fs.readFile("./directory/remove_me", "utf8", (err, data) => {
//   console.log(err ? err.message : data);
// });

// // fs.appendFile();
// fs.appendFile("./directory/remove_me", " this is appended", (err) => {
//   console.log(err ? err.message : "done");
// });

// // fs.access();
// fs.access("./directory/remove_me", constants.R_OK | constants.W_OK, (err) => {
//   console.log(err ? err.message : "yes we can ");
// });

// // fs.unlink();
// fs.unlink("/directory/remove_me", (err) => {
//   console.log(err ? err.message : "removed");
// });

// // fs.rm();
// fs.rm("./directory", { recursive: true }, (e) => {
//   console.log(e ? e.message : "remved dir");
// });

// // fs.copyFile();
// fs.copyFile("./data.txt", "copiedData", (err) => {
//   console.log(err ? err.message : "succesfully copied");
// });

/*

DIRECTORY OPERATIONS

 */

// directory creation using fs.mkdir(path, mode, callback)

// fs.mkdir("./directory", { recursive: true }, (err) => {
//   console.log(err ? err.message : "created successfully");
// });

// fs.writeFile("./directory/files1", "some content here", (err) => {
//   console.log(err ? err.message : "done");
// });
// fs.writeFile("./directory/files2", "some content here", (err) => {
//   console.log(err ? err.message : "done");
// });
// fs.writeFile("./directory/files3", "some content here", (err) => {
//   console.log(err ? err.message : "done");
// });
// fs.writeFile("./directory/files4", "some content here", (err) => {
//   console.log(err ? err.message : "done");
// });

// listing all the files in a directories

// fs.readdir(path, (err, files)) ==> it returns the files present inside the directory in the form of an array.

// fs.readdir("./directory", (err, files) => {
//   console.log(err ? err.message : files);
// });

// alternative way of reading a directory

// const dirPath = path.join(__dirname, "directory");
// fs.readdir(dirPath, (err, files) => {
//   if (err) return err.message;

//   files.forEach((file) => {
//     const filePath = path.join(dirPath, file);
//     fs.readFile(filePath, "utf-8", (err, data) => {
//       if (err) return err.message;
//       console.log(data);
//     });
//   });
// });

// 3. File Information:

// Write a Node.js script to get and log the details (size, creation date, etc.) of a file.

// Write a Node.js script to check if a file or directory exists.

fs.access("./directory", constants.F_OK, (err) => {
  console.log(err ? err.message : "exists");
});
