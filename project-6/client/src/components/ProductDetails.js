import React, { useState } from 'react';
import Web3 from "web3";

function ProductDetails({ account, instance, upc, product, setProduct }) {
  const [distributorId, setDistributor] =useState('0xd06d2Ba7A66F880122133556714281c4e511DF33');
  const [retailerId, setRetailerId] =useState('0x1c309018c95d6797Cc04af4a4fFA752Be51c808C');
  const [error, setError]= useState(null);
  const [transactionConfirmation, setTransactionConfirmation]= useState(null);
  console.log(instance)
  const handleClick=async (value)=> {
    switch (value)
    {
      case "buy":
        instance.buyItem(upc).send({from: account, value: 1 })
        .then(res=> setTransactionConfirmation({ transaction: value, from: res.from, to: res.to, transactionHash: res.transactionHash }) )
        .catch((err=> setError(err.message)));
      break;
      case "ship":
        instance.shipItem(upc).send({from: account })
        .then(res=> setTransactionConfirmation({ transaction: value, from: res.from, to: res.to, transactionHash: res.transactionHash }) )
        .catch((err=> setError(err.message)));
      break;
      case "receive":
        instance.receiveItem(upc).send({from: account })
        .then(res=> setTransactionConfirmation({ transaction: value, from: res.from, to: res.to, transactionHash: res.transactionHash }) )
        .catch((err=> setError(err.message)));
      break;
      case "purchase":
        instance.purchaseItem(upc).send({from: account })
        .then(res=> setTransactionConfirmation({ transaction: value, from: res.from, to: res.to, transactionHash: res.transactionHash }) )
        .catch((err=> setError(err.message)));
      break
      default:
      break;
    }
  }
  return (
    <div className="box">
      <h2>Product Details</h2>
      {transactionConfirmation && 
      <><p className="conf"> Transaction {transactionConfirmation.transaction} confirmed</p>
        <p className="conf">From: {transactionConfirmation.from}</p>
        <p className="conf">To: {transactionConfirmation.to}</p>
        <p className="conf">TransactionHash: {transactionConfirmation.transactionHash}</p>
      </>
      }
      { error && <p className="error">{error}</p> }
      <div className="form-group">
        Product Notes
        <br />
        <input type="text" value={product.name} size="60" onChange={(e)=> setProduct({name: e.target.value})} />
        <br />
        Product Price
        <br />
        <input type="number" value={product.price} onChange={(e)=> setProduct({price: e.target.value})} />
        ETH
        <br />
        Distributor ID
        <br />
        <input type="text" value={distributorId} onChange={(e)=> setDistributor(e.target.value)} size="50" />
        <br />
        Retailer ID
        <br />
        <input type="text" value={retailerId} onChange={(e)=> setRetailerId(e.target.value)} size="50" />
        <br />
        <button className="btn-buy" type="button" onClick={()=> handleClick('buy')}>
          Buy
        </button>
        <button className="btn-ship" type="button" onClick={()=> handleClick('ship')}>
          Ship
        </button>
        <button className="btn-receive" type="button" onClick={()=> handleClick('receive')}>
          Receive
        </button>
        <button className="btn-purchase" type="button" onClick={()=> handleClick('purchase')}>
          Purchase
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
