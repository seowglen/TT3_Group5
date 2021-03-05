import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenBool = JSON.parse(sessionStorage.getItem('token'));
    return tokenBool
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    sessionStorage.setItem('token', true);
    setToken(true);
  };

  return {
    setToken: saveToken,
    token
  }
}