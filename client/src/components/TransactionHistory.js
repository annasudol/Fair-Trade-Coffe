import React, { useState } from 'react';

function TransactionHistory({ accounts, app }) {
  return (
    <div class="box">
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
