var fs = require("fs");

var readStreamTest = fs.createReadStream(__dirname + "/readFile.txt");

readStreamTest.on("data", (chunk) => {
    console.log("A chunk of data received: ");
    console.log(chunk);
});

