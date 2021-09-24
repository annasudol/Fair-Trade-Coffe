import React, { useState } from 'react';

function ProductDetails({ accounts, app }) {
  const [product, setProduct] =useState({ name: "Best beans for Espresso", price: 0 })
  const [distributorId, setDistributor] =useState('')
  const [retailerId, setRetailerId] =useState('')

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
        <input type="number" onChange={(e)=> setProduct({price: e.target.value})} />
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
        <button className="btn-buy" type="button">
          Buy
        </button>
        <button className="btn-ship" type="button">
          Ship
        </button>
        <button className="btn-receive" type="button">
          Receive
        </button>
        <button className="btn-purchase" type="button">
          Purchase
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
