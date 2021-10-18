import React, { useState, useEffect } from 'react';

function WhoIsAccount({ account, instance, upc, product }) {
  // debugger
  const [error, setError]= useState(null);

  // debugger
  
  useEffect(()=> {
    // console.log(instance.methods, 'instance.methods')

      instance.methods.isFarmer(account).call().then(res=> console.log(res, 'res') ).catch(err=> console.log(err, "err"))
      instance.methods.isRetailer(account).call().then(res=> console.log(res, 'res') );
      instance.methods.isDistributor(account).call().then(res=> console.log(res, 'res') )
      instance.methods.isConsumer(account).call().then(res=> console.log(res, 'res') )
      .catch((err=> setError(err.message)));
  }, [account]);


  return (
    <div className="box">

      { error && <p className="error">{error}</p> }

      <div className="form-group"></div>
  
    </div>
  );
}

export default WhoIsAccount;
