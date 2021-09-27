import React, { useState } from 'react';

function TransactionHistory({accounts, contract }) {
  return (
    <div className="box">
      <h2>
        Transaction History<span id="ftc-history"></span>
      </h2>
      <div>
        <ul></ul>
      </div>
    </div>
  );
}

export default TransactionHistory;
