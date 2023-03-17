import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
export function Login() {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const originalUser = localStorage.getItem("user");
    const originalPass = localStorage.getItem("pass");

    if(originalUser === userName && originalPass === password){
      console.log("you logged in");
      setIsError(false);
      navigate("/home");
    }else{
      setIsError(true);
    }
    console.log("you cliked me", userName, password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login Page</h2>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" onChange={(e) => setUserName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Name</label>
        <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type='submit' >Submit</button>
      {
        isError && <p>Please enter correct username and password</p>
      }
    </form>
  )
}
