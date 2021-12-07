let HDWalletProvider = require("truffle-hdwallet-provider");
const path = require("path");

//require('dotenv').config();
let privateKey = process.env.PRIVATE_KEY;

module.exports = {
  contracts_build_directory: path.join(__dirname, "./client/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "1337" ,// Match any network id,

      gas: 4500000,
      gasPrice: 10000000000
    },
    rinkeby: {
        provider: function() { 
         return new HDWalletProvider(privateKey, "https://rinkeby.infura.io/v3/04089ba43dd24561a92d96351247155f");
        },
        network_id: 4,
        gas: 4500000,
        gasPrice: 10000000000
    }
   }
,
  compilers: {
    solc: {
      version: '^0.4.23',
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
};