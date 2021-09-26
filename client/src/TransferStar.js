import React, { useState } from 'react';

function TransferStar({ accounts, app }) {
    const [starID, setStarID] = useState('');
    const [address, setAddress] = useState('');
    const [results, setResults] =useState('');
  const handleTransferStars= async (event)=> {
    event.preventDefault();
    await app.transferStar(address, starID).send({from: accounts[0] });
    let ownerStar = await app.ownerOf(starID).call();
    setResults(ownerStar);
  }

    return (
        <form onSubmit={handleTransferStars}>
        <h2>Transfer Star</h2>
          <label>
            Star ID
            <input type="text" name="Star id" value={starID} onChange={(event)=> setStarID(event.target.value)}  />
          </label>
          <label>
            Address
            <input type="text" name="address" value={address} onChange={(event)=> setAddress(event.target.value)}  />
          </label>
          <button type="submit" disabled={!starID || !address}>Transfer Star</button>
          {results && <p>Owner of the star with ID: {starID} is {results}. Sent from {accounts[0]}</p>}
        </form>
    );
}

export default TransferStar;
