import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './login.css';



async function loginUser(credentials) {
    try {
        const response = await fetch('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login', {
              method: 'POST',
              headers: {
                'x-api-key': 'FagLlQytW3aPBTWJXcAxo2QA1QqEtr2u3xnBPLAd'
              },
              body: JSON.stringify(credentials)
            })
        
        if (response.status !== 200){
            // console.log('NOT GRANTED')
            return false
        } else{
            // console.log('GRANTED')
            return true
        }
    } catch (err) {
        console.log(err)
    }
}

export default function Login({ setToken }) {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          "username": username,
          "password": password
        });
        setToken(token);
      }

  return(
    <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form onSubmit={handleSubmit}>
        <label>
            <p>Username</p>
            <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
            <button type="submit">Submit</button>
        </div>
        </form>
    </div>
  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }


