import React, { useState, useEffect } from 'react';

import getWeb3 from './getWeb3';
import './App.css';
import FarmDetail from './FarmDetail.js';
import ProductDetails from './ProductDetails.js';
import TransactionHistory from './TransactionHistory.js';
import ProductOverview from './ProductOverview.js';

function App() {
  const [app, setApp] = useState({ web3: null, accounts: null, contract: null });

  useEffect(() => {
    async function fetchApp() {
      try {
        const web3 = await getWeb3();
        const accounts = await web3.eth.getAccounts();
        const networkId = await web3.eth.net.getId();
        console.log(web3, accounts, networkId, "zzz")
        // const deployedNetwork = StarNotary.networks[networkId];
        // const instance = new web3.eth.Contract(deployedNetwork && deployedNetwork.address);
        // setApp({ web3, accounts, contract: instance.methods });
      } catch (e) {
        alert(`Failed to load web3, accounts, or contract. Check console for details.`);
        console.error('Failed to load web3');
      }
    }

    fetchApp();
  }, []);

  // if (!app.web3) {
  //   return <div>Loading Web3, accounts, and contract...</div>;
  // }
  const { accounts, contract } = app;
  return (
    <div className="App">
      <div className="container">
        <h1>Fair Trade Coffee</h1>
        <hr />
        <p>Prove the authenticity of coffee using the Ethereum blockchain.</p>
        <ProductOverview app={accounts} />
        <FarmDetail app={accounts} />
        <ProductDetails app={accounts} />
        <TransactionHistory app={accounts} />
      </div>
    </div>
  );
}

export default App;
