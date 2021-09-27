import React, { useState, useEffect } from 'react';
import SupplyChain from "./contracts/SupplyChain.json";

import getWeb3 from "./getWeb3";

import "./App.css";
import FarmDetail from "./components/FarmDetail.js";
import ProductDetails from "./components/ProductDetails.js";
import ProductOverview from "./components/ProductOverview.js";
import TransactionHistory from "./components/TransactionHistory.js";

function App() {
  const [app, setApp] = useState({ web3: null, accounts: null, contract: null });

  useEffect(() => {
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
        console.log(instance.methods, 'contract')

        setApp({ web3, accounts, contract: instance.methods });
      } catch (e) {
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`,
        );
        console.error('Failed to load web3');
      }
    }
    fetchApp()
}, []);


if (!app.web3) {
  return <div>Loading Web3, accounts, and contract...</div>;
}
const { accounts, contract } = app
return (
  <div className="App">
    <ProductOverview accounts={accounts} contract={contract} />
    <FarmDetail accounts={accounts} contract={contract} />
    <ProductDetails accounts={accounts} contract={contract} />
    <TransactionHistory accounts={accounts} contract={contract} />
  </div>
);
  
}

export default App;
