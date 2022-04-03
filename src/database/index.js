let mongoose = require("mongoose");
let BlockChainModel = require("./model");

// connect to database

mongoose.connect("mongodb:://localhost:2701/blockChain" , (err) =>{
  
    if(err)
        return console.log("Cannot Connect To Data Base");
        console.log("Datebase Is Connected");
        connectionCallback();
});

let connectionCallback = () => {};

module.exports.onConnect =  (callback) => {
    connectionCallback = callback;
}
