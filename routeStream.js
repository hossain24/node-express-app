var http = require("http");
var fs = require("fs");

// setting up the routes to stream
var server = http.createServer((req, res) => {
    if (req.url === "/home" || req.url === "/") {
        res.writeHead(200, { "content-type": "text/html" });
        fs.createReadStream(__dirname + "/index.html").pipe(res);
    } else if (req.url === "/about") {
        res.writeHead(200, { "content-type": "text/html" });
        fs.createReadStream(__dirname + "/about.html").pipe(res);
    } else if (req.url === "/api/hills") {
        res.writeHead(200, { "content-type": "application/json" });

        var hills = [
            { "Name": "Green Hill", "Color": "Green" },
            { "Name": "Grey Hill", "Color": "Grey" }
        ]

        res.end(JSON.stringify(hills));
    } else {
        res.writeHead(404, { "content-type": "text/html" });
        fs.createReadStream(__dirname + "/notFound.html").pipe(res);
    }

})

server.listen(3000, () => {
    console.log("You are connected to the server");
});