import React, { useState } from 'react';

function ProductDetails({ accounts, app }) {
  const [product, setProduct] =useState({ name: "Best beans for Espresso", price: 10 });
  const [distributorId, setDistributor] =useState('0xc5fdf4076b8f3a5357c5e395ab970b5b54098fef');
  const [retailerId, setRetailerId] =useState('0xf17f52151ebef6c7334fad080c5704d77216b732');
  const handleClick=(value)=> {
    console.log(value, 'V')
  }
  return (
    <div className="box">
      <h2>Product Details</h2>
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
