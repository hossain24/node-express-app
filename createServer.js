var http = require("http");
var fs = require("fs");

// creating the server with a plain text response

var server = http.createServer((req, res) => {
    console.log("Request was made: " + req.url);
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Hello World!");
});

// creating the server with a html response through the read stream

/* var server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    var htmlStreamTest = fs.createReadStream(__dirname + "/index.html");
    htmlStreamTest.pipe(res);
})  */

// creating the server with a text response through the read stream

/* var server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/plain" });
    var readStreamTest = fs.createReadStream(__dirname + "/readFile.txt");
    readStreamTest.pipe(res);
}) */

server.listen(3000, () => {
    console.log("You are connected to the server");
});