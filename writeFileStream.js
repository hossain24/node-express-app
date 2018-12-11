var http = require("http");
var fs = require("fs");

var readFileTest = fs.createReadStream(__dirname + "/readFile.txt", "utf8");
var writeFileTest = fs.createWriteStream(__dirname + "/writeFile.txt");

readFileTest.on("data", (chunk) => {
    console.log("This chunk of data is received: ");
    writeFileTest.write(chunk);
})