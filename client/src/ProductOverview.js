import React, { useState } from 'react';

function ProductOverview({ accounts, app }) {
  const [sku, setSku] =useState('');
  const [upc, setUpc] =useState('');
  const [ownerId, setOwnerId] =useState('')
  return (
    <div>
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
          <button className="btn-fetchOne" id="button" type="button" data-id="9">
            Fetch Data 1
          </button>
          <button className="btn-fetchTwo" id="button" type="button" data-id="10">
            Fetch Data 2
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductOverview;
