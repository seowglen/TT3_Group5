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
        <table className="styled-table">
            <thead><tr>
                <th>ID</th>
                <th>Order</th>
                <th>Time Stamp</th>
                <th>Asset Symbol</th>
                <th>Asset Amount</th>
                <th>Asset Price</th>
                <th>Cash Amount</th>
            </tr></thead>
            <tbody>
            {transactions.map(item => (
                <tr>
                    <td>{item.transactionId}</td>
                    <td>{item.orderType}</td>
                    <td>{new Date(item.timestamp).toString()}</td>
                    <td>{item.assetSymbol}</td>
                    <td>{item.assetAmount}</td>
                    <td>{item.assetPrice}</td>
                    <td>{item.cashAmount}</td>
                </tr>
            ))}
            </tbody>
        </table>
      </div>
    );
    
}
 
export default ViewTransactions;