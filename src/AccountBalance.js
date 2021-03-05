import React, {useState, useEffect} from "react";

function AccountBalance() {
    let apikey = "FagLlQytW3aPBTWJXcAxo2QA1QqEtr2u3xnBPLAd";
    let loginInfo = {
        "username": "Group5",
        "password": "sI5_BY_IaMTdS_9"
    };
    let balanceAccount = {
        "accountKey": "adf0c561-9bef-4bb9-ae63-f6d755f254a0"
    }
    const [assetBalance, setAssetBalance] = useState(0);
    const [cashBalance, setCashBalance] = useState(0);

    async function getInfo() {
        try {
            await fetch("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance", {
              method: "POST",
              headers: { "x-api-key": "FagLlQytW3aPBTWJXcAxo2QA1QqEtr2u3xnBPLAd"},
              body: JSON.stringify(balanceAccount)
            }).then(response => response.json())
            .then(data => {
                setAssetBalance(data.assetBalance);
                setCashBalance(data.cashBalance)
            });


            //const parseRes = await response.json();
            //setName(parseRes.profile_name);
          } catch (err) {
            console.error(err.message);
          }
    }

    useEffect(() => {
        getInfo();
      }, []);

    return(
        <div>
            AccountID: {balanceAccount["accountKey"]}
            <br />
            Asset Balance: {assetBalance}
            <br />
            Cash Balance:{cashBalance}
        </div>);
}

export default AccountBalance;
