import React, {useState, useEffect} from "react";

function Transactions() {
    let apikey = "FagLlQytW3aPBTWJXcAxo2QA1QqEtr2u3xnBPLAd";
    let loginInfo = {
        "username": "Group5",
        "password": "sI5_BY_IaMTdS_9"
    };
    let balanceAccount = {
        "accountKey": "adf0c561-9bef-4bb9-ae63-f6d755f254a0"
    }
    const [executed, setexecuted] = useState(false);
    const [orderType, setOrderType] = useState("BUY");
    const [assetAmount, setAssetAmount] = useState(0);
    const [transactionId, setTransactionId] = useState(0);
    const [assetSymbol, setAssetSymbol] = useState(0);
    const [assetPrice, setAssetPrice] = useState(0);
    const [cashAmount, setCashAmount] = useState(0);
    const [assetBalance, setAssetBalance] = useState(0);
    const [cashBalance, setCashBalance] = useState(0);


    const handleSubmit = (evt) => {
      evt.preventDefault();
      if(assetAmount <= 0)
        alert(`Input Amount`)
      else {
        performTransaction(orderType,assetAmount)
      }
    }

    async function performTransaction(orderType,assetAmount) {
      try {
          await fetch("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add", {
            method: "POST",
            headers: { "x-api-key": "FagLlQytW3aPBTWJXcAxo2QA1QqEtr2u3xnBPLAd"},
            body: JSON.stringify({
              "accountKey": "adf0c561-9bef-4bb9-ae63-f6d755f254a0",
              "orderType": orderType,
              "assetAmount": assetAmount
            })
          }).then(response => response.json())
          .then(data => {
              setTransactionId(data.transactionId);
              setAssetSymbol(data.assetSymbol);
              setAssetPrice(data.assetPrice);
              setCashAmount(data.cashAmount);
              setAssetBalance(data.assetBalance);
              setCashBalance(data.cashBalance);
              setexecuted(true);
              /*alert(`Submitting Order Type ${orderType}, 
              Transaction Id ${data.transactionId}, 
              Asset Symbol ${data.assetSymbol}, 
              Asset Price ${data.assetPrice}, 
              Asset Amount ${assetAmount}
              Cash Amount ${data.cashAmount}, 
              Asset Balance ${data.assetBalance},
              Cash Balance ${data.cashBalance}`)*/
          });
        } catch (err) {
          console.error(err.message);
        }
  }

    return(
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              Order Type:
              <select onChange={e => setOrderType(e.target.value)}>
                <option value="BUY">Buy</option>
                <option value="SELL">Sell</option>
              </select>
              <br />
              Amount:
              <input type="text" name={assetAmount} onChange={e => setAssetAmount(e.target.value)} placeholder="10"/>
            </label>
            <br />
            <input type="submit" value="Submit"/>
          </form>
          <br />
          {executed ?
          <table>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="col">Order Type</th>
              <th scope="col">{orderType}</th>
            </tr>
            <tr>
              <th scope="col">Transaction Id</th>
              <th scope="col">{transactionId}</th>
            </tr>
            <tr>
              <th scope="col">Asset Symbol</th>
              <th scope="col">{assetSymbol}</th>
            </tr>
            <tr>
              <th scope="col">Asset Price</th>
              <th scope="col">{assetPrice}</th>
            </tr>
            <tr>
              <th scope="col">Cash Amount</th>
              <th scope="col">{cashAmount}</th>
            </tr>
            <tr>
              <th scope="col">Asset Balance</th>
              <th scope="col">{assetBalance}</th>
            </tr>
            <tr>
              <th scope="col">Cash Balance</th>
              <th scope="col">{cashBalance}</th>
            </tr>
          </tbody>
        </table> 
          : ""
          }
        </div>);
}

export default Transactions;
