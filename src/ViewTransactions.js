import React, { useState, useEffect } from 'react';
import './ViewTransactions.css';
 
function ViewTransactions() {
    
    const [transactions, setTransactions] = useState([]);

    async function getTransactions() {
        try {
              await fetch("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view", {
                method: "POST",
                headers: { 
                    "x-api-key": "FagLlQytW3aPBTWJXcAxo2QA1QqEtr2u3xnBPLAd",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ 
                    accountKey: "adf0c561-9bef-4bb9-ae63-f6d755f254a0"
                })}
              ).then(res => res.json()).then(data => setTransactions(data));
          } catch (err) {
            console.error(err.message);
          }
    }
 
    useEffect(() => {
      getTransactions();
    }, []);
 
    return(
      <div>
        <p>This is the view transactions component</p>
        <table className="viewTransactions">
            <tr>
                <th>ID</th>
                <th>Order Type</th>
                <th>Time Stamp</th>
                <th>Asset Symbol</th>
                <th>Asset Amount</th>
                <th>Asset Price</th>
                <th>Cash Amount</th>
            </tr>
            {transactions.map(item => (
                <tr>
                    <th>{item.transactionId}</th>
                    <th>{item.orderType}</th>
                    <th>{item.timestamp}</th>
                    <th>{item.assetAmount}</th>
                    <th>{item.assetSymbol}</th>
                    <th>{item.assetPrice}</th>
                    <th>{item.cashAmount}</th>
                </tr>
            ))}
        </table>
      </div>
    );
    
}
 
export default ViewTransactions;