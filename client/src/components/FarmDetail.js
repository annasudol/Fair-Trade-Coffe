import React, { useState } from 'react';

function FarmDetail({ accounts, contract }) {
  const [originFarmer, setOriginFarmer] =useState({id: '', name: '', info: '', lat: '-38.239770', long: '144.341490' });
  const handleClick=(value)=> {
    console.log(value, 'V')
  }
  return (
    <div className="box">
      <h2>Farm Details</h2>
      <div className="form-group">
        Farmer ID
        <br />
        <input type="text" onChange={(e)=> setOriginFarmer({id: e.target.value})} value={originFarmer.id}  size="50" />
        <br />
        Farm Name
        <br />
        <input type="text" onChange={(e)=> setOriginFarmer({name: e.target.value})} value={originFarmer.name} />
        <br />
        Farm Information
        <br />
        <input type="text" onChange={(e)=> setOriginFarmer({info: e.target.value})} value={originFarmer.info} />
        <br />
        Farm Latitude
        <br />
        <input type="text" onChange={(e)=> setOriginFarmer({lat: e.target.value})} value={originFarmer.lat} />
        <br />
        Farm Longitude
        <br />
        <input type="text" onChange={(e)=> setOriginFarmer({long: e.target.value})} value={originFarmer.long} />
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
