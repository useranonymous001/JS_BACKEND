// file systems
// express
// req and responses
// routes
// middlewares
// error handling

// 1. File Organizer

const { dir } = require("console");
const fs = require("fs-extra");
const path = require("path");

// how to get he file extenstion of any file

// const directoryPath = "./directory";

// const organizeFileByExtenstion = (dirPath) => {
//   // read the files in a directory
//   fs.readdir(dirPath, (err, files) => {
//     if (err) {
//       console.error(err.message);
//       return;
//     }
//     // create sub directories based on the extenstion

//     files.forEach((file) => {
//       const filePath = path.join(dirPath, file);

//       if (fs.lstatSync(filePath).isFile) {
//         const fileExtension = path.extname(file).slice(1);
//         const targetDir = path.join(dirPath, `${fileExtension}_files`);

//         if (!fs.existsSync(targetDir)) {
//           fs.mkdirSync(targetDir);
//         }

//         // move files to the appropriate directory
//         const targetPath = path.join(targetDir, file);

//         fs.rename(filePath, targetPath, (err) => {
//           if (err) {
//             console.log("error moving files");
//             return;
//           }
//           console.log(`moved ${file} to ${targetDir}`);
//         });
//       }
//     });
//   });
// };

// organizeFileByExtenstion(directoryPath);

// program organize the files
