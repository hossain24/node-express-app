var http = require("http");

// responding in JSON object
var server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "application/json" });
    var myObj = {
        "name": "Jason",
        "age": 20
    }
    res.end(JSON.stringify(myObj));
})

server.listen(3000, () => {
    console.log("You are connected to the server");
});