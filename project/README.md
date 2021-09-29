# StarNotary Contract Token
This is project 2 for the Udacity Blockchain Nano Degree program. 
The project involve modifying the StarNotary contract to achieve the following:

(1) Adding a name and a symbol for the starNotary token.
(2) Adding a function that looking up the stars using the Token ID, and then returning the name of the star.
(3) Adding a function called "exchangeStars" so that 2 users can exchange their star tokens.
(4) Adding a function for transferring a Star from the address of the caller. This function accepts 2 arguments, the address to transfer the star to and the token ID of the star.
(5) Update mocha unit tests
(6) Deploying the contract to the Rinkeby test network and on the local network
(7) Modifying the front end of the DAPP


# Deploying this DAPP locally
(1) Add to local network to Metamask with url: http://127.0.0.1:9545 and Chain ID: 1337
(2) Navigate to the project folder and run truffle develop or sudo truffle develop
(3) Run compile
(4) Run migrate --reset
(5) Open a second terminal window
(6) Run cd client
(7) Run npm install
(8) Run npm start
(9) Open http://localhost:3000
(10) Add at least two acconts to MetaMAsk using Private Keys, that was provided in terminal after delopoying the contract


# Deploying the contract on the Rinkeby Test network
(1) Add to .env file seed phase from your Metamask
(2) Set rinkeby network on your Metamask
(3) Run truffle migrate --reset --network rinkeby
(4) Open a second terminal window
(5) Run cd client
(6) Run npm install
(7) Run npm start
(8) Open http://localhost:3000


### Versions
(1) Truffle v5.3.8
(2) openzeppelin-solidity 2.3.0
(2) ERC-721 Token Name: Anna Super Star
(3) ERC-721 Token Symbol: ASS
(4) Project ID on the Rinkeby Test Network: '443eb53cf6f346a3b65cc4d97867a33c'