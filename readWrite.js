var fs = require("fs");

fs.readFile("readFile.txt", "utf8", function (err, data) {
    fs.writeFile("writeMe.txt", data);
});

