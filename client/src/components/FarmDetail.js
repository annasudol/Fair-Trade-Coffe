import React, { useState } from 'react';

function FarmDetail({ account, contract, upc, product }) {
  const [originFarmer, setOriginFarmer] =useState({id: '1', name: 'Farm', info: '', lat: '-38.239770', long: '144.341490' });
  const [error, setError]= useState(null);
  const [transactionConfirmation, setTransactionConfirmation]= useState(null);

  const handleClick=async (value)=> {
    switch (value)
    {
      case "harvest":
        contract.harvestItem(upc, account, originFarmer.name,  originFarmer.info, originFarmer.lat, originFarmer.long, product.name)
        .send({from: account }).then(res=> setTransactionConfirmation({ transaction: 'harvest', from: res.from, to: res.to, transactionHash: res.transactionHash }) )
        .catch((err=> setError(err.message)));
      break;

      case "process":
        contract.processItem(upc).send({from: account })
        .then(res=> setTransactionConfirmation({ transaction: 'processed', from: res.from, to: res.to, transactionHash: res.transactionHash }) )
        .catch((err=> setError(err.message)));
      break;
      case "pack":
        contract.packItem(upc).send({from: account })
        .then(res=> setTransactionConfirmation({ transaction: 'packed', from: res.from, to: res.to, transactionHash: res.transactionHash }) )
        .catch((err=> setError(err.message)));
      break;
      case "forsale":
        contract.sellItem(upc, product.price).send({from: account })
        .then(res=> setTransactionConfirmation({ transaction: 'packed', from: res.from, to: res.to, transactionHash: res.transactionHash }) )
        .catch((err=> setError(err.message)));

      default:
          alert('Default case');
          break;
    }
  }


  return (
    <div className="box">
      <h2>Farm Details</h2>
      {transactionConfirmation && 
      <><p className="conf"> Transaction {transactionConfirmation.transaction} confirmed</p>
        <p className="conf">From: {transactionConfirmation.from}</p>
        <p className="conf">To: {transactionConfirmation.to}</p>
        <p className="conf">TransactionHash: {transactionConfirmation.transactionHash}</p>
      </>
      }
      { error && <p className="error">{error}</p> }

      <div className="form-group">
        Farmer ID
        <br />
        <input type="text" onChange={(e)=> setOriginFarmer({...originFarmer, id: e.target.value})} value={originFarmer.id}  size="50" />
        <br />
        Farm Name
        <br />
        <input type="text" onChange={(e)=> setOriginFarmer({...originFarmer, name: e.target.value})} value={originFarmer.name} />
        <br />
        Farm Information
        <br />
        <input type="text" onChange={(e)=> setOriginFarmer({...originFarmer, info: e.target.value})} value={originFarmer.info} />
        <br />
        Farm Latitude
        <br />
        <input type="text" onChange={(e)=> setOriginFarmer({...originFarmer, lat: e.target.value})} value={originFarmer.lat} />
        <br />
        Farm Longitude
        <br />
        <input type="text" onChange={(e)=> setOriginFarmer({...originFarmer, long: e.target.value})} value={originFarmer.long} />
        <br />
        <br />
        <button className="btn-harvest" id="button" type="button" onClick={()=> handleClick('harvest')}>
          Harvest
        </button>
        <button className="btn-process" id="button" type="button" onClick={()=> handleClick('process')}>
          Process
        </button>
        <button className="btn-pack" id="button" type="button" onClick={()=> handleClick('pack')}>
          Pack
        </button>
        <button className="btn-forsale" id="button" type="button" onClick={()=> handleClick('forsale')}>
          ForSale
        </button>
      </div>
    </div>
  );
}

export default FarmDetail;
