const fs = require("fs");

function readFileContent(filePath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    console.log("File content:", data);
  });
}

// Example usage:
readFileContent("file.txt");
