const fs = require("fs");
const parse = require("csv-parse");

// Specify the path of the CSV file
const path = "../assets/data/xlsx/amenia-energy.csv";

// Create a read stream
// Parse options: delimiter and start from line 1

const parser = parse({ delimiter: ",", from_line: 1 });

// Create a readable stream from the CSV file
const fileStream = fs.createReadStream(path);

fileStream
  .pipe(parser)
  .on("data", function (row) {
    // Executed for each row of data
    console.log(row);
  })
  .on("error", function (error) {
    // Handle errors
    console.error("Error reading CSV:", error.message);
  })
  .on("end", function () {
    // Executed when parsing is complete
    console.log("File read successful");
  });
