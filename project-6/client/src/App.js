import React, { useState, useEffect } from 'react';
import SupplyChain from "../../build/contracts/SupplyChain.json";
import getWeb3 from "./getWeb3";
import "./App.css";
import FarmDetail from "./components/FarmDetail.js";
import ProductDetails from "./components/ProductDetails.js";
import ProductOverview from "./components/ProductOverview.js";
import TransactionHistory from "./components/TransactionHistory.js";

function App() {
  const [app, setApp] = useState({ web3: null, account: null, contract: null });
  const [upc, setUpc] =useState('1');
  const [product, setProduct] =useState({ name: "Best beans for Espresso", price: 10 });

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
        setApp({ web3, account: accounts[0], contract: instance.methods });
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
const { account, contract } = app
return (
  <div className="App">
    <ProductOverview account={account} contract={contract} upc={upc} setUpc={setUpc} />
    <FarmDetail account={account} contract={contract} upc={upc} product={product} />
    <ProductDetails account={account} contract={contract} upc={upc} product={product} setProduct={setProduct} />
    <TransactionHistory account={account} contract={contract} upc={upc} />
  </div>
);
  
}

export default App;
