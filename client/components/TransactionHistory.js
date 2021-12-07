import React, { useEffect , useState} from 'react';

function TransactionHistory({account, contract }) {
  const [transactions, setTransactions] =useState([]);
  
  useEffect(()=> {
    contract.getPastEvents().then(res=> {
      const transactionDetails =res.map(item=> {
        return {event: item.event, address: Object.values(item.returnValues)[0]}
      });
      setTransactions(transactionDetails)
    });
  }, [contract]);

  return (
    <div className="box">
      <h2>
        Transaction History
      </h2>
      <div>
       {transactions.map((transaction, i)=> <div key={i} className='transaction-details'><p>{transaction.event}</p> <span>{transaction.address}</span></div>)}
      </div>
    </div>
  );
}

export default TransactionHistory;
