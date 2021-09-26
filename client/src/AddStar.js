import React, { useState } from 'react';

function AddStar({ accounts, app }) {
  const [starName, setStarName] = useState('');
  const [starID, setStarID] = useState('');
  const [response, setResponse]= useState('');
  const handleSubmitAddStar= async (event)=> {
    event.preventDefault();
    await app.createStar(starName, starID).send({from: accounts[0] });
    let name = await app.lookUptokenIdToStarInfo(starID).call();
    setResponse(name)

  }
    return (
      <form onSubmit={handleSubmitAddStar}>
        <h2>Create new Star</h2>
          <label>
            Star Name
            <input type="text" name="Star Name" onChange={(event)=> setStarName(event.target.value)} />
          </label>
          <label>
            Star ID
            <input type="text" name="Star id" onChange={(event)=> setStarID(event.target.value)}  />
          </label>
          <button type="submit" disabled={!starName || !starID}>Create Star</button>
          {response && <p>Added star with name {response} and ID:{starID} from {accounts[0]}</p>}
      </form>
    );
}

export default AddStar;
