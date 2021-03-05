import React, {useState, useEffect} from "react";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

function Historical() {
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
    const [data, setdata] = useState({});

    async function getInfo(orderType,assetAmount) {
      try {
          let id = 0;
          await fetch("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/historical", {
            method: "POST",
            headers: { "x-api-key": "FagLlQytW3aPBTWJXcAxo2QA1QqEtr2u3xnBPLAd"},
            body: JSON.stringify({})
          }).then(response => response.json())
          .then(data => {
              setdata(data.filter(({timestamp}) => {
                id += 1;
                return(id >= 1000)
              }).map(({price, timestamp}) => {
                let date = new Date(0)
                date.setUTCSeconds(timestamp);
                return {'datetime': date.toString(), 'timestamp': date, 'price': price}  
              }))
          });
        } catch (err) {
          console.error(err.message);
        }
    }
    useEffect(() => {
        getInfo();
    }, []);

    return(
        <div>
            <LineChart
                width={1500}
                height={500}
                data={data}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="timestamp" tick={false} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="price" stroke="#82ca9d" />
            </LineChart>
        </div>
    )
}

export default Historical;
