import React, { useState } from 'react'

export function Sign() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", userName);
    localStorage.setItem("pass", password);
    console.log("you cliked me", userName, password, name, email);
  }

  
  return ( 
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Sign up Page</h2>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" value={userName} onChange={(e) => setUserName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Name</label> 
        <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type='submit' >Submit</button>
    </form>
  )
}
