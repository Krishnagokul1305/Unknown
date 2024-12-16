const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const compileCode = (cCode) => {
  return new Promise((resolve, reject) => {
    const filePath = path.join(__dirname, "temp.c");
    fs.writeFileSync(filePath, cCode);

    const outputFilePath = path.join(__dirname, "temp.out");

    exec(`gcc "${filePath}" -o "${outputFilePath}"`, (err, stdout, stderr) => {
      if (err) {
        reject(`Error compiling code: ${stderr}`);
        return;
      }

      exec(`"${outputFilePath}"`, (err, stdout, stderr) => {
        if (err) {
          reject(`Error running compiled code: ${stderr}`);
          return;
        }

        fs.unlinkSync(filePath);
        fs.unlinkSync(outputFilePath);

        resolve(stdout);
      });
    });
  });
};

module.exports = compileCode;
