// Grab exported connection or importing database connection info
var connection = require("./connection.js")

var orm = {
    selectAll: function(tableInput, callBack) {
        connection.query("SELECT * FROM " + tableInput + ";", function(err, result){
            if(err) throw err;
            callBack(result);
        })
    },
    insertOne: function(tableInput, colToSearch, valOfCol) {
        // var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        // connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
        //   if (err) throw err;
        //   console.table(result);
        // });
    },
    updateOne: function(whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol) {
    //   var queryString = "SELECT ?? FROM ?? AS tOne";
    //   queryString += " LEFT JOIN ?? AS tTwo";
    //   queryString += " ON tOne.?? = tTwo.??";
  
    //   console.log(queryString);
  
    //   connection.query(queryString, [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol], function(
    //     err,
    //     result
    //   ) {
    //     if (err) throw err;
    //     console.log(result);
    //   });
    }
  
};

module.exports = orm;