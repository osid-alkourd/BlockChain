
let mongoose = require("mongoose");
let Schema = mongoose.Schema;

// Create The BlockChain Schema

let BlockChainSchema = new Schema({
    index: {
        required: true  , 
        type: Schema.Types.Number
    } , 

    timestamp: {
        required: true  , 
        type: Schema.Types.Date , 
        default: Date.now() 
    } , 

    transaction: {
        required: true , 
        type: Schema.Types.Array ,   
    } , 

    prevHash: {
        required: false , 
        type: Schema.Types.String , 
    } , 

    hash: {
        required: true , 
        type: Schema.Types.String , 
    } ,

});

module.exports = mongoose.model("BlockChain" ,BlockChainSchema );
