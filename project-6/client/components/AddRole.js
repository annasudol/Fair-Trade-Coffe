import React, { useState, useEffect} from 'react';
import findRole from "../utils/findRole";
import SelectInput from "./SelectInput"
const options = [{value: 'retailer', label: 'retailer'}, {value: 'farmer', label: 'farmer'}, {value: 'distributor', label: 'distributor'}, {value: 'customer', label: 'customer'}]

function AddRole({ methods, account }) {
  const [isOwner, setIsOwner] =useState(null);
  const [address, setAddress] =useState('');
  const [role, setRole] =useState(options[0]);
  const [error, setError]= useState(null);

  useEffect(()=>{
    findRole(methods, account, 'isOwner').then(res=> setIsOwner(res));
  }, [account, methods]);

  const handleClick=()=> {
    const methodName = `add${role.value.charAt(0).toLocaleUpperCase() + role.value.slice(1)}`
    const method =methods[methodName]
    method(address).send({from: account }).then(res=> setError(null)).catch(err=> setError('error, please try later'))
  }
  
  return (
    <div className="box">
    {isOwner && <>
      <h2>Add Role to {role.value}</h2>
      {error && <p className='error'>{error}</p>}
      <div className="form-group">
        Address
        <br />
        <input type="text" value={address} onChange={(e)=> setAddress(e.target.value)} size="50" />
        <br />
       <SelectInput options={options} selectedOption={role} handleChange={(value)=> setRole(value)} />
        <button className="btn-buy" type="button" onClick={handleClick}>
          Add address to {role.value}
        </button>
      </div></>
    }
    </div>
  );
}

export default AddRole;
