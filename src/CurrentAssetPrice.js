import React, { useState, useEffect } from 'react';
import './CurrentAssetPrice.css';
 
function CurrentAssetPrice() {
    const [assetSymbol, setAssetSymbol] = useState('');
    const [timeStamp, setTimeStamp] = useState('');
    const [price, setPrice] = useState(0);
 
    async function getPrice() {
        try {
            setInterval(async () => {
              const response = await fetch("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current", {
                method: "POST",
                headers: { "x-api-key": "FagLlQytW3aPBTWJXcAxo2QA1QqEtr2u3xnBPLAd"}
              });
     
              const parseRes = await response.json();
              const date = new Date(parseRes.timestamp).toString();
              setAssetSymbol(parseRes.assetSymbol);
              setPrice(parseRes.price);
              setTimeStamp(date);
            // setInfo(parseRes.profile_info);
            }, 30000);
          } catch (err) {
            console.error(err.message);
          }
    }
 
    useEffect(() => {
      getPrice();
    }, []);
 
    return(
      <div className="currentAssetPrice">
        <p>Asset: {assetSymbol}</p>
        <p>Time: {timeStamp}</p>
        <p>Price: {price}</p>
      </div>
    )
    
}
 
export default CurrentAssetPrice;