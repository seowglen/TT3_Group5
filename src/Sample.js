import React, { useState, useEffect } from 'react';
import './Sample.css';

function Sample() {
    const [name, setName] = useState('');

    async function getName() {
        try {
            const response = await fetch("http://localhost:5000/profile/", {
              method: "GET",
              headers: { token: localStorage.token },
            });
     
            const parseRes = await response.json();
            setName(parseRes.profile_name);
            // setInfo(parseRes.profile_info);
          } catch (err) {
            console.error(err.message);
          }
    }

    useEffect(() => {
      getName();
    }, []);

    return(
      <div>
        <p>{name}</p>
      </div>
    )
    
}

export default Sample;