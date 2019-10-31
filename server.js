// set up requirements
var express = require("express");
var expressHandlebars = require("express-handlebars");

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them
var routes = require("./controllers/burgers_controllers.js");
app.use(routes);

// Set up port
var PORT = process.env.PORT || 8080;
app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT)
});
