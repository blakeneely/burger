// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm");

var burger = {
// Call selectAll()
    all: function(callBack){
        orm.selectAll("burgers", function(res){
            callBack(res);
        })
    }
// Call insertOne();

// Call updateOne();

// export burger
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;



