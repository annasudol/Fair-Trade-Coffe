import React, { useState } from 'react';


function FarmDetail({ account, upc, product, methods }) {
  const [originFarmer, setOriginFarmer] =useState({id: '1', name: 'Farm', info: 'nothing', lat: '-38.239770', long: '144.341490' });
  const [error, setError]= useState(null);
  const [transactionConfirmation, setTransactionConfirmation]= useState(null);
 
  const handleClick=async (value)=> {

    switch (value) {
      case "harvest":
      methods.harvestItem(upc, account, originFarmer.name,  originFarmer.info, originFarmer.lat, originFarmer.long, product.name).send({from: account}, (err,res)=>{
          setError('Error with harvest item')
          setTransactionConfirmation(res)
        })
      break;
      case "process":
        methods.processItem(upc).send({from: account }).send({from: account}, (err,res)=>{
          setError('Error with process item')
          console.log('res',res)
          setTransactionConfirmation(res)
        })
      break;
      case "pack":
        methods.packItem(upc).send({from: account}, (err,res)=>{
          setError('Error with pack item')
          console.log('res',res)
          setTransactionConfirmation(res)
        });
      break;
      case "forsale":
        methods.sellItem(upc, product.price).send({from: account}, (err,res)=>{
          setError('Error with sell item')
          console.log('res',res)
          setTransactionConfirmation(res)
        });
      default:
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
