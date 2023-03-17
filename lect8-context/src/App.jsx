import React, { useEffect, useState } from 'react';
import { Login } from './components/Loginup/Login';
import { Sign } from './components/Signup/Sign';


export function App() {
  const [originalUser, setOirginalUser] = useState(undefined);
  const [originalPass, setOirginalPass] = useState(undefined);

  

  useEffect(() => {
    const user = localStorage.getItem('user');
    const pass = localStorage.getItem("pass");

    if(user && pass){
      setOirginalPass(pass);
      setOirginalUser(user);
    }
  }, []);

  return (
    <div>
      {
        originalUser && originalPass ? <Login />
        :
        <Sign />
      }
    </div>
  )
}
