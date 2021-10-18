import React, { useState, useEffect } from 'react';
import SupplyChain from "./contracts/SupplyChain.json";
import getWeb3 from "./getWeb3";
import FarmDetail from "./components/FarmDetail.js";
import ProductDetails from "./components/ProductDetails.js";
import ProductOverview from "./components/ProductOverview.js";
import TransactionHistory from "./components/TransactionHistory.js";
import WhiIsAccount from "./components/WhoIsAccount";
import "./App.css";
import TruffleContract from 'truffle-contract'  

function App() {
  const [app, setApp] = useState({ web3: null, account: null, contract: null });

  const [upc, setUpc] =useState('1');
  const [product, setProduct] =useState({ name: "Best beans for Espresso", price: 10 });
  
  useEffect(() => {
    let web3 = window.web3;  
      if (typeof web3 !== 'undefined') {
        const provider = web3.currentProvider;
        let contract = TruffleContract(SupplyChain);
        contract.setProvider(provider);
        contract.deployed()
        .then((instance) =>console.log(instance, 'instance'));
     }
    async function fetchApp() {
      try {
        const web3 = await getWeb3();
        const accounts = await web3.eth.getAccounts();
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = SupplyChain.networks[networkId];
        const instance = new web3.eth.Contract(
          SupplyChain.abi,
          deployedNetwork && deployedNetwork.address,
        );

        setApp({ ...app, web3, account: accounts[0], contract: instance });
      } catch (e) {
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`,
        );
        console.error('Failed to load web3');
      }
    }
    fetchApp()
 }, [app.web3]);


  useEffect(()=> {
    window.ethereum.on('accountsChanged', function (accounts) {
      setApp({ ...app, account: accounts[0] });
    })
  }, []);



if (!app.web3) {
  return <div>Loading Web3, accounts, and contract...</div>;
}
const { account, contract } = app

return (
  <div className="App">
  
    <ProductOverview account={account} instance={contract} upc={upc} setUpc={setUpc} />
    <FarmDetail account={account} upc={upc} product={product} instance={contract} />
    <ProductDetails account={account} instance={contract} upc={upc} product={product} setProduct={setProduct} />
    <TransactionHistory account={account} instance={contract} upc={upc} />
    <WhiIsAccount account={account} instance={contract} upc={upc} product={product}/>
  </div>
);
  
}

export default App;
