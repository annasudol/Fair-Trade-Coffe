import React, { useState, useEffect } from 'react';
import SupplyChain from "../contracts/SupplyChain.json"
import getWeb3 from "../getWeb3";
import FarmDetail from "../components/FarmDetail.js";
import ProductDetails from "../components/ProductDetails.js";
import ProductOverview from "../components/ProductOverview.js";
import TransactionHistory from "../components/TransactionHistory.js";
import AddRole from "../components/AddRole";

import styles from '../styles/Home.module.css';

export default function Home() {
  const [app, setApp] = useState({ web3: null, account: null, contract: null });

  const [upc, setUpc] =useState('1');
  const [product, setProduct] =useState({ name: "Best beans for Espresso", price: 10 });

  useEffect(() => {
    async function fetchApp() {
      try {
        const web3 = await getWeb3();
        const accounts = await web3.eth.getAccounts();

        const deployedNetworkAddress = '0x23e2b13b08a22e9eee431f862ec7a17ab1e99b98'
        const instance = new web3.eth.Contract(
          SupplyChain.abi,
          deployedNetworkAddress,
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
 }, [app, app.web3]);


  useEffect(()=> {
    window.ethereum.on('accountsChanged', function (accounts) {
      setApp({ ...app, account: accounts[0] });
    });
  }, [app]);




if (!app.web3) {
  return <div>Loading Web3, accounts, and contract...</div>;
}
const { account, contract } = app

return (
  <div className={styles.App}>
    <TransactionHistory account={account} contract={contract} upc={upc} />
    <AddRole account={account} methods={contract.methods} />
    <ProductOverview methods={contract.methods} contract={contract} upc={upc} setUpc={setUpc} />
    <FarmDetail account={account} upc={upc} product={product} instance={contract} />
    <ProductDetails account={account} methods={contract.methods} upc={upc} product={product} setProduct={setProduct} />
  </div>
);
}
