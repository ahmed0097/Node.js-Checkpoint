const fs = require("fs");
var path = require("path");
var ex = "." + process.argv[3];
var content = fs.readdir(process.argv[2], function (err, list) {
  if (err) {
    console.log("Error");
  }
  list.forEach(function (file) {
    if (path.extname(file) == ex) {
      console.log(file);
    }
  });
});
