// importing modules using Common JS (CJS)
const { constants } = require("node:buffer");
const { error } = require("node:console");
const fs = require("node:fs");

// fs.writeFile("newFile.txt", " adding more file okeyy", (err) => {
//   if (err) throw console.error(err);
//   else console.log("succeesfully written" );
// });

// fs.appendFile("newFile.txt", " adding more file okeyy", (err) => {
//   if (err) throw console.error(err);
//   else console.log("succeesfully written");
// });

// fs.rename("newFile.txt", "renamedFile.txt", (err) => {
//   if (err) throw console.error(err);
//   else console.log("succeesfully written");
// });

// fs.writeFile("filename.txt", "data", (err) => {
//   if (err) throw console.error(err);
//   else console.log("successs fully written");
// });

// copying the file to the next file copyFile(src, dest, callback==> err)
// fs.copyFile("data.txt", "copiedData.txt", (err) => {
//   if (err) console.error(err.message);
//   else console.log("done");
// });

// let's delete the file using unlink(path, destination)
// fs.unlink("copiedData.txt", (err) => {
//   if (err) console.error(err.message);
//   else console.log("done");
// });

// fs.readFile("data.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   else console.log(data);
// });

// fs.readFile("data.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   else console.log(data);
// });

// removing a directory using fs.rmdir()

// fs.rmdir("./directory", { recursive: true }, (err) => {
//   if (err) throw err;
//   else console.log("removed");
// });

// Note: fs.rmdir will  be removed in the future so we need to use fs.rm instead
// fs.rm("./directory", { recursive: true }, (err) => {
//   if (err) throw err;
//   else console.log("removed");
// });

//

// using access to check the accessibiility of a file or any directory

const file = "package.json";

const callback = (err, message) => {
  console.log(`${file} ${err ? err : message}`);
};

// fs.access(file, constants.F_OK, (err) => {
//   console.log(`${file} ${err ? "does not exists" : "exists"}`);
// });

// fs.access(file, constants.R_OK, (err) => {
//   if (err) callback(err, null);
//   else callback(null, "Yes we can");
// });

// fs.access(file, constants.W_OK, (err) => {
//   if (err) callback(err, null);
//   else callback(null, "yes we can write too");
// });

// fs.access(file, constants.R_OK | constants.W_OK, (err) => {
//   if (err) callback(err, null);
//   else callback(null, " can be written and read too");
// });
