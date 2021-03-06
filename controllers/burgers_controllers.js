// Set up requirements
var express = require("express");
var router = express.Router();

// Import the model to use its database functions
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res){
    burger.all(function(burger_data){
        console.log(burger_data);
        res.render("index", { burger_data } );
    });
});

router.post("api/burgers", function(req,res){

});

router.put("api/burgers/:id", function(req,res){

});

router.delete("api/burgers/:id", function(req,res){

});
// Export routes for server.js to use.
module.exports = router;