var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set("view engine", "ejs");

app.use("/styles", express.static("styles"));

// setting up some routes 
app.get("/", (req, res) => {
    // res.send("Hello World!");
    // res.sendFile(__dirname + "/index.html");
    res.render("index");
});

app.get("/about", (req, res) => {
    // res.send("Another Hello World!");
    // res.sendFile(__dirname + "/about.html");
    res.render("about");
});

app.get("/contact", (req, res) => {
    console.log(req.query);
    // localhost:3000/contact?name=GreenHill&color=Green
    res.render("contact", { qs: req.query });
});

app.post("/contact", urlencodedParser, (req, res) => {
    console.log(req.body);
    res.render("contact-success", { data: req.body });
})

app.get("/hill/:name", (req, res) => {
    var hills = { name: "Green Hill", colors: ["Green", "Grey", "Red"] }
    res.render("hill", { hill: req.params.name, hills: hills });
});

/* 
// setting up some route parameters
app.get("/hills/id/:id", (req, res) => {
    res.send("You have entered the hill's ID is: " + req.params.id);
});

app.get("/hills/name/:name", (req, res) => {
    res.send("You have entered the hill's name is: " + req.params.name);
}); 
*/

app.listen(3000, () => {
    console.log("You are connected to the server");
});