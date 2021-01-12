// Dependencies
var express = require("express");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Create express app instance.
var app = express();

app.use(express.static("public"));

// parse
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Routes
var routes = require("./controllers/burgers_Controller.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("App is listening at localhost: " + PORT);
});
