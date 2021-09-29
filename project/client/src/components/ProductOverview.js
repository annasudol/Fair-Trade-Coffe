import React, { useState } from 'react';

function ProductOverview({ account, contract, upc, setUpc }) {
  const [sku, setSku] =useState('1');
  const [ownerId, setOwnerId] =useState('0x627306090abab3a6e1400e9345bc60c78a8bef57');
  const [error, setError]= useState(null);

  const handleClick=(value)=> {
    switch (value)
    {
      case 1:
        contract.fetchItemBufferOne(upc).call()
        .then(res=> console.log(res, 'res') )
        .catch((err=> setError(err.message)));
      break;
      case 2:
        contract.fetchItemBufferTwo(upc).call()
        .then(res=> console.log(res, 'res') )
        .catch((err=> setError(err.message)));
      default:
      break;
    }
  }
  return (
    <div className="box">
      <h2>Product Overview</h2>
      <div className="form-group">
        SKU
        <br />
        <input className="input-field" type="number" onChange={(e)=> setSku(e.target.value)} value={sku} />
        <br />
        UPC
        <br />
        <input type="number" onChange={(e)=> setUpc(e.target.value)} value={upc} />
        <br />
        Current Owner ID
        <br />
        <input type="text" onChange={(e)=> setOwnerId(e.target.value)} value={ownerId}  size="50" />
        <br />
        <div>
          <button className="btn-fetchOne" id="button" type="button" onClick={()=> handleClick(1)} >
            Fetch Data 1
          </button>
          <button className="btn-fetchTwo" id="button" type="button" data-id="10" onClick={()=> handleClick(2)}>
            Fetch Data 2
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductOverview;
