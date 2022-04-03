let hash = require('object-hash');
const TARGET_HASH = 1156;

let validator = require('./validator');


let mongoose = require("mongoose");
let blockChainModel = mongoose.model("BlockChain")

let chalk = require("chalk"); 
class BlockChain{

    constructor(){
        this.chain = [];
        this.current_transaction =[];
    }


    addNewBlock(prevHash){
       let block = {
           index: this.chain.length + 1 , 
           timestamp : Date.now() , 
           transaction : this.current_transaction , 
           prevHash : prevHash
       } ;

       if(validator.proofOfWork() == TARGET_HASH ){
          block.hash = hash(block);
          let newBlock = new blockChainModel(this.block);
          newBlock.save((err) => {
              if(err) return console.log(chalk.red("Cannot Save Message to DB" , err.message));
              console.log(chalk.green("Blocked Saved To Database"));
          });
             // Add To Chain
          this.chain.push(block);
          this.current_transaction = [];
          return block;
       }
      
      

    }
    addNewTransaction(sender , recipient , amount){
        this.current_transaction.push({sender , recipient , amount});
    }

    lastBlock(){
        return this.chain.slice(-1)[0];
    }

    isEmpty(){
        return this.chain.length == 0;
    }

}

module.exports = BlockChain;