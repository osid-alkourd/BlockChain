
let database  =  require("./src/database");

database.onConnect(() =>{
let BlockChain = require("./src/BlockChain");
let blockChain = new BlockChain();

let hash = require('object-hash');

let PROOF = 1560;





if(proofOfWork() == PROOF){
    blockChain.addNewTransaction("osid" , "Alkourd" , 500);
    let prevHash = blockChain.lastBlock().hash ? blockChain.lastBlock().hash : null;
    blockChain.addNewBlock(prevHash);
}

console.log("Chain Is "  , blockChain.chain);

});