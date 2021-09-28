import React, { useState } from 'react';

function ProductDetails({ account, app, upc, product, setProduct }) {
  const [distributorId, setDistributor] =useState('0xd06d2Ba7A66F880122133556714281c4e511DF33');
  const [retailerId, setRetailerId] =useState('0x1c309018c95d6797Cc04af4a4fFA752Be51c808C');
  const handleClick=(value)=> {
    console.log(value, 'V', upc)
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
