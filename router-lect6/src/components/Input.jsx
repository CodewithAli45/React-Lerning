import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export function Input() {
    const [data, setData] = useState("");

  return (
    <div>
      <h2>Please enter below</h2>
      <input type="text" id="" onChange={(e) => setData(e.target.value) } />
      <h3>You have enter : {data}</h3>
      <Link to="/form/ali/45">form</Link>
      <Link to="/input">Current Page</Link>
    </div>
  )
}
