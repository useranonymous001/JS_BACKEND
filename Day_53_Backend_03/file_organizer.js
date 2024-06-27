// FILE ORGANIZER

// change the directory path according to your systems
// required modules :
// npm i fs

// modules requires
const fs = require("fs");
const path = require("path");

//steps

// read the directory contents
const fileOrganizer = () => {
  const parentDirectory = "./directory_containing_files"; // enter your own

  fs.readdir(parentDirectory, (err, files) => {
    if (err) {
      console.error(
        "some error occured while reading the directory",
        err.message
      );
      return;
    }
    // create each sub-directory for each file  extentsions

    files.forEach((file) => {
      const filePath = path.join(parentDirectory, file);
      if (fs.lstatSync(filePath).isFile()) {
        const fileExtension = path.extname(file).slice(1);
        const destDir = path.join(parentDirectory, `${fileExtension}_files`);

        if (!fs.existsSync(destDir)) {
          fs.mkdir(destDir);
        }

        // move the files to the respective sub-directory

        const destFilePath = path.join(destDir, file);
        fs.rename(filePath, destFilePath, (err) => {
          if (err) {
            console.error("error moving files ", err.message);
          }
          console.log(`moved ${file} to ${destDir}`);
        });
      }
    });
  });
};

fileOrganizer();
