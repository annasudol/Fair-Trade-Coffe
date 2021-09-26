import React, { useState } from 'react';

function StarInfo1({ app }) {
  const [starInfoResponse, setStarInfoResponse] = useState(null);
  const [starID, setStarID] = useState('');

  const handleSubmitStarInfo= async (event)=> {
    event.preventDefault();
    let name = await app.lookUptokenIdToStarInfo(starID).call();
    setStarInfoResponse(name)
  }
    return (
       <>
        <form onSubmit={handleSubmitStarInfo}>
          <h2>Get Star Info</h2>
          <label>
              Star ID
              <input type="text" name="Star id" value={starID} onChange={(event)=> setStarID(event.target.value)}  />
            </label>
          <button disabled={!starID} type="submit">Look up a Star</button>
        </form>
        {starInfoResponse && (
        <div className="box">
            <h3 className="title">Star Name: {starInfoResponse}</h3>
        </div>
        )}
       </>
    );
}

export default StarInfo1;
