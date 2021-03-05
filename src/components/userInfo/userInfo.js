import React from 'react';
import './userInfo.css';


export default function UserInfo() {

    const userInfo= JSON.parse(sessionStorage.getItem("userInfo"))
    

  return(
    <div className="login-wrapper">
        <p>User Information</p>
        <ul>
            <li>First Name: {userInfo.firstName}</li>
            <li>Last Name: {userInfo.lastName}</li>
            <li>ID: {userInfo.nric}</li>
            <li>Address: {userInfo.address}</li>
            <li>Contact Number: {userInfo.phoneNumber}</li>
            <li>Email: {userInfo.email}</li>
        </ul>
    </div>
  )
}
