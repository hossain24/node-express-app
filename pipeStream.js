var http = require("http");
var fs = require("fs");

var pipeStreamRead = fs.createReadStream(__dirname + "/readFile.txt");
var pipeStreamWrite = fs.createWriteStream(__dirname + "/writeFile.txt");

pipeStreamRead.pipe(pipeStreamWrite);

/* var server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/plain" });
    var readStreamTest = fs.createReadStream(__dirname + "/readFile.txt");
    readStreamTest.pipe(res);
}) */