import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export function Forms() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const {user, id} = useParams();

    const myStyle = {
      padding: "10px",
      margin: "5px"
    }


  return (
    <div>
      <form >
        <h3>Login form Page</h3>
        <h2>user : {user} {id}</h2>
        <div style={myStyle}>
            <label htmlFor="username">UserName </label>
            <input type="text" name="name" id="username" placeholder='enter username' onChange={(e) => setName(e.target.value)} />
        </div>
        <div style={myStyle}> 
            <label htmlFor="password">Password </label>
            <input type="text" name="password" id="password" placeholder='enter password' onChange={(e) => setPassword(e.target.value)} />
        </div>
      </form>
      <Link to="/input">Input</Link>
    </div>
  )
}
